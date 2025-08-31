import { useState } from "react";
import Profile from "./data/Profile";
import Timeline from "./data/Timeline"; 
import Projects from "./data/Project"; 
import QA from "./data/QA"; 
import "./MainLayout.css";

export default function MainLayout() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section style={{ padding: "3rem 4rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",  // ✅ 4개 한 줄
          gap: "2rem",
          maxWidth: "1400px",   // 더 넓게 확장
          margin: "0 auto"
        }}
      >
        <button type="button" className="card" onClick={() => setActiveModal("profile")}>
          <h2>Profile</h2>
          <p>Get to know me better here!</p>
        </button>

        <button type="button" className="card" onClick={() => setActiveModal("qa")}>
          <h2>Interview</h2>
          <p>Curious about me? Here are some quick answers!</p>
        </button>

        <button type="button" className="card" onClick={() => setActiveModal("timeline")}>
          <h2>Timeline</h2>
          <p>Take a look at my journey through school and work!</p>
        </button>

        <button type="button" className="card" onClick={() => setActiveModal("project")}>
          <h2>Projects</h2>
          <p>Check out my side projects and professional work!</p>
        </button>
      </div>

      {/* Modal */}
      {activeModal === "profile" && <Profile onClose={() => setActiveModal(null)} />}
      {activeModal === "timeline" && <Timeline onClose={() => setActiveModal(null)} />}
      {activeModal === "project" && <Projects onClose={() => setActiveModal(null)} />}  
      {activeModal === "qa" && <QA onClose={() => setActiveModal(null)} />}  
    </section>
  );
}
