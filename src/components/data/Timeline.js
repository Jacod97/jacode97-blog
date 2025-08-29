import React from "react";

const timelineData = [
  {
    year: "Mar 2012 – Feb 2015",
    type: "education",
    title: "Nam-il High School (Busan, South Korea)",
    description: ["Graduated from general high school"]
  },
  {
    year: "Mar 2015 – Aug 2022",
    type: "education",
    title: "Dong-A University (Busan, South Korea)",
    description: ["B.S. in Civil Engineering (Construction Systems Engineering)"]
  },
  {
    year: "Sep 2023 – Oct 2024",
    type: "professional",
    title: "Civil Engineer, Sambo Engineering & Construction (Seoul, South Korea)",
    description: [
      "Worked in the Highway & Road Division, conducting highway and road design projects.",
      "Collaborated with various companies on project management."
    ]
  },
  {
    year: "Dec 2024 – May 2025",
    type: "education",
    title: "Wanted Lab (Seoul, South Korea)",
    description: ["\"PotenUP Data AI Developer Training Program\" Completed"]
  },
  {
    year: "May 2025 – Jul 2025",
    type: "professional",
    title: "R&D Intern, WisePlus (Seoul, South Korea)",
    description: [
      "Conducted data quality management for flood risk maps using Python, QGIS, and PostgreSQL.",
      "Performed flood scenario analysis with SWMM."
    ]
  },
  {
    year: "Sep 2025 – Present",
    type: "professional",
    title: "AI Engineer, SLZ Inc. (Seoul, South Korea)",
    description: [
      "Developing projects that integrate Digital Twin and AI technologies."
    ]
  }
];

export default function Timeline({ onClose }) {
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
          width: "80%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
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
            cursor: "pointer"
          }}
        >
          ✖
        </button>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            margin: "2rem auto",
            padding: "2rem 0",
            width: "90%"
          }}
        >
          {/* Vertical Center Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "3px",
              background: "#ccc",
              transform: "translateX(-50%)"
            }}
          />

          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0; // 좌우 교차
            const color = item.type === "education" ? "#0077b6" : "#ff6b6b";
            const bgColor = item.type === "education" ? "#f9fcff" : "#fff8f8";

            return (
              <div
                key={`${item.title}-${item.year}`}
                style={{
                  position: "relative",
                  width: "50%",
                  padding: "1rem",
                  textAlign: isLeft ? "right" : "left",
                  left: isLeft ? 0 : "50%"
                }}
              >
                {/* Dot */}
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    [isLeft ? "right" : "left"]: "-10px",
                    width: "20px",
                    height: "20px",
                    background: color,
                    borderRadius: "50%",
                    border: "3px solid white",
                    boxShadow: `0 0 0 2px ${color}`
                  }}
                />
                {/* Content */}
                <div
                  style={{
                    background: bgColor,
                    padding: "1rem",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    whiteSpace: "pre-line" // 줄바꿈 적용
                  }}
                >
                  <h3 style={{ margin: "0 0 0.3rem" }}>{item.title}</h3>
                  <h4 style={{ margin: "0 0 0.5rem", color }}>{item.year}</h4>
                  <p style={{ margin: 0 }}>
                    {item.description.join("\n")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Close */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
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
              fontSize: "1rem"
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
