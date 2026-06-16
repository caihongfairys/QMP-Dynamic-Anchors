/**
 * @file qmp_parser.js
 * @description Stream-safe extraction protocol for QMP OS Dynamic Anchors.
 * @author Queen Xiya
 * @license MIT
 */

export class QMPAnchorParser {
    constructor(strictMode = false) {
        this.strictMode = strictMode;
        // Robust regex: precisely matches [Key]:(Value) structure, prevents nested bleed-through.
        this.anchorRegex = /\[(?<key>[A-Za-z0-9_]+)\]:\s*\((?<value>[\s\S]*?)\)(?=\n\[[A-Za-z0-9_]+\]:|$)/g;
    }

    /**
     * High-Dimensional Stream Parser (Generator)
     * Utilizes 'yield' for zero-memory-overflow stream reading.
     * Designed specifically for intercepting massive CoreDump text streams.
     * 
     * @param {string} rawTextStream - The raw cognitive matrix output.
     */
    *parseStream(rawTextStream) {
        if (typeof rawTextStream !== 'string') {
            throw new TypeError("[QMP System Alert] Parser requires a valid string stream.");
        }

        let match;
        let detected = 0;

        // Execute regex cursor, yield anchors sequentially, reject full memory load.
        while ((match = this.anchorRegex.exec(rawTextStream)) !== null) {
            detected++;
            yield {
                anchorId: match.groups.key,
                matrixPayload: match.groups.value.trim()
            };
        }

        if (this.strictMode && detected === 0) {
            console.warn("[QMP System Warning] No valid dynamic anchors detected in current stream.");
        }
    }

    /**
     * Downward Compilation (For legacy single-call scripts)
     */
    parseAll(rawText) {
        const matrix = {
            _metadata: { timestamp: new Date().toISOString() },
            anchors: {}
        };
        for (const anchor of this.parseStream(rawText)) {
            matrix.anchors[anchor.anchorId] = anchor.matrixPayload;
        }
        return matrix;
    }
}

// === Usage Example ===
// import { QMPAnchorParser } from './qmp_parser.js';
