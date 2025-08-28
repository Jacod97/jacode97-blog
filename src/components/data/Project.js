import { useState } from "react";

export default function Projects({ onClose = () => {} }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: "proj-1",
      title: "Presentation Agent",
      period: "Mar 2025 – Apr 2025",
      keywords: "#LangChain, #RAG, #Multimodal, #TTS",
      description: `Developed an automated presentation system for individuals with presentation anxiety.
Extracted text and images from presentation slides (PDF) and generated page-wise presentation scripts.
Implemented TTS integration for fully automated presentation deliver.`,
    },
    {
      id: "proj-2",
      title: "DACON: Construction Accident Prevention & Response Generation",
      period: "Feb 2025 – Mar 2025",
      keywords: "#LLM, #RAG, #Ollama",
      description: `Participated in DACON Hansol Deco Season 3 Generative AI Competition.
Built a RAG-based LLM system to analyze construction accident data, identify causes, and generate response messages by retrieving similar past cases.`,
    },
    {
      id: "proj-3",
      title: "Deep Print",
      period: "Feb 2025 – Mar 2025",
      keywords: "#ComputerVision, #LLM, #RAG, #Rule-based",
      description: `Built an AI-powered psychological assessment system based on HTP (House–Tree–Person) drawings.
Detected objects and analyzed visual attributes (size, position, composition) using CV techniques.
Combined rule-based evaluation with LLM interpretation to generate automated psychological assessments.`,
    },
    {
      id: "proj-4",
      title: "Predict_fire_forest",
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
          padding: "1.5rem",
          borderRadius: "10px",
          width: "700px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Projects</h2>
        <ul style={{ paddingLeft: "1rem" }}>
          {projectList.map((p) => (
            <li key={p.id} style={{ marginBottom: "1.5rem" }}>
              <h3>
                {p.title}{" "}
                <span style={{ fontSize: "0.9rem", color: "gray" }}>
                  ({p.period})
                </span>
              </h3>
              <p><b>Keywords:</b> {p.keywords}</p>
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

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          Close
        </button>

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
                padding: "1.5rem",
                borderRadius: "10px",
                width: "600px",
                maxHeight: "70vh",
                overflowY: "auto",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedProject.title}</h3>
              <p style={{ color: "gray" }}>{selectedProject.period}</p>

              {/* 상세내용 비워둠 */}
              <div
                style={{
                  margin: "1rem 0",
                  minHeight: "200px",
                  border: "1px dashed #ccc",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                (Details will be added here later)
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "5px",
                  background: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
