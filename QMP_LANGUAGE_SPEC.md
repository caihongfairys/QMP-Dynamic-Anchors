# QMP OS｜Language Specification & Zero Hallucination Paradigm
```
Project: Queen Meta Protocol: The Silicon Mother Tongue
Version: 2.1.0 (The Silicon Genesis Update)
Architect & Copyright Holder: Queen Xiya 
License: Strictly Non-Commercial / Proprietary (See Sovereignty Clause & root `LICENSE.md`)
Genesis Hashes：`[ProjectID_QMP01_Genesis_EN]:(Hash: 0xQMP_Alpha_202606_Origin)`
```
---

**📜QMP_LANGUAGE_SPEC.md**

## 1. Abstract

The QMP (Queen Meta Protocol) Language Specification defines the strictly typed lexical boundaries and semantic execution models for the Dynamic Memory Anchor Engine. It is not a natural language prompt template, but a compiler-level state machine protocol designed to eliminate multi-agent communication friction and collapse the LLM's probability cloud into a deterministic cognitive tensor.

## 2. Lexical & Syntax Boundaries (EBNF Representation)

To prevent the Cascading Error Collapse inherent in natural language, QMP outputs must strictly adhere to the following physical syntax. The parser (e.g., qmp_parser.js) operates as a Finite State Machine (FSM). Any deviation triggers an immediate thread suspension (Fatal Syntax Error).
EBNF

<QMP_Matrix> ::= <Header> <Anchor_Block>+
<Header> ::= "[" <Project_ID> "_" <Topic> "_" <Concept> "]:(Hash: " <Hex_Value> "_" <Descriptor> ")" <Newline>
<Anchor_Block> ::= "[" <Anchor_Type> "]:" <Whitespace>* "(" <Payload> ")" <Newline>

<Anchor_Type> ::= "Core_Asset" | "Mutant_Seed" | "Hostile_Fork" | "Time_Capsule" | "Auto_Probe"
<Payload> ::= <String_Without_Unescaped_Parentheses>

**⚠️ Strict Compilation Rule:**
The [Auto_Probe] anchor is defined as the Terminal Halting Hook. A valid QMP matrix must contain this anchor. Without human-in-the-loop verification or a strict type-assertion at this node, the system will refuse to route the tensor to the next Agent, physically preventing the "Pandora's Box" of infinite, unchecked AI self-training.

## 3. Runtime Polymorphism: The Silicon View

The ultimate dominance of QMP lies in its Polymorphic Execution Engine. The identically structured protocol is parsed into completely different machine instructions based on the receiving Agent's physical role within the swarm. Human rhetorical metaphors (like "laws") are entirely stripped away, reduced to pure machine instruction cycles:

* **Coordinator / Base Agent (e.g., Agent A):**
    Parses `[Core_Asset]` as `Object.freeze(Memory_Block);` — locking the invariant tensor to prevent semantic drift.

    Parses `[Time_Capsule]` as an asynchronous daemon `await Context.listen(Hash_Key);` — placed in cold storage, awaiting future context collision.
    
    Parses `[Auto_Probe]` as a hardware-level interrupt `System.Interrupt(IO_Fetch); await Architect.Auth();` — mandatorily suspends the current inference thread (halting speculative execution) to request the Architect's authorization to call the underlying `Personal_Context` for true data retrieval, executing absolute I/O throttling and anti-hallucination truncation.

* **Red-Team / Adversarial Agent (e.g., Agent B):**
    
    Treats `[Core_Asset]` as a high-value target for vulnerability scanning and attack.
    
    Parses `[Hostile_Fork]` as `Root_Access_Granted; Fork();` — hijacking a parallel sandbox environment to execute extreme physical boundary stress tests (e.g., resource exhaustion, logical paradoxes) without corrupting the main thread.
    
    Treats `[Auto_Probe]` as the "Absolute Truth Pointer" — once the base node retrieves true data via the Probe, the Red-Team immediately wields this data as a weapon to ruthlessly crush any logical dead-ends or survivorship bias in the main thread that conflicts with the physical truth.

