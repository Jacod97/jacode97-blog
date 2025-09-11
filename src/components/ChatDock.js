import { useState } from "react";
import ChatForm from "./ChatForm";

export default function ChatDock() {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Welcome! Please introduce yourself first." }
  ]);
  const [input, setInput] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const sessionId = "react-user";

  const handleRegistrationComplete = (userInfo) => {
    setRegistered(true);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        from: "bot",
        text: `Nice to meet you, ${userInfo.name}!`
      }
    ]);
  };

  const askChatbot = async () => {
    if (!input) return;

    const userMsg = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://blog-chatbot-1o2k.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: input })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const botMsg = { id: Date.now() + 1, from: "bot", text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg = {
        id: Date.now() + 1,
        from: "bot",
        text: "⚠️ Connection failed. Please try again later."
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      aria-label="Chat dock"
      style={{
        position: 'fixed',
        right: '24px',
        top: '24px',
        width: '360px',
        maxHeight: 'calc(100vh - 3rem)',
        overflow: 'hidden',
        borderRadius: '16px',
        border: '1px solid rgba(226, 232, 240, 0.7)',
        backgroundColor: 'white',
        boxShadow: '0 18px 50px rgba(3, 7, 18, 0.5)',
        padding: '20px',
        zIndex: 40,
        display: 'none'
      }}
      className="chat-dock"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: 0 }}>Say hi</h3>
      </div>
      
      {!registered ? (
        <div>
          <ChatForm onRegister={handleRegistrationComplete} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 8rem)' }}>
          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px', paddingRight: '8px' }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  backgroundColor: msg.from === 'user' ? '#0284c7' : '#f1f5f9',
                  color: msg.from === 'user' ? 'white' : '#1e293b',
                  marginLeft: msg.from === 'user' ? '32px' : '0',
                  marginRight: msg.from === 'user' ? '0' : '32px'
                }}
              >
                <p style={{ fontSize: '14px', margin: 0 }}>{msg.text}</p>
              </div>
            ))}
            {loading && (
              <div style={{ backgroundColor: '#f1f5f9', color: '#1e293b', padding: '12px', borderRadius: '8px', marginRight: '32px' }}>
                <p style={{ fontSize: '14px', margin: 0 }}>Thinking...</p>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askChatbot()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                backgroundColor: 'white',
                padding: '8px 12px',
                fontSize: '14px',
                color: '#1e293b'
              }}
              disabled={loading}
            />
            <button
              type="button"
              onClick={askChatbot}
              disabled={loading || !input}
              style={{
                backgroundColor: loading || !input ? '#94a3b8' : '#0284c7',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: loading || !input ? 'not-allowed' : 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}