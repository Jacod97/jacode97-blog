export default function Hero() {
  return (
    <section
      style={{
        display: "flex",                 // flexbox 레이아웃 사용 → 내부 요소를 가로/세로로 배치
        alignItems: "center",            // 교차축(세로) 기준 중앙 정렬 → 사진과 글이 세로 중앙선에 맞춰짐
        justifyContent: "center",        // 주축(가로) 기준 중앙 정렬 → 화면 중앙에 전체 Hero 섹션 배치
        padding: "4rem 2rem",            // 위아래 4rem, 좌우 2rem 여백
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)", 
        // 배경색: 위쪽은 하늘색(#e0f7fa) → 아래쪽은 흰색(#ffffff)으로 부드럽게 그라데이션
        gap: "3rem"                      // flex item(사진과 글) 사이 간격 3rem
      }}
    >
      {/* 왼쪽: 프로필 사진 */}
      <div>
        {/* public/assets/profile.jpg 에 있는 이미지 불러오기 */}
        <img
          src="/assets/profile.jpg"       // public 폴더 기준으로 접근 가능 (/assets/profile.jpg)
          alt="My Profile"                // 이미지 대체 텍스트 (스크린리더 접근성용)
          style={{
            width: "250px",               // 이미지 가로 크기 250px
            height: "250px",              // 이미지 세로 크기 250px
            borderRadius: "50%",          // 원형으로 잘라내기 (정사각형이어야 완전 원형)
            objectFit: "cover",           // 이미지 비율 유지하며 박스 가득 채우기
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
            // 그림자 효과: x=0, y=4px, 블러=8px, 반투명 검정
          }}
        />
      </div>

      {/* 오른쪽: 소개글 */}
      <div style={{ maxWidth: "900px", textAlign: "left" }}>
        {/* 블로그 타이틀 */}
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Jacode-Blog
        </h1>

        {/* 부제목 */}
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
          Let me introduce myself
        </h2>

        {/* 자기소개 문단 */}
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Hello, I’m Jae-sik Jung, an AI Engineer. I am based in Seoul, South Korea.
          When I was younger, I have enjoyed mathematics, especially the process of solving problems and finding answers. 
          As I grew older, I also became interested in subjects like mathematics, statistics, mechanics, and English.
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
