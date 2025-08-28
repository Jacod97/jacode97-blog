import { useState } from 'react';
import ChatBox from './ChatBox';

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "left"
};

const btnStyle = {
  marginTop: "0.5rem",
  padding: "0.4rem 0.8rem",
  border: "none",
  borderRadius: "5px",
  background: "#007bff",
  color: "white",
  cursor: "pointer"
};

export default function MainLayout() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "2rem",
      gap: "2rem"
    }}>
      {/* 왼쪽: Preview 카드 리스트 */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem"
      }}>
        {/* Profile Card */}
        <div style={cardStyle}>
          <h2>Profile</h2>
          {!showProfile ? (
            <>
              <p>간단한 자기소개 미리보기...</p>
              <button
                type="button"
                style={btnStyle}
                onClick={() => setShowProfile(true)}
              >
                자세히 보기 →
              </button>
            </>
          ) : (
            <>
              <p><strong>Email:</strong> jacode6894@gmail.com</p>
              <p><strong>Phone:</strong> 010-5636-6894</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/Jacod97" target="_blank" rel="noreferrer">github.com/Jacod97</a></p>

              <h3>Skills</h3>
              <ul>
                <li><strong>Language:</strong> Python</li>
                <li><strong>Library / Framework:</strong> Pytorch, scikit-learn, LangChain, FastAPI, OpenCV</li>
                <li><strong>Environment:</strong> Linux</li>
                <li><strong>Database:</strong> PostgreSQL, PostGIS, SQLite</li>
                <li><strong>Tool:</strong> Git, QGIS, ArcGIS</li>
              </ul>

              <h3>Abilities</h3>
              <ul>
                <li>Comprehensive understanding of spatial data, big data, and AI technologies</li>
                <li>Data EDA using Pandas, GeoPandas, and NumPy</li>
                <li>Deep learning modeling with scikit-learn and PyTorch</li>
                <li>Experience in model serving using FastAPI</li>
                <li>Spatial database management with PostgreSQL (PostGIS)</li>
                <li>Effective communication and collaboration skills with various stakeholders through design project experience</li>
              </ul>

              <button
                type="button"
                style={{ ...btnStyle, background: "#6c757d" }}
                onClick={() => setShowProfile(false)}
              >
                닫기 ↑
              </button>
            </>
          )}
        </div>

        {/* Experience */}
        <div style={cardStyle}>
          <h2>Experience</h2>
          <p>짧은 경력 요약...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>

        {/* Project */}
        <div style={cardStyle}>
          <h2>Project</h2>
          <p>프로젝트 간단 소개...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>

        {/* Q&A */}
        <div style={cardStyle}>
          <h2>Q&A about myself</h2>
          <p>자주 묻는 질문 요약...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>
      </div>

      {/* 오른쪽: ChatBot 박스 */}
      <div style={{
        flex: "0 0 400px",
        height: "600px",
        background: "#f9f9f9",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>ChatBot</h2>
        <ChatBox />
      </div>
    </section>
  );
}
