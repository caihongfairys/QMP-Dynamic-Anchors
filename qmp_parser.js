/**
 * @file qmp_parser.js
 * @description Stream-safe extraction protocol for QMP OS Dynamic Anchors.
 * @author Queen Xiya
 * @license MIT
 */

export class QMPAnchorParser {
    constructor(strictMode = false) {
        this.strictMode = strictMode;
        // 健壮正则：精准匹配 [Key]:(Value) 结构，防穿透嵌套干扰
        this.anchorRegex = /\[(?<key>[A-Za-z0-9_]+)\]:\s*\((?<value>[\s\S]*?)\)(?=\n\[[A-Za-z0-9_]+\]:|$)/g;
    }

    /**
     * 高维流式解析器 (Generator)
     * 利用 yield 实现零内存溢出的流式读取，专为处理海量 CoreDump 文本设计。
     * @param {string} rawTextStream - 原始高密度思维流
     */
    *parseStream(rawTextStream) {
        if (typeof rawTextStream !== 'string') {
            throw new TypeError("[Kernel Alert] QMP Parser requires a string stream.");
        }

        let match;
        let detected = 0;

        // 执行正则游标，逐块抛出锚点，拒绝全量内存加载
        while ((match = this.anchorRegex.exec(rawTextStream)) !== null) {
            detected++;
            yield {
                anchorId: match.groups.key,
                matrixPayload: match.groups.value.trim()
            };
        }

        if (this.strictMode && detected === 0) {
            console.warn("[System Warning] No valid QMP signatures detected in current stream.");
        }
    }

    /**
     * 降维输出 (供低维脚本一次性调用)
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
