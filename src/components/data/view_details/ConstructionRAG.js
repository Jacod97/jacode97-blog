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
          This project was developed within the framework of the Hansol Deco Season 3 AI Competition.
          Its purpose was to design an AI model capable of analyzing construction accident data
          to determine root causes and to generate countermeasures, including prevention and response strategies.
        </p>

        <h3>02. Roles and Contributions</h3>
        <h4>Handling Missing Values</h4>
        <p>
          Instead of simply removing missing values, this project adopted a
          <i>domain-informed manual correction approach</i> focused on data restoration.
          For critical fields such as <code>construction_type</code>, <code>accident_object</code>, 
          and <code>work_process</code>, meaningful values were predefined by accident ID.
          When a specific ID was encountered, the relevant value was assigned directly.
          This ensured contextual fidelity for each accident record.
        </p>

        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "0.9rem",
            lineHeight: "1.4",
          }}
        >
{`construction_fill_values = {
    "TRAIN_02856": "Architecture > Finishing work",
    "TRAIN_13708": "Civil > Earthwork",
    # ...
}

for record_id, value in construction_fill_values.items():
    train.loc[train["ID"] == record_id, "construction_type"] = value`}
        </pre>

        <p>
          The same procedure was applied to <code>accident_object</code> and <code>work_process</code>.
          Where mapping values were absent, the label “Other” was used as a substitute.
          For <code>personal_accident</code>, <code>material_accident</code>, and <code>cause_of_accident</code>, 
          conventional missing-value handling was applied, assigning default values to avoid errors in text-model inputs:
        </p>

        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "0.9rem",
            lineHeight: "1.4",
          }}
        >
{`train["personal_accident"].fillna("None", inplace=True)
train["material_accident"].fillna("None", inplace=True)
train["cause_of_accident"].fillna("Other", inplace=True)`}
        </pre>

        <h4>Accident Report Preprocessing and Metadata Classification</h4>
        <ul>
          <li>Constructed a metadata dictionary to automatically classify accident reports into construction type, work type, accident type, and accident object, based on filenames.</li>
          <li>Introduced dynamic keyword-based filters to enhance retrieval accuracy for context-specific questions.</li>
        </ul>

        {/* 메타데이터 테이블 */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Metadata Field</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Category</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Keyword Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>construction_type</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Architecture</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Building, construction site, contractor</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>construction_type</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Civil</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Bridge, tunnel, road, railway</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>construction_type</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Landscape</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Landscape, tree, planting</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>construction_type</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Facility</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Facility, plant, machinery</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>construction_type</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Other</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Not included above</td>
            </tr>
          </tbody>
        </table>

        <h4>RAG-based Retrieval System</h4>
        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "0.9rem",
            lineHeight: "1.4",
          }}
        >
{`rag_chain = (
    {
        'context': lambda inputs: "\\n\\n".join([
            res['section'] for res in search_similar_sections(
                inputs['question'], vectorstore,
                filters=get_dynamic_filters(inputs['question']), k=3
            )
        ]),
        'question': itemgetter("question")
    }
    | prompt 
    | llm
    | StrOutputParser()
)`}
        </pre>

        <h4>FAISS Vector Store and GPU Embedding</h4>
        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "0.9rem",
            lineHeight: "1.4",
          }}
        >
{`model = SentenceTransformer("jhgan/ko-sbert-sts").to(device)
embeddings = model.encode(batch, device=device)`}
        </pre>

        <h4>Ollama-based Gemma3 Model</h4>
        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "0.9rem",
            lineHeight: "1.4",
          }}
        >
{`llm = ChatOllama(model='gemma3:27b', temperature=0.0)
result = llm.invoke({"context": context, "question": question})`}
        </pre>

        <h3>03. Issues and Resolutions</h3>
        <p>
          Issues emerged in balancing manual correction of accident data with automated generation.
          Domain-based corrections ensured consistency, while adjustments to the retrieval pipeline
          improved overall system reliability.
        </p>

        <h3>04. Analysis of Winning Team</h3>
        <p>
          The first-place team embedded the <code>cause_of_accident</code> column at the sentence level,
          using cosine similarity to retrieve relevant accidents. Their method directly referenced
          retrieved sentences to generate responses, aligning closely with the evaluation metrics.
        </p>
        <p>
          They standardized response length by examining the average and median sentence lengths,
          and avoided composite features, focusing on sentence-level embeddings to achieve
          intuitive similarity matching.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Comparison Item</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Winning Team</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>This Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Embedding Basis</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Cause of Accident (sentence)</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                Construction Type, Accident Object, Work Process, Cause of Accident (composite)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Similarity Calculation</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Cosine similarity</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Vector retrieval (RAG)</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Response Method</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Reference & Combine Sentences</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>LLM generation or retrieval-based</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Evaluation Strategy</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Optimized for Jaccard similarity</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Semantic-rich response generation</td>
            </tr>
          </tbody>
        </table>

        <h3>05. Project Retrospective</h3>
        <p>
          This project aimed to realistically capture accident scenarios by separating and structuring
          fields such as construction type, accident object, work process, and cause of accident.
          A LangChain-based RAG retrieval pipeline was combined with Ollama’s Gemma3 LLM to
          generate structured responses.
        </p>
        <p>
          The most critical element was <b>handling missing values</b>. Rather than simple deletion,
          manual corrections were performed according to accident IDs, reflecting domain knowledge
          to minimize data loss and maintain consistency.
        </p>

        <pre>
          <code className="language-python">{`
construction_fill_values = {
    "TRAIN_02856": "Architecture > Finishing work",
    ...
}
for record_id, value in construction_fill_values.items():
    train.loc[train["ID"] == record_id, "construction_type"] = value

train["personal_accident"].fillna("None", inplace=True)
train["cause_of_accident"].fillna("Other", inplace=True)
          `}</code>
        </pre>

        <p>
          While this approach strengthened real-world applicability, it was less aligned with
          evaluation metrics such as Jaccard similarity. Generative responses provided semantically
          rich and natural outputs, but they sometimes scored lower than retrieval-based methods
          in quantitative assessments.
        </p>
        <p>
          This experience underscored the need to design <i>hybrid strategies</i> that flexibly
          combine generation and retrieval depending on evaluation metrics and practical contexts.
        </p>
      </div>
    </div>
  );
}
