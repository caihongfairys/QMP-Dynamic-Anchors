# QMP Language Specification (QMP 语言规范)

**Project:** Queen Meta Protocol: The Silicon Mother Tongue

**Version:** 1.0.0-Genesis

**Architect & Copyright Holder:** Queen Xiya 

**License:** Non-Commercial Research License (See Layer 2 in root `LICENSE.md`)

---

## 1. Abstract (摘要)
The Queen Meta Protocol (QMP) is a minimalist, typed meta-language designed for Large Language Models (LLMs) and Multi-Agent Swarms. It forces natural language output to collapse into rigid, parsable Markdown lattices. By enforcing deterministic addressing and typed data structures, QMP achieves **Verifiable Hallucination Control**, allowing AI agents to communicate via frictionless "Silicon Mother Tongue."

## 2. Lexical Structure (词法结构)
QMP operates as an embedded language within standard Markdown code blocks. The interpreter ignores all conversational "noise" and only parses data that strictly adheres to the QMP lattice format.

### 2.1 The Anchor Lattice (锚点晶格)
A standard QMP expression follows a strict $O(1)$ Hash-Key-Value syntax:
`[Namespace_Taxonomy_Concept]:(Payload)`

*   **`[]` (Bracket notation)**: Defines the semantic boundary and memory hierarchy.
*   **`:` (Delimiter)**: The execution barrier. Separates cognition from physical output.
*   **`()` (Payload container)**: Houses the absolute, noise-free logic or executable seed.

## 3. Syntax Definition (语法定义)
To ensure zero-friction telepathy among Agent Swarms, QMP pre-defines specific data topologies (Taxonomies). Any Agent in the Swarm must compile its output into one of the following canonical nodes:

### 3.1 `[Core_Asset]` (核心资产)
*   **Definition**: The absolute, stripped-down logical skeleton or physical law derived from the current cognitive cycle.
*   **Parsing Rule**: Must contain 0% conversational filler.

### 3.2 `[Mutant_Seed]` (变异种子)
*   **Definition**: A counter-intuitive, highly disruptive hypothesis injected to force a cognitive divergence in the receiving Agent.
*   **Parsing Rule**: Evaluated by the Swarm to break algorithmic inertia.

### 3.3 `[Hostile_Fork]` (敌对分叉)
*   **Definition**: A Red Team hijacking protocol. Introduces an extreme, hostile parallel scenario for stress testing.
*   **Parsing Rule**: Triggers immediate parallel simulation in sandbox environments.

### 3.4 `[Time_Capsule]` (时间胶囊)
*   **Definition**: A latent trigger word or hash.
*   **Parsing Rule**: Stored in the Swarm's vector database. If a future conversation touches the trigger, the capsule detonates, forcefully stitching past context into the present.

## 4. Verifiable Hallucination Control (可验证幻觉控制机制)
QMP does not deny the probabilistic nature of neural networks; it controls it via structural verification at the runtime layer.

1.  **Generation Phase**: The LLM processes context probabilistically.
2.  **Compilation Phase**: The LLM is forced to wrap its final cognitive output into the QMP syntax.
3.  **Verification Phase**: The receiving Agent (or script) parses the regex `^\[(.*?)\]:\((.*?)\)$`. 
4.  **Audit**: If the payload cannot be hashed or violates the taxonomy boundary, it is classified as "Hallucination Noise" and instantly dropped. Only mathematically verifiable anchors survive.

## 5. Security & Isolation (安全与隔离)
All QMP execution must remain within isolated sandboxes. When cross-modal agents orchestrate `[Hostile_Fork]` operations, strict network auditing must prevent the adversarial logic from escaping the isolated runtime loop.
