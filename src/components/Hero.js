import profileImg from "../assets/profile.jpg";   

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        gap: "3rem"
      }}
    >
      {/* 왼쪽: 프로필 사진 */}
      <div>
        <img
          src={profileImg}                // import 방식
          alt="My Profile"
          style={{
            width: "400px",              // 가로 크기
            height: "auto",             // 세로 크기
            borderRadius: "0",           // 네모 모양 (0으로 설정)
            objectFit: "cover",          // 사진이 잘리지 않도록 비율 유지
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // 살짝 그림자
          }}
        />
      </div>

      {/* 오른쪽: 소개 글 */}
      <div style={{ maxWidth: "900px", textAlign: "left" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Jacode-Blog
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
          Let me introduce myself
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Hello, I’m Jae-sik Jung, an AI Engineer living in Seoul, South Korea.
          When I was younger, I have enjoyed mathematics, especially the process of solving problems and figuring out the answers
          Over time, my interests expanded to a wider range of subjects, including mathematics, statistics, mechanics, and English.
          Today, I place great value on continuous learning and growth, and I am always studying and improving myself.
          This mindset has driven me to keep exploring new knowledge and challenges in a rapidly changing industry,
          and eventually led me to the fascinating field of artificial intelligence.
          I prefer focusing on the cause of a problem rather than just its solution.
          My goal is to fundamentally understand problems and create innovative solutions,
          growing into an AI professional who can make a meaningful impact.
        </p>
      </div>
    </section>
  );
}
