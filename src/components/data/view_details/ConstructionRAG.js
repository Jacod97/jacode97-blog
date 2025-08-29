import React from "react";

export default function ConstructionRAG({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          width: "70%",
          maxHeight: "90vh",
          overflowY: "auto",
          textAlign: "left",
          position: "relative",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            border: "none",
            background: "transparent",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        <h2>Creating Construction Accident Prevention and Response Measures Using RAG</h2>
        <p>
          <b>Period:</b> Feb 2025 – Mar 2025
        </p>
        <p>
          <b>Keywords:</b> #LLM, #RAG, #Ollama
        </p>

        <h3>01. Project Introduction</h3>
        <p>
          This project was conducted as part of the Hansol Deco Season 3 AI Competition.
          It aims to develop an AI model that analyzes the causes of construction accidents
          and automatically generates countermeasures, including prevention and response strategies,
          based on accident situation data.
        </p>

        <h3>02. Roles and Contributions</h3>
        <h4>Handling Missing Values</h4>
        <p>
          Rather than simple deletion of missing values, this project adopted a
          <i>manual correction approach focused on data restoration</i>.
          For key columns such as <code>construction_type</code>, <code>accident_object</code>,
          and <code>work_process</code>, meaningful values were predefined by accident ID,
          and appropriate values were directly assigned when the ID was encountered.
          This effectively preserved the contextual integrity of each accident case.
        </p>

        <h4>Accident Report Preprocessing and Metadata Classification</h4>
        <ul>
          <li>Constructed a metadata dictionary to automatically classify construction type, work type, accident type, and accident object based on report filenames.</li>
          <li>Implemented dynamic filtering conditions according to question keywords to enhance search performance.</li>
        </ul>

        <h4>RAG-based Retrieval System</h4>
        <ul>
          <li>Built a LangChain-based vector search system augmented with metadata filtering to improve case relevance.</li>
          <li>Ensured contextual reliability by retrieving only accident cases relevant to the query.</li>
        </ul>

        <h4>FAISS Vector Store and GPU Embedding</h4>
        <ul>
          <li>Utilized the <code>jhgan/ko-sbert-sts</code> model to embed documents and stored them in FAISS.</li>
          <li>Enabled fast batch encoding and GPU acceleration to process thousands of documents efficiently.</li>
        </ul>

        <h4>Ollama-based Gemma3 Model for Response Generation</h4>
        <ul>
          <li>Generated concise response statements using the Gemma3 model by leveraging retrieved similar cases as context.</li>
          <li>Controlled format according to evaluation standards (token limit, unified style, removal of unnecessary modifiers).</li>
        </ul>

        <h3>03. Issues and Resolutions</h3>
        <p>
          During development, challenges arose regarding the handling of incomplete accident data and balancing
          between generative and retrieval-based responses. Manual correction ensured contextual fidelity,
          while adjustments to the RAG pipeline improved precision.
        </p>

        <h3>04. Analysis of Winning Team</h3>
        <p>
          The first-place team embedded the <code>cause_of_accident</code> column at the sentence level
          and used cosine similarity to retrieve similar accidents. Their responses directly referenced
          sentences from retrieved documents, which aligned strongly with the evaluation metrics.
          Additionally, they standardized response length by analyzing the average and median of sentence lengths.
        </p>
        <p>
          In contrast, our project employed a composite feature approach
          (<code>construction_type</code>, <code>accident_object</code>, <code>work_process</code>, and <code>cause_of_accident</code>)
          combined with LLM-based generation. This ensured flexibility and practical applicability,
          though it was less directly aligned with evaluation scoring based on lexical similarity.
        </p>

        <h3>05. Project Retrospective</h3>
        <p>
          To better reflect real-world construction accident scenarios, this project separated and structured
          critical fields such as construction type, accident object, work process, and cause of accident.
          A LangChain-based RAG system was combined with Ollama’s Gemma3 model to generate structured responses.
        </p>
        <p>
          Special emphasis was placed on <b>handling missing values</b>. Instead of discarding incomplete data,
          accident IDs were manually mapped to appropriate domain-specific corrections, minimizing information loss
          and preserving consistency.
        </p>
        <p>
          While this structural approach supported practical applicability, it faced disadvantages in
          quantitative evaluations compared to reference-based methods. Generative responses were semantically rich
          and natural, but they tended to score lower than direct retrieval-based responses in similarity metrics.
        </p>
        <p>
          This highlighted the importance of designing <i>hybrid strategies</i> that flexibly combine
          generative and retrieval methods depending on evaluation criteria and practical needs.
        </p>
      </div>
    </div>
  );
}
