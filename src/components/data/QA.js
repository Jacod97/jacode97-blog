import React, { useState, useEffect } from "react";

export default function QA({ onClose = () => {} }) {
  const [openId, setOpenId] = useState(null);

  const qaList = [
    {
      id: "qa-1",
      q: "Why did you transition from Civil Engineer to AI Engineer?",
      a: `I began my career as a civil engineer, but I transitioned into AI engineering after recognizing the potential of solving field problems with data and artificial intelligence.
I believe that in the future, there will be no distinct role called “AI Engineer”; 
instead, domain-specialized engineers will naturally use AI and data technologies as tools to solve problems.
To prepare for that future ahead of others, I built up my knowledge of AI, and I am now applying it to address various challenges within the industry.`
    },
    {
      id: "qa-2",
      q: "What research or field would you like to focus on?",
      a: `I am interested in the field of smart cities. In the past, to prevent crime in urban areas, police had to patrol the city in person. But now, thanks to widespread CCTV coverage, people can feel much safer. Even when crimes do occur, it’s much easier to avoid injustice—a significant change from before.
Just like this, I hope to advance technology further so that daily life in the city can be both safer and more convenient. My goal is to apply AI to transform ordinary cities into smart cities, creating changes that people can truly feel in their everyday lives.`
    },
    {
      id: "qa-3",
      q: "What do you like to do in your free time, and why?",
      a: `I enjoy playing soccer. To me, soccer is more than just a sport—it’s a game where countless strategies are created for one ultimate goal: victory. What fascinates me is that success doesn’t rely on an individual’s skill alone, but on the collaboration of the entire team. During a match, unexpected problems constantly arise, and each moment requires quick strategic judgment and the ability to apply one’s skills to overcome them. 
The sense of accomplishment when achieving that goal together with teammates is why I love the sport so much. This experience strongly influences my perspective as an engineer as well. Just like soccer, engineering projects demand not only individual expertise but also teamwork and problem-solving, and I believe true success comes from achieving goals through collaboration.`
    }
  ];

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
          padding: "2rem",
          borderRadius: "12px",
          width: "70%",
          maxWidth: "900px",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          fontFamily: "Georgia, serif",
          fontSize: "1.15rem", // ✅ 전체 글씨 키움
          lineHeight: "1.8"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Q&A about myself
        </h1>

        {/* Q&A List */}
        {qaList.map((item) => (
          <div key={item.id} style={{ marginBottom: "1.2rem" }}>
            <button
              type="button"
              onClick={() => toggleAnswer(item.id)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "1rem",
                fontSize: "1.15rem", // ✅ 버튼 글씨 확대
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {item.q} {openId === item.id ? "▲" : "▼"}
            </button>
            {openId === item.id && (
              <div
                style={{
                  padding: "1rem 1.2rem",
                  borderLeft: "4px solid #007bff",
                  background: "#fafafa",
                  textAlign: "left",
                  fontSize: "1.1rem" // ✅ 답변 글씨 확대
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
            margin: "2rem auto 0",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            fontSize: "1.05rem", // ✅ 버튼 글씨 확대
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "140px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
