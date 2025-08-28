export default function Profile({ onClose }) {
  const profile = {
    email: "jacode6894@gmail.com",
    phone: "010-5636-6894",
    github: "https://github.com/Jacod97",
    skills: {
      language: "Python",
      library: "Pytorch, scikit-learn, LangChain, FastAPI, OpenCV",
      environment: "Linux",
      database: "PostgreSQL, PostGIS, SQLite",
      tool: "Git, QGIS, ArcGIS"
    },
    abilities: [
      "Comprehensive understanding of spatial data, big data, and AI technologies",
      "Data EDA using Pandas, GeoPandas, and NumPy",
      "Deep learning modeling with scikit-learn and PyTorch",
      "Experience in model serving using FastAPI",
      "Spatial database management with PostgreSQL (PostGIS)",
      "Effective communication and collaboration skills with various stakeholders through design project experience"
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
      role="presentation"   // 배경은 단순 프레젠테이션 용도
      onClick={onClose}     // 배경 클릭 시 닫기
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "10px",
          width: "500px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
        }}
        onClick={(e) => e.stopPropagation()} // 내부 클릭은 전파 막기
      >
        <h2>Profile</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>GitHub:</strong>{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </p>

        <h3>Skills</h3>
        <ul>
          <li><strong>Language:</strong> {profile.skills.language}</li>
          <li><strong>Library / Framework:</strong> {profile.skills.library}</li>
          <li><strong>Environment:</strong> {profile.skills.environment}</li>
          <li><strong>Database:</strong> {profile.skills.database}</li>
          <li><strong>Tool:</strong> {profile.skills.tool}</li>
        </ul>

        <h3>Abilities</h3>
        <ul>
          {profile.abilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            background: "#007bff",
            color: "white",
            cursor: "pointer"
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
