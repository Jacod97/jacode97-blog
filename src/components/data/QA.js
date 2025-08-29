import React from "react";

export default function QA({ onClose = () => {} }) {
  const qaList = [
    {
      id: "qa-1",
      q: "What is your background?",
      a: "I majored in Civil Engineering and worked in road design and project management before transitioning into AI/ML research."
    },
    {
      id: "qa-2",
      q: "Why did you move into AI/ML?",
      a: "I realized that repetitive engineering problems could be solved using data-driven AI solutions, which motivated me to pursue this field."
    },
    {
      id: "qa-3",
      q: "What kind of projects have you worked on?",
      a: "I’ve developed a SmartStore FAQ ChatBot, a multimodal Presentation Agent, wildfire prediction models, and building energy forecasting pipelines."
    },
    {
      id: "qa-4",
      q: "What are your current research interests?",
      a: "I am interested in AI-driven transportation, mobility optimization, and infrastructure analytics, particularly using RAG, LLMs, and time-series forecasting."
    }
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
        zIndex: 1000
      }}
      role="button"
      tabIndex={0}
      onClick={onClose}
      onKeyDown={(e) => e.key === "Enter" && onClose()}
    >
      <div
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "10px",
          width: "650px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Q&A about myself
        </h1>

        {/* Q&A List */}
        {qaList.map((item) => (
          <div key={item.id} style={{ marginBottom: "1.5rem" }}>
            <p><b>Q:</b> {item.q}</p>
            <p><b>A:</b> {item.a}</p>
            <hr />
          </div>
        ))}

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
            fontSize: "0.95rem"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
