import { useEffect } from "react";
import pythonIcon from "../../assets/python.png";
import pytorchIcon from "../../assets/pytorch.png";
import sklearnIcon from "../../assets/scikit-learn.png";
import fastapiIcon from "../../assets/fastapi.png";
import langchainIcon from "../../assets/langchain.png";
import opencvIcon from "../../assets/opencv.png";
import linuxIcon from "../../assets/linux.png";
import sqliteIcon from "../../assets/sqlite.png";
import githubIcon from "../../assets/github.png";
import reactIcon from "../../assets/react.png";
import postgresqlIcon from "../../assets/postgressql.png";

export default function Profile({ onClose = () => {} }) {
  const profile = {
    email: "jacode6894@gmail.com",
    linkedin: "https://www.linkedin.com/in/jacode6894/",
    github: "https://github.com/Jacod97",
    abilities: [
      "Comprehensive understanding of spatial data, big data, and AI technologies",
      "Data EDA using Pandas, GeoPandas, and NumPy",
      "Deep learning modeling with scikit-learn and PyTorch",
      "Experience in model serving using FastAPI",
      "Spatial database management with PostgreSQL (PostGIS)",
      "Effective communication and collaboration skills with various stakeholders"
    ],
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "PyTorch", icon: pytorchIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "scikit-learn", icon: sklearnIcon },
      { name: "LangChain", icon: langchainIcon },
      { name: "OpenCV", icon: opencvIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "SQLite", icon: sqliteIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "React", icon: reactIcon },
    ]
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
          padding: "1.5rem",     // 전체 padding 살짝 줄임
          borderRadius: "10px",
          width: "70%",
          maxWidth: "900px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Profile
        </h1>

        {/* Contact */}
        <h3>Email</h3>
        <p>{profile.email}</p>

        <h3>LinkedIn</h3>
        <p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin}
          </a>
        </p>

        <h3>GitHub</h3>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </p>

        {/* Abilities */}
        <h3 style={{ marginTop: "1rem" }}>Abilities</h3>
        <ul style={{ textAlign: "left", paddingLeft: "1.2rem" }}>
          {profile.abilities.map((item) => (
            <li key={item} style={{ marginBottom: "0.4rem" }}>{item}</li>
          ))}
        </ul>

        {/* Skills */}
        <h3 style={{ marginTop: "1rem" }}>Skills</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 한 줄에 4개
            gap: "0.4rem",                         // 간격 좁힘
            marginTop: "0.8rem",
          }}
        >
          {profile.skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%", // 원형
                  border: "1px solid #ddd",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ width: "75%", height: "75%", objectFit: "contain" }}
                />
              </div>
              <span style={{ marginTop: "0.3rem", fontSize: "0.85rem" }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            margin: "1.5rem auto 0",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            fontSize: "0.95rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "120px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
