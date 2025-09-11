import { useState } from "react";

export default function ChatBox({ theme }) {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Welcome! Please introduce yourself first." }
  ]);
  const [input, setInput] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    job: "",
    company: "",
    country: ""
  });
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const sessionId = "react-user";
  const isDark = theme === "dark";

  const registerUser = async () => {
    try {
      await fetch("https://blog-chatbot-1o2k.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, ...userInfo })
      });
      setRegistered(true);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), from: "bot", text: `Nice to meet you, ${userInfo.name}!` }
      ]);
      setError("");
    } catch (err) {
      setError("⚠️ Could not register user info.");
    }
  };

  const askChatbot = async () => {
    if (!input) return;
    const userMsg = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const question = input;
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, question })
      });
      const data = await response.json();
      const botMsg = { id: Date.now() + 1, from: "bot", text: data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, from: "bot", text: "⚠️ Could not connect to server." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox-container" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {!registered ? (
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: isDark ? "#e2e8f0" : "#555" }}>
            If you want to use this chatbot, you need to enter your information below.
            This is only to know who wants to connect with me on this website.
            It will not be used for any commercial purpose
          </p>
          {error && <div style={{ color: "red", marginBottom: "0.5rem" }}>{error}</div>}
          <input placeholder="Name" style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "0.8rem" }}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}/>
          <input placeholder="Job" style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "0.8rem" }}
            onChange={(e) => setUserInfo({ ...userInfo, job: e.target.value })}/>
          <input placeholder="Company" style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "0.8rem" }}
            onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}/>
          <input placeholder="Country" style={{ display: "block", width: "100%", padding: "0.8rem", marginBottom: "0.8rem" }}
            onChange={(e) => setUserInfo({ ...userInfo, country: e.target.value })}/>
          <button type="button" onClick={registerUser}
            style={{
              display: "block", width: "100%", padding: "0.8rem",
              background: isDark ? "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)"
                                 : "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)",
              color: "white", borderRadius: "12px", fontWeight: "600"
            }}>
            Register
          </button>
        </div>
      ) : (
        <>
          {/* 대화창 */}
          <div className="chat-messages scrollbar-none"
            style={{
              flex: 1, overflowY: "auto", marginBottom: "1rem",
              padding: "0.5rem", border: "1px solid #ddd", borderRadius: "8px"
              // background: "#fff" ← ❌ 삭제
            }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.from}`} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "0.3rem 0" }}>
                <span style={{
                  display: "inline-block", padding: "0.5rem 1rem", borderRadius: "20px",
                  background: msg.from === "user" ? "#007bff" : "#eee",
                  color: msg.from === "user" ? "white" : "black"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot" style={{ textAlign: "left", margin: "0.3rem 0" }}>
                <span style={{ display: "inline-block", padding: "0.5rem 1rem", borderRadius: "20px", background: "#eee", color: "black", fontStyle: "italic" }}>
                  ⏳ Bot is typing...
                </span>
              </div>
            )}
          </div>
          {/* 입력창 */}
          <div className="chat-input" style={{ display: "flex" }}>
            <input style={{ flex: 1, padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
              value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && askChatbot()}
              placeholder="Please enter your message..."/>
            <button type="button" onClick={askChatbot}
              style={{
                marginLeft: "0.5rem", padding: "0.5rem 1rem", borderRadius: "8px",
                background: isDark ? "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)"
                                   : "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)",
                color: "white", border: "none", fontWeight: "600"
              }}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
