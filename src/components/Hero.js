import { useState } from "react";
import profileImg from "../assets/profile.jpg";   

export default function Hero({ theme }) {
  const [showMore, setShowMore] = useState(false);

  const isDark = theme === 'dark';

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Profile Section - Modern Glassmorphism */}
      <section 
        style={{ 
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          paddingTop: "4rem"
        }}
      >
        <div 
          style={{
            background: isDark ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            padding: "2rem",
            maxWidth: "900px",
            width: "100%",
            boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "0 8px 32px rgba(0, 0, 0, 0.1)",
            border: isDark ? "1px solid rgba(148, 163, 184, 0.1)" : "1px solid rgba(226, 232, 240, 0.5)"
          }}
        >
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", flexWrap: "wrap" }}>
            {/* Photo */}
            <img
              src={profileImg}
              alt="Jaesik Jeong"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.3)" : "0 4px 16px rgba(0, 0, 0, 0.1)",
                flexShrink: 0
              }}
            />
            
            {/* Content */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: isDark ? "#f8fafc" : "#1e293b",
                margin: "0 0 0.5rem 0",
                letterSpacing: "-0.025em"
              }}>
                Jaesik Jeong
              </h1>
              
              <p style={{
                fontSize: "1.25rem",
                color: isDark ? "#94a3b8" : "#64748b",
                margin: "0 0 1.5rem 0",
                fontWeight: "500"
              }}>
                AI Engineer in Seoul
              </p>
              
              <h2 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: isDark ? "#e2e8f0" : "#374151",
                margin: "0 0 1rem 0"
              }}>
                Let me introduce myself
              </h2>
              
              <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: isDark ? "#d1d5db" : "#4b5563",
                margin: "0 0 1rem 0"
              }}>
                Hello, I&apos;m Jaesik Jeong, an AI engineer living in Seoul. This website introduces me to people from various countries. I also use the Diary section below to improve my English skills by writing in English.
              </p>
              
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                style={{
                  color: isDark ? "#60a5fa" : "#3b82f6",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: 0,
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottomColor = isDark ? "#60a5fa" : "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottomColor = "transparent";
                }}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = isDark ? "#60a5fa" : "#3b82f6";
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = "transparent";
                }}
              >
                more
              </button>
              
              {showMore && (
                <div style={{ 
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: isDark ? "#d1d5db" : "#4b5563",
                  paddingTop: "1rem",
                  borderTop: isDark ? "1px solid rgba(148, 163, 184, 0.2)" : "1px solid rgba(226, 232, 240, 0.5)"
                }}>
                  <p style={{ margin: "0 0 0.75rem 0" }}>
                    <strong>Profile</strong> allows you to check out my personal information.
                  </p>
                  <p style={{ margin: "0 0 0.75rem 0" }}>
                    <strong>Interview</strong> consists of a Q&A session that gives you a glimpse into my thoughts and values.
                  </p>
                  <p style={{ margin: "0 0 0.75rem 0" }}>
                    <strong>Timeline</strong> allows you to see my life&apos;s journey at a glance.
                  </p>
                  <p style={{ margin: "0 0 1rem 0" }}>
                    <strong>Projects</strong> shows traces of the various side projects I&apos;ve undertaken.
                  </p>
                  <p style={{ margin: 0, fontSize: "0.95rem" }}>
                    If you have any questions about me, please ask the chatbot on the right or check out Interview. 
                    Please note that the chatbot can only accept five questions to conserve my tokens.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile ChatBot Button */}
      <div 
        style={{ 
          display: 'block',
          padding: '1rem 2rem',
          textAlign: 'center'
        }}
        className="mobile-chat-prompt"
      >
        <button
          type="button"
          onClick={() => {
            const chatPanel = document.querySelector('.chat-panel');
            if (chatPanel) {
              chatPanel.classList.add('show');
            }
          }}
          style={{
            background: isDark ? "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)" : "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: "1rem 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: isDark ? "0 4px 16px rgba(96, 165, 250, 0.3)" : "0 4px 16px rgba(135, 206, 235, 0.3)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px) scale(1.05)";
            e.target.style.boxShadow = isDark ? "0 6px 20px rgba(96, 165, 250, 0.4)" : "0 6px 20px rgba(135, 206, 235, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = isDark ? "0 4px 16px rgba(96, 165, 250, 0.3)" : "0 4px 16px rgba(135, 206, 235, 0.3)";
          }}
          onFocus={(e) => {
            e.target.style.transform = "translateY(-2px) scale(1.05)";
            e.target.style.boxShadow = isDark ? "0 6px 20px rgba(96, 165, 250, 0.4)" : "0 6px 20px rgba(135, 206, 235, 0.4)";
          }}
          onBlur={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = isDark ? "0 4px 16px rgba(96, 165, 250, 0.3)" : "0 4px 16px rgba(135, 206, 235, 0.3)";
          }}
        >
          💬 Chat with me!
        </button>
      </div>
    </div>
  );
}