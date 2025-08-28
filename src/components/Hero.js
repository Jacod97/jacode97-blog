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
          저는 Civil Engineering과 AI/ML을 결합하여 스마트 모빌리티와 인프라 문제를 해결하는 것을 목표로 하고 있습니다.  
          이 블로그에서는 저의 경험, 연구, 프로젝트를 공유합니다.
        </p>
      </div>
    </section>
  );
}
