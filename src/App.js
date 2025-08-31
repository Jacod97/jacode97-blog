import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 해 🌞 */}
      <div className="sun" />

      {/* 구름 ☁️ */}
      <div className="cloud small" />
      <div className="cloud medium" />
      <div className="cloud large" />

      {/* 왼쪽: Hero + MainLayout */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Hero />
        <MainLayout />
      </div>

      {/* 오른쪽: ChatBox 패널 */}
      <div className="chat-panel">
        <h2>ChatBot</h2>
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
