import React from "react";

const timelineData = {
  education: [
    {
      year: "Mar 2012 – Feb 2015",
      title: "Nam-il High School (Busan, South Korea)",
      description: "Graduated from general high school"
    },
    {
      year: "Mar 2015 – Aug 2022",
      title: "Dong-A University (Busan, South Korea)",
      description: "B.S. in Civil Engineering (Construction Systems Engineering)"
    },
    {
      year: "Dec 2024 – Jun 2025",
      title: "Wanted Lab (Seoul, South Korea)",
      description: `"PotenUP Data AI Developer Training Program" Completed`
    }
  ],
  professional: [
    {
      year: "Sep 2023 – Oct 2024",
      title: "Civil Engineer, Sambo Engineering & Construction (Seoul, South Korea)",
      description:
        "Worked in the Highway & Road Division, leading highway and road design projects. Collaborated with multiple companies and contributed to project management tasks."
    },
    {
      year: "May 2025 – Jul 2025",
      title: "R&D Intern, WisePlus (South Korea)",
      description:
        "Conducted data quality management for flood risk maps using Python, QGIS, and PostgreSQL. Performed flood scenario analysis with SWMM."
    },
    {
      year: "Sep 2025 – Present",
      title: "AI Engineer, SLZ Inc. (South Korea)",
      description:
        "Developing projects that integrate Digital Twin and AI technologies across diverse applications."
    }
  ]
};

export default function Timeline({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "70%",
        maxHeight: "80%",
        overflowY: "auto",
        background: "#fefefe",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          float: "right",
          border: "none",
          background: "transparent",
          fontSize: "1.2rem",
          cursor: "pointer"
        }}
      >
        ✖
      </button>

      {/* Education Timeline */}
      <h2 style={{ marginBottom: "1.5rem" }}>🎓 Education</h2>
      <div
        style={{
          position: "relative",
          marginLeft: "1rem",
          paddingLeft: "2rem",
          borderLeft: "3px solid #0077b6"
        }}
      >
        {timelineData.education.map((item) => (
          <div key={`${item.title}-${item.year}`} style={{ marginBottom: "2rem", position: "relative" }}>
            {/* Dot */}
            <span
              style={{
                position: "absolute",
                left: "-13px",
                top: "6px",
                width: "16px",
                height: "16px",
                background: "#0077b6",
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 0 0 2px #0077b6"
              }}
            />
            {/* Content Card */}
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ margin: "0 0 0.3rem" }}>{item.year}</h3>
              <h4 style={{ margin: "0 0 0.5rem", color: "#0077b6" }}>{item.title}</h4>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Experience Timeline */}
      <h2 style={{ margin: "2rem 0 1.5rem" }}>💼 Professional Experience</h2>
      <div
        style={{
          position: "relative",
          marginLeft: "1rem",
          paddingLeft: "2rem",
          borderLeft: "3px solid #ff6b6b"
        }}
      >
        {timelineData.professional.map((item) => (
          <div key={`${item.title}-${item.year}`} style={{ marginBottom: "2rem", position: "relative" }}>
            {/* Dot */}
            <span
              style={{
                position: "absolute",
                left: "-13px",
                top: "6px",
                width: "16px",
                height: "16px",
                background: "#ff6b6b",
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 0 0 2px #ff6b6b"
              }}
            />
            {/* Content Card */}
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ margin: "0 0 0.3rem" }}>{item.year}</h3>
              <h4 style={{ margin: "0 0 0.5rem", color: "#ff6b6b" }}>{item.title}</h4>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
