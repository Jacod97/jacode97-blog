# 수학적 랜딩 페이지 포트폴리오

수학적이고 역동적인 효과를 가진 개인 포트폴리오 웹사이트입니다.

## 특징

- ✨ **수학적 비주얼**: Canvas 기반 파티클 시스템과 수학 함수로 제어되는 애니메이션
- 🌙 **다크 + 네온 테마**: 어두운 배경에 네온 그린/시안 액센트
- 🎨 **인터랙티브 애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- ⚡ **빠른 성능**: Vite 기반 빌드 시스템

## 기술 스택

- React 18
- Vite
- Framer Motion (애니메이션)
- React Icons (아이콘)
- CSS Modules (스타일링)

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속합니다.

### 프로덕션 빌드

```bash
npm run build
npm run preview
```

## 커스터마이징 가이드

### 1. 개인 정보 수정

#### **src/components/Hero/Hero.jsx**
- 이름, 직함, 수학 공식 수정

#### **src/components/About/About.jsx**
- 자기소개, 이름, 역할 수정
- 소셜 미디어 링크 업데이트

#### **src/components/Contact/Contact.jsx**
- 이메일, GitHub, LinkedIn, Twitter 링크 업데이트

### 2. 프로젝트 추가/수정

**src/data/projectsData.js** 파일을 편집하세요:

```javascript
{
  id: 1,
  title: "프로젝트 제목",
  description: "프로젝트 설명",
  image: "/assets/images/projects/project1.png",
  tags: ["React", "Node.js"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/username/project"
}
```

프로젝트 이미지는 `public/assets/images/projects/` 폴더에 저장하세요.

### 3. 기술 스택 업데이트

**src/data/skillsData.js** 파일을 편집하세요:

```javascript
{
  name: "React",
  icon: "SiReact",  // Simple Icons의 아이콘 이름
  level: 90,        // 숙련도 (0-100)
  color: "#61DAFB"  // 아이콘 색상
}
```

### 4. 컬러 테마 변경

**src/styles/variables.css** 파일의 CSS 변수를 수정하세요:

```css
:root {
  --bg-primary: #0a0e27;
  --accent-primary: #00ff88;
  /* ... */
}
```

### 5. 프로필 사진 추가

1. 프로필 사진을 `public/assets/images/` 폴더에 `profile.jpg` 이름으로 저장
2. **src/components/About/About.jsx**에서 이미지 경로 업데이트:

```jsx
<img src="/assets/images/profile.jpg" alt="Profile" />
```

## 프로젝트 구조

```
my_page/
├── public/
│   └── assets/images/         # 이미지 파일
├── src/
│   ├── components/            # React 컴포넌트
│   │   ├── Background/        # 파티클 & 그리드 배경
│   │   ├── Hero/             # 메인 히어로 섹션
│   │   ├── Header/           # 네비게이션
│   │   ├── About/            # 소개 섹션
│   │   ├── Projects/         # 프로젝트 섹션
│   │   ├── Skills/           # 기술 섹션
│   │   ├── Contact/          # 연락처 섹션
│   │   └── Footer/           # 푸터
│   ├── data/                 # 데이터 파일
│   │   ├── projectsData.js   # 프로젝트 정보
│   │   └── skillsData.js     # 기술 스택 정보
│   ├── hooks/                # Custom Hooks
│   │   └── useScrollSpy.js   # 스크롤 위치 추적
│   ├── utils/                # 유틸리티 함수
│   │   ├── mathUtils.js      # 수학 함수
│   │   └── smoothScroll.js   # 부드러운 스크롤
│   ├── styles/               # 글로벌 스타일
│   │   ├── global.css        # 전역 스타일
│   │   └── variables.css     # CSS 변수
│   ├── App.jsx              # 메인 앱 컴포넌트
│   └── main.jsx             # 진입점
└── package.json
```

## 주요 컴포넌트

### ParticleBackground
- Canvas API를 사용한 파티클 시스템
- 마우스 상호작용 (반발력)
- 수학 함수로 제어되는 움직임
- 파티클 간 연결선

### GridBackground
- CSS 그리드 패턴
- 펄스 애니메이션

### Hero
- 랜딩 페이지 메인 섹션
- 타이핑 효과
- Framer Motion 애니메이션
- CTA 버튼

### Header
- 고정 네비게이션
- 스크롤 스파이
- 모바일 햔버거 메뉴

## 배포

### Vercel (추천)

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 자동으로 빌드 및 배포됨

### Netlify

1. [Netlify](https://netlify.com)에서 프로젝트 업로드
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

package.json에 추가:

```json
{
  "homepage": "https://yourusername.github.io/my-page",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

실행:

```bash
npm run deploy
```

## 라이선스

MIT

## 제작

React + Vite + Framer Motion으로 제작되었습니다.
