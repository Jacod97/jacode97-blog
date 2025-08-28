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
      { name: "Python", icon: "🐍" },
      { name: "PyTorch", icon: "🔥" },
      { name: "scikit-learn", icon: "📊" },
      { name: "FastAPI", icon: "⚡" },
      { name: "OpenCV", icon: "👁️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "PostGIS", icon: "🗺️" },
      { name: "SQLite", icon: "💾" },
      { name: "Git", icon: "🌱" },
      { name: "QGIS", icon: "🛰️" },
      { name: "ArcGIS", icon: "🗺️" },
      { name: "Linux", icon: "🐧" }
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
        {/* 1. Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Profile
        </h1>

        {/* 2. Contact */}
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

        {/* 3. Abilities */}
        <h3 style={{ marginTop: "1.5rem" }}>Abilities</h3>
        <ul>
          {profile.abilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* 4. Skills */}
        <h3 style={{ marginTop: "1.5rem" }}>Skills</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginTop: "0.5rem"
          }}
        >
          {profile.skills.map((skill) => (
            <span
              key={skill.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.8rem",
                border: "1px solid #ddd",
                borderRadius: "20px",
                background: "#f9f9f9",
                fontSize: "0.95rem"
              }}
            >
              <span>{skill.icon}</span> {skill.name}
            </span>
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
