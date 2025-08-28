import React from "react";
import presentation1 from "../../../assets/presentation1.png";
import presentation2 from "../../../assets/presentation2.png";
import presentation3 from "../../../assets/presentation3.png";

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
          width: "70%",
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

        <h2>
          Automated Presentation Generation System Using a Multimodal
          VLM-LLM-TTS Pipeline
        </h2>
        <p>
          <b>Period:</b> Mar 2025 – Apr 2025
        </p>
        <p>
          <b>Keywords:</b> #LangChain, #RAG, #Multimodal, #TTS
        </p>

        <h3>01. Introduction</h3>
        <p>
          In modern society, situations such as interviews, lectures, and
          presentations require not only expertise but also the ability to
          effectively communicate ideas and results. However, presenters must
          prepare everything themselves—from structuring materials to writing
          scripts and delivering them—which demands significant time and effort
          and can lead to psychological burden and fatigue.
        </p>

        <h3>02. Implementation</h3>
        <ol>
          <li>
            <b>Automated Script Generation Pipeline</b>
            <p>
              PDF files uploaded via FastAPI were processed with PyMuPDF to
              extract text and images. A Vision-Language Model (VLM) was applied
              to classify whether each image was a key visual (charts, graphs,
              tables) or merely decorative. Only essential visuals were
              converted into natural language descriptions and combined with
              extracted text as LLM input.
            </p>
            <img
              src={presentation1}
              alt="Interpretation Logic"
              style={{ width: "100%", margin: "1rem 0" }}
            />
            <img
              src={presentation2}
              alt="Presentation Script UI"
              style={{ width: "100%", margin: "1rem 0" }}
            />
          </li>

          <li>
            <b>TTS-based Voice Generation</b>
            <p>
              Key terms were automatically extracted from the generated script
              via vector similarity analysis. SSML (Speech Synthesis Markup
              Language) tags were then applied to adjust pitch, speed, and
              emphasis, making the delivery more engaging and helping the
              audience easily identify core points.
            </p>
            <img
              src={presentation3}
              alt="System Architecture"
              style={{ width: "100%", margin: "1rem 0" }}
            />
          </li>

          <li>
            <b>System Architecture</b>
            <p>
              The upper part illustrates the pipeline: PDF text/image extraction
              → LLM-based script generation → TTS voice output, combined into a
              final presentation. The lower part shows the VectorDB-powered
              Q&amp;A chatbot, enabling real-time responses to audience
              questions.
            </p>
          </li>
        </ol>

        <h3>03. Conclusion</h3>
        <p>
          This project successfully automated the entire presentation process:
          script writing, speech synthesis, and final material generation. VLM
          enabled accurate visual importance assessment, prompt engineering
          improved coherence, and SSML-based TTS increased delivery impact. The
          integrated Q&amp;A chatbot allowed presenters to handle audience
          questions seamlessly.
        </p>
        <p>
          However, limitations such as LLM token constraints and reliance on
          external APIs remain. Future work will focus on adopting local models
          for stability, fine-tuning LLM/TTS for domain-specific needs, and
          expanding toward interactive systems that capture real-time audience
          feedback.
        </p>

        <p>
          <b>DEMO Video:</b>{" "}
          <a
            href="https://www.youtube.com/watch?v=sj9HZPMtha8"
            target="_blank"
            rel="noreferrer"
          >
            Youtube Link
          </a>
        </p>
      </div>
    </div>
  );
}
