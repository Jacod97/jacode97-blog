import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="App" style={{
      display: "flex",       // 좌우 배치
      height: "100vh"        // 화면 전체 높이 차지
    }}>
      {/* 왼쪽: Hero + MainLayout 묶음 */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Hero />
        <MainLayout />
      </div>

      {/* 오른쪽: ChatBox만 고정 */}
      <div style={{
        flex: "0 0 400px",
        background: "#f9f9f9",
        borderLeft: "1px solid #ddd",
        padding: "1rem",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2 style={{ textAlign: "center" }}>ChatBot</h2>
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
