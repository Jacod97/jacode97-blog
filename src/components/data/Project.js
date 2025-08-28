import { useState } from "react";

export default function Projects({ onClose = () => {} }) {
  const [selectedProject, setSelectedProject] = useState(null);

    const projectList = [
    {
        id: "proj-1",
        title: "Automated Presentation Generation System Using a Multimodal VLM-LLM-TTS Pipeline",
        period: "Mar 2025 – Apr 2025",
        keywords: "#LangChain, #RAG, #Multimodal, #TTS",
        description: `Developed an automated presentation system for individuals with presentation anxiety.
    Extracted text and images from presentation slides (PDF) and generated page-wise presentation scripts.
    Implemented TTS integration for fully automated presentation deliver.`,
    },
    {
        id: "proj-2",
        title: "Creating Construction Accident Prevention and Response Measures Using RAG",
        period: "Feb 2025 – Mar 2025",
        keywords: "#LLM, #RAG, #Ollama",
        description: `Participated in DACON Hansol Deco Season 3 Generative AI Competition.
    Built a RAG-based LLM system to analyze construction accident data, identify causes, and generate response messages by retrieving similar past cases.`,
    },
    {
        id: "proj-3",
        title: "Children's Drawings Using Object Detection and Natural Language Processing Models Psychological Analysis Assistance System",
        period: "Feb 2025 – Mar 2025",
        keywords: "#ComputerVision, #LLM, #RAG, #Rule-based",
        description: `Built an AI-powered psychological assessment system based on HTP (House–Tree–Person) drawings.
    Detected objects and analyzed visual attributes (size, position, composition) using CV techniques.
    Combined rule-based evaluation with LLM interpretation to generate automated psychological assessments.`,
    },
    {
        id: "proj-4",
        title: "Development of a Wildfire Prediction Model Using Machine Learning",
        period: "Jan 2025 – Feb 2025",
        keywords: "#SpatialData, #DataMining, #MachineLearning",
        description: `Predicted wildfire occurrence using ensemble learning techniques.
    Integrated meteorological data, population density, and agricultural land usage data to improve prediction accuracy.`,
    },
    ];

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
        zIndex: 1000,
      }}
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        style={{
          background: "white",
          padding: "1.8rem",
          borderRadius: "12px",
          width: "75%", // 프로젝트 박스 가로 조금 늘림
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          textAlign: "left",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close (X) */}
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

        <h2 style={{ marginBottom: "1rem" }}>Projects</h2>
        <ul style={{ paddingLeft: "1rem", textAlign: "left" }}>
          {projectList.map((p) => (
            <li key={p.id} style={{ marginBottom: "1.5rem" }}>
              <h3>
                {p.title}{" "}
                <span style={{ fontSize: "0.9rem", color: "gray" }}>
                  ({p.period})
                </span>
              </h3>
              <p>
                <b>Keywords:</b> {p.keywords}
              </p>
              <p style={{ whiteSpace: "pre-line" }}>{p.description}</p>

              {/* View Details Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(p)}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.4rem 0.8rem",
                  border: "1px solid #007bff",
                  borderRadius: "5px",
                  background: "white",
                  color: "#007bff",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom Close */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: "6px",
              background: "#007bff",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Close
          </button>
        </div>

        {/* Details Modal */}
        {selectedProject && (
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
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                width: "80%", // Timeline과 같은 크기
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                textAlign: "left",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close (X) */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
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

              <h3>{selectedProject.title}</h3>
              <p style={{ color: "gray" }}>{selectedProject.period}</p>

              {/* 상세내용 비워둠 */}
              <div
                style={{
                  margin: "1rem 0",
                  minHeight: "200px",
                  border: "1px dashed #ccc",
                  padding: "1rem",
                  textAlign: "left",
                }}
              >
                (Details will be added here later)
              </div>

              {/* Bottom Close */}
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  style={{
                    padding: "0.6rem 1.2rem",
                    border: "none",
                    borderRadius: "6px",
                    background: "#007bff",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}