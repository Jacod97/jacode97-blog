import { useState } from "react";
import ChatBox from "./ChatBox";
import Profile from "./data/Profile"; // 확장자 빼기 (파일명은 Profile.jsx 권장)

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "left",
  cursor: "pointer"
};

export default function MainLayout() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <button type="button" style={{ ...cardStyle, border: "none" }} onClick={() => setActiveModal("profile")}>
          <h2>Profile</h2>
          <p>간단한 자기소개 미리보기...</p>
        </button>

        <button type="button" style={{ ...cardStyle, border: "none" }} onClick={() => setActiveModal("experience")}>
          <h2>Experience</h2>
          <p>짧은 경력 요약...</p>
        </button>

        <button type="button" style={{ ...cardStyle, border: "none" }} onClick={() => setActiveModal("project")}>
          <h2>Project</h2>
          <p>프로젝트 간단 소개...</p>
        </button>

        <button type="button" style={{ ...cardStyle, border: "none" }} onClick={() => setActiveModal("qa")}>
          <h2>Q&A about myself</h2>
          <p>자주 묻는 질문 요약...</p>
        </button>
      </div>

      <div style={{ flex: "0 0 400px", height: "600px", background: "#f9f9f9", borderRadius: "10px", padding: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>ChatBot</h2>
        <ChatBox />
      </div>

      {activeModal === "profile" && <Profile onClose={() => setActiveModal(null)} />}
    </section>
  );
}
