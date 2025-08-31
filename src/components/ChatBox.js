import { useState } from "react";

export default function ChatBox() {
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
  const [loading, setLoading] = useState(false); // ✅ 로딩 상태 추가
  const sessionId = "react-user";

  // 사용자 정보 전송
  const registerUser = async () => {
    try {
      await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, ...userInfo })
      });
      setRegistered(true);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          from: "bot",
          text: `Nice to meet you, ${userInfo.name}!`
        }
      ]);
      setError("");
    } catch (err) {
      setError("⚠️ Could not register user info.");
    }
  };

  // 챗봇 질문
  const askChatbot = async () => {
    if (!input) return;

    const userMsg = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const question = input;
    setInput("");
    setLoading(true); // ✅ 로딩 시작

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
        {
          id: Date.now() + 2,
          from: "bot",
          text: "⚠️ Could not connect to server."
        }
      ]);
    } finally {
      setLoading(false); // ✅ 로딩 종료
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {!registered ? (
        <div style={{ marginBottom: "1rem" }}>
          {/* 안내 문구 */}
          <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#555" }}>
            If you want to use this chatbot, you need to enter your information below.
            This is only to know who wants to connect with me on this website.
            It will not be used for any commercial purpose
          </p>

          {/* 에러 메시지 */}
          {error && (
            <div style={{ color: "red", marginBottom: "0.5rem" }}>{error}</div>
          )}

          {/* 사용자 입력창 (4줄) */}
          <input
            placeholder="Name"
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "0.8rem"
            }}
            onChange={(e) =>
              setUserInfo({ ...userInfo, name: e.target.value })
            }
          />
          <input
            placeholder="Job"
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "0.8rem"
            }}
            onChange={(e) => setUserInfo({ ...userInfo, job: e.target.value })}
          />
          <input
            placeholder="Company"
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "0.8rem"
            }}
            onChange={(e) =>
              setUserInfo({ ...userInfo, company: e.target.value })
            }
          />
          <input
            placeholder="Country"
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              marginBottom: "0.8rem"
            }}
            onChange={(e) =>
              setUserInfo({ ...userInfo, country: e.target.value })
            }
          />

          {/* 등록 버튼 */}
          <button
            type="button"
            onClick={registerUser}
            style={{
              display: "block",
              width: "100%",
              padding: "0.8rem",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Register
          </button>
        </div>
      ) : (
        <>
          {/* 대화창 */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "1rem",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff"
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  textAlign: msg.from === "user" ? "right" : "left",
                  margin: "0.3rem 0"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    background: msg.from === "user" ? "#007bff" : "#eee",
                    color: msg.from === "user" ? "white" : "black"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* ✅ 로딩 아이콘 표시 */}
            {loading && (
              <div style={{ textAlign: "left", margin: "0.3rem 0" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    background: "#eee",
                    color: "black",
                    fontStyle: "italic"
                  }}
                >
                  ⏳ Bot is typing...
                </span>
              </div>
            )}
          </div>

          {/* 입력창 */}
          <div style={{ display: "flex" }}>
            <input
              style={{
                flex: 1,
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ddd"
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askChatbot()}
              placeholder="Please enter your message..."
            />
            <button
              type="button"
              onClick={askChatbot}
              style={{
                marginLeft: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                background: "#007bff",
                color: "white"
              }}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
