import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpg";

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);

  return (
    <div style={{ 
      paddingTop: '6rem', // Header 높이만큼 여백
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Profile Photo Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: 'clamp(200px, 30vw, 300px)',
          height: 'clamp(200px, 30vw, 300px)',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: `4px solid ${isDarkMode ? '#60a5fa' : '#2563eb'}`,
          boxShadow: isDarkMode 
            ? '0 20px 40px rgba(96, 165, 250, 0.2)' 
            : '0 20px 40px rgba(37, 99, 235, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <img
            src={profileImg}
            alt="Jaesik Jeong Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <h2 style={{
          fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          color: isDarkMode ? '#e2e8f0' : '#1e293b',
          marginBottom: '0.5rem'
        }}>
          Jaesik Jeong
        </h2>

        <p style={{
          fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: isDarkMode ? '#94a3b8' : '#64748b',
          marginBottom: '2rem'
        }}>
          AI Engineer in Seoul
        </p>
      </section>

      {/* Introduction Section - Expandable */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <button
          type="button"
          onClick={() => setIsIntroExpanded(!isIntroExpanded)}
          style={{
            width: '100%',
            padding: '1.5rem',
            background: isDarkMode 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
            borderRadius: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = isDarkMode 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <h3 style={{
            fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            fontWeight: 600,
            color: isDarkMode ? '#f1f5f9' : '#1e293b',
            margin: 0
          }}>
            Let me introduce myself
          </h3>
          <span style={{
            fontSize: '1.5rem',
            color: isDarkMode ? '#94a3b8' : '#64748b',
            transform: isIntroExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}>
            ▼
          </span>
        </button>

        {/* Expandable Content */}
        <div style={{
          maxHeight: isIntroExpanded ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          background: isDarkMode 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          border: isIntroExpanded ? `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}` : 'none',
          borderRadius: isIntroExpanded ? '1rem' : '0',
          padding: isIntroExpanded ? '2rem' : '0 2rem',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
            lineHeight: '1.7',
            color: isDarkMode ? '#d1d5db' : '#374151',
            margin: 0
          }}>
            Hello, I&apos;m Jaesik Jeong, an AI engineer living in Seoul.
            This website introduces me to people from various countries.
            I also use the sections below to improve my English skills by writing in English.
            <br /><br />
            <strong>Profile</strong> allows you to check out my personal information.
            <br />
            <strong>Interview</strong> consists of a Q&A session that gives you a glimpse into my thoughts and values.
            <br />
            <strong>Timeline</strong> allows you to see my life&apos;s journey at a glance.
            <br />
            <strong>Projects</strong> shows traces of the various side projects I&apos;ve undertaken.
            <br /><br />
            If you have any questions about me, please ask the chatbot or check out Interview. 
            Please note that the chatbot can only accept five questions to conserve my tokens.
            If you&apos;d like to chat with me for any other reason, please contact me via the email address listed in Profile. 
            I&apos;m always happy to hear from you.
          </p>
        </div>

        {/* Mobile Chat Button */}
        <div className="mobile-chat-button" style={{ 
          textAlign: 'center',
          marginTop: '2rem' 
        }}>
          <button
            type="button"
            style={{
              backgroundColor: isDarkMode ? "#3b82f6" : "#2563eb",
              color: "white",
              padding: "12px 32px",
              borderRadius: "2rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 16px rgba(37, 99, 235, 0.3)",
              transition: "all 0.3s ease",
              fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = isDarkMode ? "#2563eb" : "#1d4ed8";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 24px rgba(37, 99, 235, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = isDarkMode ? "#3b82f6" : "#2563eb";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = isDarkMode ? "#2563eb" : "#1d4ed8";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 24px rgba(37, 99, 235, 0.4)";
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = isDarkMode ? "#3b82f6" : "#2563eb";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
            }}
            onClick={() => {
              const chatPanel = document.querySelector('.chat-panel');
              if (chatPanel) {
                chatPanel.classList.add('show');
              }
            }}
          >
            💬 Start Chat
          </button>
        </div>
      </section>
    </div>
  );
}