import { useState, useEffect } from "react";
import { AppHeader, ThemeToggle } from "./components/Header";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import ChatBox from "./components/ChatBox";
import Stars from "./components/Stars";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      {/* Fixed Header */}
      <AppHeader />

      {/* Theme Toggle */}
      <ThemeToggle
        theme={theme}
        onToggle={() =>
          setTheme((t) => (t === "light" ? "dark" : "light"))
        }
      />

      {/* Background Effects */}
      {theme === "light" && (
        <>
          <div className="cloud-emoji cloud-1">☁️</div>
          <div className="cloud-emoji cloud-2">☁️</div>
          <div className="cloud-emoji cloud-3">☁️</div>
          <div className="cloud-emoji cloud-4">⛅</div>
          <div className="cloud-emoji cloud-5">☁️</div>
        </>
      )}
      {theme === "dark" && <Stars theme={theme} />}

      {/* Main Content Area */}
      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        {/* 왼쪽: Hero + MainLayout */}
        <div
          className="scrollbar-none main-panel"
          style={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Hero theme={theme} />
          <MainLayout />
        </div>

        {/* 오른쪽: ChatBox 패널 */}
        <div className="chat-panel scrollbar-none">
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              const chatPanel = document.querySelector(".chat-panel");
              if (chatPanel) {
                chatPanel.classList.remove("show");
              }
            }}
            style={{ display: "none" }}
          >
            ×
          </button>
          <h2>ChatBot</h2>
          <ChatBox theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
