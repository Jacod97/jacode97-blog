import React, { useState } from "react";

export default function QA({ onClose = () => {} }) {
  const [openId, setOpenId] = useState(null);

  const qaList = [
    {
      id: "qa-1",
      q: "Why did you transition from Civil Engineer to AI Engineer?",
      a: `I began my career as a civil engineer, but I transitioned into AI engineering after recognizing the potential of solving field problems with data and artificial intelligence.
I believe that in the future, there will be no distinct role called “AI Engineer”; instead, domain-specialized engineers will naturally use AI and data technologies as tools to solve problems.
To prepare for that future ahead of others, I built up my knowledge of AI, and I am now applying it to address various challenges within the industry.`
    },
    {
      id: "qa-2",
      q: "What research or field would you like to focus on?",
      a: `I am interested in the field of smart cities. In the past, to prevent crime in urban areas, police had to patrol the city in person. But now, thanks to widespread CCTV coverage, people can feel much safer. Even when crimes do occur, it’s much easier to avoid injustice—a significant change from before.
  Just like this, I hope to advance technology further so that daily life in the city can be both safer and more convenient. My goal is to apply AI to transform ordinary cities into smart cities, creating changes that people can truly feel in their everyday lives.`
    },
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
