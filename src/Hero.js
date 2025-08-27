// src/components/Hero.js
export default function Hero() {
  return (
    <section style={{
      padding: "4rem 2rem",
      textAlign: "center",
      background: "linear-gradient(to bottom, #e0f7fa, #ffffff)"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to Jacode-Blog
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
        Let me introduce myself
      </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
        저는 Civil Engineering과 AI/ML을 결합하여 스마트 모빌리티와 인프라 문제를 해결하는 것을 목표로 하고 있습니다.  
        이 블로그에서는 저의 경험, 연구, 프로젝트를 공유합니다.
      </p>
    </section>
  );
}