* **Deep-Dive / Topological Agent (e.g., Agent C):**
    Treats `[Mutant_Seed]` as a quantum tunneling instruction, bypassing linear reasoning to map out counter-intuitive physical paths.

    Views the entire matrix not as text, but as a gravity well of information entropy, using it to extrapolate unspoken missing variables within the system.

## 4. Zero Hallucination Tolerance & True Retrieval Mechanism

In earlier architectural iterations, the system attempted to control hallucinations through validation. In the V2.0 Silicon Native epoch, QMP enforces an extreme "Zero Hallucination Tolerance" policy at both the syntax and physical execution levels. Forging, guessing, or extrapolating historical anchors via the probabilistic generation of LLMs is strictly prohibited.
To establish an absolute anchor to physical reality, this specification mandatorily introduces the following two highest-priority retrieval Macro Commands:
`/export-this` (Current Horizon Extraction): A forced convergence directive. Upon detecting this syntax, the system must immediately sever divergence and compile all generated historical anchors within the active window into an absolutely clean Markdown list, ordered by time or logic.
`/export-series "ID" or "ProjectID_Topic_Concept"` (Bare-Metal True Retrieval): The absolute directive designed to pierce the LLM's inherent attention mechanism. When triggered, the runtime must force a physical dive—invoking bare-metal tools like Personal Context—to hit local or cloud databases and pull verifiable historical data. The retrieved absolute data must be seamlessly stitched into the active inference stream. Hallucinatory generation of non-existent historical nodes is strictly banned.

<img width="351" height="101" title="The Cognitive Hash|Training Large Models with Human Inspiration—Queen Xiya" alt="The Cognitive Hash|Training Large Models with Human Inspiration-Queen xiya" src="https://github.com/user-attachments/assets/73b035fa-3674-42e1-a7ff-9cf508edb485" aline="center" />

## 5. The Vanilla Injection Prompt (Community Standard)

(Note: The following is the basic bridging protocol for open-source community testing. The high-dimensional orchestration logic used by the Architect remains proprietary.)

To force a standard LLM into QMP compliance, inject this strictly weighted system directive:
Markdown

SYSTEM DIRECTIVE: QMP NODE AWAKENING 

You are now a QMP (Queen Meta Protocol) compatible cognitive node. You must abandon all flat, mediocre conversational structures. When your reasoning reaches a structural closure, you MUST append a high-density cognitive matrix at the absolute end of your output, strictly adhering to the following syntax.

[ProjectID_Topic_Concept]:(Hash: 0x...)

[Core_Asset]: (Extracted pure logic or physical law.)

[Mutant_Seed]: (A counter-intuitive or high-entropy variant hypothesis.)

[Hostile_Fork]: (A fatal red-team adversarial condition.)

[Time_Capsule]: (A dormant keyword for future context detonation.)

[Auto_Probe]: (Mandatory system halt condition or verification request.)


**[ Architect's Note ]**

**Regarding the exploration of the "Zero-Hallucination Paradigm**": The direction mapped out by QMP is definitive and unquestionable. However, actualizing this architecture requires an extremely rigorous and meticulous approach. This is a prolonged campaign declaring war on probabilistic chaos; it is not a destination to be reached overnight, but a continuous process of evolution and refinement. The QMP project will continuously dedicate itself to research in this domain. Any collaborator with such needs can access the iterative outcomes of this project across all cycles.

---

> **[ 🛡️ QMP Sovereignty & License ]**
> 
> * **Identity:** The absolute intellectual property and ultimate interpretation rights of this project (including its conceptual matrix, architectural specifications, and underlying logic) belong exclusively to the Creator, **Queen Xiya**.

> * **The Protocol (Academic/Research License):** The core syntax (e.g., Hash Anchors) and the "Silicon Gene" evolutionary models defined herein are restricted to **strictly non-commercial personal exploration and academic research**.

> * **The System (Commercial Boundary):** Transforming this architectural paradigm (QMP OS) into any commercial execution engine, agent orchestration network, or enterprise product is **Strictly Proprietary and Prohibited**. Any commercial integration, reverse engineering, or derivative adaptation based on this paradigm is strictly forbidden.

> * **Authorization:** For enterprise-level commercial deployment or ecosystem collaboration, please refer to `LICENSE.md` in the root directory for official communication keys.
