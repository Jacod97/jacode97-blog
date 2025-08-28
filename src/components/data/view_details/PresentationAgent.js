import React from "react";

export default function PresentationAgent({ onClose }) {
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
          width: "60%",       // A4 style
          maxHeight: "90vh",
          overflowY: "auto",
          textAlign: "left",
          position: "relative",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
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

        <h2>Automated Presentation Generation System Using a Multimodal VLM-LLM-TTS Pipeline</h2>
        <p style={{ color: "gray" }}>Mar 2025 – Apr 2025</p>

        <h3>1. Introduction</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          In modern society, communication skills in interviews, lectures, and presentations 
          are as important as professional expertise. However, preparing presentation materials, 
          scripts, and delivery methods requires significant time and effort, often causing stress 
          and fatigue. This project aims to reduce such burdens by providing an environment in which 
          presenters can focus solely on content and message.
          
          The system automatically analyzes text and images from presentation slides, identifies 
          key visuals using a Vision-Language Model (VLM), and converts essential images into 
          explanatory text. A Large Language Model (LLM) then generates context-aware scripts 
          combining both textual and visual information. Finally, Text-to-Speech (TTS) technology 
          transforms the scripts into natural and comprehensible speech, providing a complete 
          automated presentation solution. A real-time Q&A chatbot based on VectorDB further allows 
          the presenter to respond instantly to audience questions.
        </p>

        <h3>2. Implementation Process</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          • Built an automated pipeline to extract text and images from PDFs using PyMuPDF.{"\n"}
          • Applied a VLM to classify whether images were essential charts/graphs or decorative elements.{"\n"}
          • Improved accuracy by applying composite rules (e.g., chart type, page ratio) to avoid including 
          unnecessary decorative images.{"\n"}
          • Designed a prompt structure dividing inputs into page summary, current text, and image explanation 
          to reduce redundancy and improve coherence.{"\n"}
          • Implemented a TTS module enhanced with SSML tags to emphasize keywords with pitch, speed, 
          and intonation variations.{"\n"}
          • Developed a VectorDB-based chatbot for real-time audience Q&A during presentations.
        </p>

        <h3>3. System Architecture</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          The system integrates VLM-based visual analysis, LLM-driven script generation, and TTS-based 
          speech synthesis in one pipeline. The top layer manages slide parsing, script writing, and 
          voice generation, while the bottom layer stores all slides in VectorDB to support Q&A interactions.
        </p>

        <h3>4. Conclusion</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          This project successfully automated the entire presentation workflow from script generation 
          to speech output. VLM improved visual content analysis, LLM enhanced logical flow, and TTS 
          increased engagement by emphasizing keywords. 
          
          The system shortens preparation time and enables real-time interaction with the audience. 
          However, limitations remain in handling large slide decks due to token limits and dependency 
          on external APIs (GPT, Google Cloud). Future work will focus on local model deployment, 
          fine-tuned LLM/TTS integration, and real-time feedback analysis to further improve the 
          presentation experience.
        </p>

        <p>
          <b>Demo:</b>{" "}
          <a
            href="https://www.youtube.com/watch?v=sj9HZPMtha8"
            target="_blank"
            rel="noreferrer"
          >
            Youtube Link
          </a>
        </p>

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
      </div>
    </div>
  );
}
