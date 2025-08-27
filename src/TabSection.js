import { useState } from 'react';

export default function TabSection() {
  const tabs = ["About Me", "Experience", "Interview", "Projects"];
  const content = {
    "About Me": "안녕하세요, 저는 Civil + AI 연구자입니다...",
    "Experience": "도로 설계, 데이터 분석, AI 프로젝트 경험 보유...",
    "Interview": "면접 준비 자료 및 경험 공유...",
    "Projects": "FAQ Chatbot, Presentation Agent 등 포트폴리오..."
  };

  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      {/* 탭 버튼 */}
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              flex: 1,
              padding: "0.8rem",
              border: "none",
              background: active === tab ? "#007bff" : "#eee",
              color: active === tab ? "white" : "black",
              borderRadius: "5px",
              margin: "0 0.3rem",
              cursor: "pointer"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        minHeight: "200px"
      }}>
        {content[active]}
      </div>
    </div>
  );
}
