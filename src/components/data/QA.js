import React, { useState } from "react";

export default function QA({ onClose = () => {} }) {
  const [openId, setOpenId] = useState(null);

  const qaList = [
    {
      id: "qa-1",
      q: "Why did you transition from Civil Engineer to AI Engineer?",
      a: `I’d like to solve various problems within the industry using artificial intelligence.
Originally, I worked at a civil engineering company after I graduated from university.
And I often faced repetitive problems in the company.
I thought these problems could be solved with computers.
Computers have developed a lot, but they still haven’t been applied to every industry.
That’s why I decided to become an AI engineer.
I’d like to use it to take on a wide range of challenges.`
    },
//     {
//       id: "qa-2",
//       q: "What kind of projects have you worked on?",
//       a: `I’ve developed a SmartStore FAQ ChatBot, a multimodal Presentation Agent,
// wildfire prediction models, and building energy forecasting pipelines.`
//     },
//     {
//       id: "qa-3",
//       q: "What are your current research interests?",
//       a: `I am interested in AI-driven transportation, mobility optimization, and infrastructure analytics,
// particularly using RAG, LLMs, and time-series forecasting.`
//     }
  ];

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
          fontFamily: "Georgia, serif" // ✅ 글씨체 느낌
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Q&A about myself
        </h1>

        {/* Q&A List */}
        {qaList.map((item) => (
          <div key={item.id} style={{ marginBottom: "1rem" }}>
            <button
              type="button"
              onClick={() => toggleAnswer(item.id)}
              style={{
                width: "100%",
                textAlign: "left", // 질문 버튼도 좌측 정렬
                background: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "0.8rem",
                fontSize: "1rem",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {item.q} {openId === item.id ? "▲" : "▼"} {/* 열림/닫힘 표시 */}
            </button>
            {openId === item.id && (
              <div
                style={{
                  padding: "0.8rem 1rem",
                  borderLeft: "3px solid #007bff",
                  background: "#fafafa",
                  textAlign: "left" // ✅ 답변 좌측 정렬
                }}
              >
                <p style={{ whiteSpace: "pre-line", margin: 0 }}>{item.a}</p>
              </div>
            )}
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
