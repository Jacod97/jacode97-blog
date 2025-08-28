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
    linkedin: "https://linkedin.com/in/jacod97",
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
      { name: "scikit-learn", icon: sklearnIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "LangChain", icon: langchainIcon },
      { name: "OpenCV", icon: opencvIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "SQLite", icon: sqliteIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "React", icon: reactIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
    ]
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
          padding: "2rem",
          borderRadius: "10px",
          width: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
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
        <h3 style={{ marginTop: "1.5rem" }}>Abilities</h3>
        <ul>
          {profile.abilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Skills */}
        <h3 style={{ marginTop: "1.5rem" }}>Skills</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
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
                  width: "70px",
                  height: "70px",
                  borderRadius: "8px", // ⬅️ 사각형 (모서리 살짝 둥글림)
                  border: "1px solid #ddd",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                />
              </div>
              <span style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
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
            marginTop: "2rem",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "5px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
