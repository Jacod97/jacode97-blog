import { useState } from "react";
import profileImg from "../assets/profile.jpg";   

export default function Hero({ theme }) {
  const [showMore, setShowMore] = useState(false);
  const isDark = theme === "dark";

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Profile Section */}
      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          paddingTop: "4rem",
        }}
      >
        <div
          style={{
            background: isDark
              ? "rgba(30, 41, 59, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            padding: "2rem",
            maxWidth: "900px",
            width: "100%",
            boxShadow: isDark
              ? "0 8px 32px rgba(0, 0, 0, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.1)",
            border: isDark
              ? "1px solid rgba(148, 163, 184, 0.1)"
              : "1px solid rgba(226, 232, 240, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Photo */}
            <img
              src={profileImg}
              alt="Jaesik Jeong"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: isDark
                  ? "0 4px 16px rgba(0, 0, 0, 0.3)"
                  : "0 4px 16px rgba(0, 0, 0, 0.1)",
                flexShrink: 0,
              }}
            />

            {/* Content */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: isDark ? "#f8fafc" : "#1e293b",
                  margin: "0 0 0.5rem 0",
                  letterSpacing: "-0.025em",
                }}
              >
                Welcome to Jacode-Blog
              </h1>

              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: isDark ? "#e2e8f0" : "#374151",
                  margin: "0 0 1rem 0",
                }}
              >
                Let me introduce myself
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: isDark ? "#d1d5db" : "#4b5563",
                  margin: "0 0 1rem 0",
                }}
              >
                Hello, I&apos;m Jaesik Jeong, an AI engineer living in Seoul.{" "}
                This website is designed to connect and communicate with people
                from various countries. I also use it to improve my English
                skills.{" "}
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
                  e.currentTarget.style.borderBottomColor = isDark ? "#60a5fa" : "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = isDark ? "#60a5fa" : "#3b82f6";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                more
              </button>

              {showMore && (
                <div
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: isDark ? "#d1d5db" : "#4b5563",
                    paddingTop: "1rem",
                    borderTop: isDark
                      ? "1px solid rgba(148, 163, 184, 0.2)"
                      : "1px solid rgba(226, 232, 240, 0.5)",
                  }}
                >
                  <p>
                    <strong>Profile</strong> allows you to check out my personal
                    information.
                  </p>
                  <p>
                    <strong>Timeline</strong> allows you to see my life&apos;s
                    journey at a glance.
                  </p>
                  <p>
                    <strong>Projects</strong> shows traces of the various side
                    projects I&apos;ve undertaken.
                  </p>
                  <p>
                    <strong>Interview</strong> is designed as a Q&A session,
                    offering a glimpse into my thoughts and values.
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    If you have any questions about me, please ask the chatbot
                    on the right. Please note that the chatbot can only accept
                    five questions to conserve my tokens.
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
          display: "block",
          padding: "1rem 2rem",
          textAlign: "center",
        }}
        className="mobile-chat-prompt"
      >
        <button
          type="button"
          onClick={() => {
            const chatPanel = document.querySelector(".chat-panel");
            if (chatPanel) {
              chatPanel.classList.add("show");
            }
          }}
          style={{
            background: isDark
              ? "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)"
              : "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: "1rem 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: isDark
              ? "0 4px 16px rgba(96, 165, 250, 0.3)"
              : "0 4px 16px rgba(135, 206, 235, 0.3)",
            transition: "all 0.3s ease",
          }}
        >
          💬 Chat with me!
        </button>
      </div>
    </div>
  );
}
