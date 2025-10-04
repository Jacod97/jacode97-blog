// src/components/data/Diary.js
import { useEffect } from "react";

export default function Diary({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1100
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "2rem",
          width: "600px",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
      >
        <h2>My Diary</h2>
        <p>This is the diary section. You can share daily thoughts or reflections here.</p>
        <button
          type="button"
          onClick={onClose}
          style={{
            margin: "1rem auto 0",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "120px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
