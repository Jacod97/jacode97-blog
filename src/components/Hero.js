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
          Let me introduce you to this site.
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Hello, I&apos;m Jaesik Jeong, an AI engineer living in Seoul.<br />
          This website is designed to connect and communicate with people from various countries. Additionally, 
          I created this site with the goal of improving my English skills. <strong>Profile</strong> allows you to check out my personal information.
          <strong> Timeline</strong> allows you to see my life&apos;s journey at a glance. <strong>Projects</strong> shows traces of the various side projects I&apos;ve undertaken. 
           <strong> Interview</strong> is designed as a Q&A session, offering a glimpse into my thoughts and values.<br />
          If you have any questions about me, please ask the chatbot on the right or check out Interview. Please note that the chatbot can only accept five questions to conserve my tokens.
          If you&apos;d like to chat with me for any other reason, please contact me via the email address listed in Profile. I&apos;m always happy to hear from you.
        </p>
      </div>
    </section>
  );
}
