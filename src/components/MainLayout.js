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
        <div style={cardStyle}>
          <h2>Profile</h2>
          <p>간단한 자기소개 미리보기...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>

        <div style={cardStyle}>
          <h2>Experience</h2>
          <p>짧은 경력 요약...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>

        <div style={cardStyle}>
          <h2>Project</h2>
          <p>프로젝트 간단 소개...</p>
          <button type="button" style={btnStyle}>자세히 보기 →</button>
        </div>

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
