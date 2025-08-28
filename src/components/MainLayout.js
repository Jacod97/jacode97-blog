import { useState } from 'react';

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  cursor: "pointer",
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
  const [active, setActive] = useState("Profile");

  const previews = {
    Profile: "간단한 자기소개 미리보기...",
    Experience: "짧은 경력 요약...",
    Project: "프로젝트 간단 소개...",
    QnA: "자주 묻는 질문 요약..."
  };

  const details = {
    Profile: (
      <div>
        <h2>Profile 상세</h2>
        <p>이곳에 자세한 자기소개, 학력, 관심 분야 등을 적을 수 있습니다.</p>
      </div>
    ),
    Experience: (
      <div>
        <h2>Experience 상세</h2>
        <ul>
          <li>도로 설계 및 프로젝트 관리 경험</li>
          <li>AI/ML 기반 스마트 모빌리티 분석</li>
          <li>연구 인턴십 및 대회 참가</li>
        </ul>
      </div>
    ),
    Project: (
      <div>
        <h2>Project 상세</h2>
        <p>FAQ Chatbot, Presentation Agent, Energy Forecast 등 상세 설명</p>
      </div>
    ),
    QnA: (
      <div>
        <h2>Q&A about myself</h2>
        <p>
          Q: 왜 Civil + AI? <br />A: 도로 및 인프라 문제를 AI로 해결하고 싶어서.
        </p>
      </div>
    )
  };

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
        {Object.keys(previews).map((key) => (
          <button
            type="button"
            key={key}
            style={cardStyle}
            onClick={() => setActive(key)}
          >
            <h2>{key}</h2>
            <p>{previews[key]}</p>
            <span style={btnStyle}>자세히 보기 →</span>
          </button>
        ))}
      </div>

      {/* 오른쪽: 상세 뷰 영역 */}
      <div style={{
        flex: "0 0 400px",
        height: "600px",
        background: "#f9f9f9",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        overflowY: "auto"
      }}>
        {details[active]}
      </div>
    </section>
  );
}
