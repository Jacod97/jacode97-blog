import { useState } from 'react';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Have a question about Jae-Sik? Ask me." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    const newMsg = { id: Date.now(), from: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{
        flex: 1,
        overflowY: "auto",
        marginBottom: "1rem",
        padding: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#fff"
      }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{
            textAlign: msg.from === "user" ? "right" : "left",
            margin: "0.3rem 0"
          }}>
            <span style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              background: msg.from === "user" ? "#007bff" : "#eee",
              color: msg.from === "user" ? "white" : "black"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          style={{ flex: 1, padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Please enter your message..."
        />
        <button
          type="button"
          onClick={sendMessage}
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem", borderRadius: "5px", background: "#007bff", color: "white" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
