import { useState, useEffect } from "react";
import PresentationAgent from "./view_details/PresentationAgent";
import ConstructionRAG from "./view_details/ConstructionRAG";
import DeepPrint from "./view_details/DeepPrint";
import PredictFire from "./view_details/Predict_fire";

export default function Projects({ onClose = () => {} }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedProject]);

  const projectList = [
    {
      id: "proj-1",
      title:
        "Automated Presentation Generation System Using a Multimodal VLM-LLM-TTS Pipeline",
      period: "Mar 2025 – Apr 2025",
      category: "Side Project",
      keywords: "#LangChain, #RAG, #Multimodal, #TTS",
      description: `Developed an automated presentation system for individuals with presentation anxiety.
Extracted text and images from presentation slides (PDF) and generated page-wise presentation scripts.
Implemented TTS integration for fully automated presentation deliver.`,
    },
    {
      id: "proj-2",
      title: "Creating Construction Accident Prevention and Response Measures Using RAG",
      period: "Feb 2025 – Mar 2025",
      category: "Competition",
      keywords: "#LLM, #RAG, #Ollama",
      description: `Participated in DACON Hansol Deco Season 3 Generative AI Competition.
Built a RAG-based LLM system to analyze construction accident data, identify causes, and generate response messages by retrieving similar past cases.`,
    },
    {
      id: "proj-3",
      title:
        "Children's Drawings Using Object Detection and Natural Language Processing Models Psychological Analysis Assistance System",
      period: "Feb 2025 – Mar 2025",
      category: "Side Project",
      keywords: "#ComputerVision, #LLM, #RAG, #Rule-based",
      description: `Built an AI-powered psychological assessment system based on HTP (House–Tree–Person) drawings.
Detected objects and analyzed visual attributes (size, position, composition) using CV techniques.
Combined rule-based evaluation with LLM interpretation to generate automated psychological assessments.`,
    },
    {
      id: "proj-4",
      title: "Development of a Wildfire Prediction Model Using Machine Learning",
      period: "Jan 2025 – Feb 2025",
      category: "Side Project",
      keywords: "#SpatialData, #DataMining, #MachineLearning",
      description: `Predicted wildfire occurrence using ensemble learning techniques.
Integrated meteorological data, population density, and agricultural land usage data to improve prediction accuracy.`,
    },
  ];

  // 선택된 프로젝트 있으면 바로 상세 컴포넌트 보여주기
  if (selectedProject) {
    if (selectedProject.id === "proj-1")
      return <PresentationAgent onClose={() => setSelectedProject(null)} />;
    if (selectedProject.id === "proj-2")
      return <ConstructionRAG onClose={() => setSelectedProject(null)} />;
    if (selectedProject.id === "proj-3")
      return <DeepPrint onClose={() => setSelectedProject(null)} />;
    if (selectedProject.id === "proj-4")
      return <PredictFire onClose={() => setSelectedProject(null)} />;
  }

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
          width: "70%",
          maxWidth: "1000px",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px"
          }}
        >
          ✖
        </button>

        <h2 style={{ marginBottom: "1rem" }}>Projects</h2>

        {/* 리스트 출력 (논문 검색결과 스타일) */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projectList.map((p) => (
            <li
              key={p.id}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "1rem 0",
              }}
            >
              {/* 구분 + 기간 */}
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "gray",
                  marginBottom: "0.3rem",
                }}
              >
                [{p.category}] {p.period}
              </div>

              {/* 제목 */}
              <h3
                style={{
                  margin: "0 0 0.3rem",
                  fontSize: "1.1rem",
                  color: "#004080",
                }}
              >
                {p.title}
              </h3>

              {/* 키워드 태그 */}
              <div style={{ marginBottom: "0.5rem" }}>
                {p.keywords.split(",").map((kw) => (
                  <span
                    key={kw}
                    style={{
                      background: "#f0f7ff",
                      color: "#007bff",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                      marginRight: "0.4rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    {kw.trim()}
                  </span>
                ))}
              </div>

              {/* 설명 */}
              <p
                style={{
                  margin: "0.5rem 0",
                  whiteSpace: "pre-line",
                  fontSize: "0.9rem",
                }}
              >
                {p.description}
              </p>

              {/* 버튼 */}
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(p)}
                  style={{
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
              </div>
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
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "140px"
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
