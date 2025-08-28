import { useState } from "react";
import ChatBox from "./ChatBox";
import Profile from "./data/Profile";
import Timeline from "./data/Timeline"; 
import Projects from "./data/Project"; 

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  padding: "1rem",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "left",
  cursor: "pointer"
};

export default function MainLayout() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Profile */}
        <button
          type="button"
          style={{ ...cardStyle, border: "none" }}
          onClick={() => setActiveModal("profile")}
        >
          <h2>Profile</h2>
          <p>Get to know me better here!</p>
        </button>

        {/* Timeline */}
        <button
          type="button"
          style={{ ...cardStyle, border: "none" }}
          onClick={() => setActiveModal("timeline")}
        >
          <h2>Timeline</h2>
          <p>Take a look at my journey through school and work!</p>
        </button>

        {/* Projects */}
        <button
          type="button"
          style={{ ...cardStyle, border: "none" }}
          onClick={() => setActiveModal("project")}
        >
          <h2>Projects</h2>
          <p>Check out my side projects and professional work!</p>
        </button>

        {/* Q&A */}
        <button
          type="button"
          style={{ ...cardStyle, border: "none" }}
          onClick={() => setActiveModal("qa")}
        >
          <h2>Q&A about myself</h2>
          <p>Curious about me? Here are some quick answers!</p>
        </button>
      </div>

      {/* ChatBot 영역 */}
      <div
        style={{
          flex: "0 0 400px",
          height: "600px",
          background: "#f9f9f9",
          borderRadius: "10px",
          padding: "1rem"
        }}
      >
        <h2 style={{ textAlign: "center" }}>ChatBot</h2>
        <ChatBox />
      </div>

      {/* Modal Rendering */}
      {activeModal === "profile" && <Profile onClose={() => setActiveModal(null)} />}
      {activeModal === "timeline" && <Timeline onClose={() => setActiveModal(null)} />}
      {activeModal === "project" && <Projects onClose={() => setActiveModal(null)} />}  
    </section>
  );
}
