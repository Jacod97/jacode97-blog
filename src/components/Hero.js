export default function Hero() {
  return (
    <section
      style={{
        display: "flex",                 // 좌우 배치
        alignItems: "center",            // 세로 중앙 정렬
        justifyContent: "center",        // 가로 중앙 정렬
        padding: "4rem 2rem",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        gap: "3rem"                      // 사진과 글 사이 간격
      }}
    >
      {/* 왼쪽: 프로필 사진 */}
      <div>
        {/* public 폴더에 profile.jpg 넣었다고 가정 */}
        <img
          src="/assets/profile.jpg"
          alt="My Profile"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",         // 원형 사진
            objectFit: "cover",          // 비율 유지하며 채우기
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // 그림자 효과
          }}
        />
      </div>

      {/* 오른쪽: 글 */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Jacode-Blog
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
          Let me introduce myself
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Hello, I’m Jae-sik Jung, an AI Engineer. I am based in Seoul, South Korea.
          When I was younger, I have enjoyed mathematics, especially the process of solving problems and finding answers. As I grew older, I also became interested in subjects like mathematics, statistics, mechanics, and English.
          Today, I place great value on continuous learning and growth, and I am always studying and improving myself. This mindset has driven me to keep exploring new knowledge and challenges in a rapidly changing industry, and eventually led me to the fascinating field of artificial intelligence.
          I prefer focusing on the cause of a problem rather than just its solution. My goal is to fundamentally understand problems and create innovative solutions, growing into an AI professional who can make a meaningful impact.
        </p>
      </div>
    </section>
  );
}
