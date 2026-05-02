# Home (Hero + GNB)

메인 페이지 진입 시 가장 먼저 보이는 영역. 타이틀, 서브타이틀, 로고, 네비게이션 바 포함.

## 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/AI/AIDashboard.jsx` | Hero 섹션 + GNB 렌더링 |
| `src/components/AI/AIDashboard.module.css` | Hero + GNB 스타일 |
| `src/components/AI/NeuralNetworkBackground.jsx` | 배경 뉴럴넷 애니메이션 |
| `src/App.jsx` | `/` 라우트에 Home 연결 |

## 수정 가이드

### 메인 타이틀 변경

`src/components/AI/AIDashboard.jsx` — 139번 줄

```jsx
<h1 className={styles.title}>AI ENGINEER</h1>
```

### 서브타이틀 변경

`src/components/AI/AIDashboard.jsx` — 142번 줄

```jsx
<p>Computer Vision · Deep Learning · Neural Networks</p>
```

### 로고 텍스트 변경

`src/components/AI/AIDashboard.jsx` — 102번 줄

```jsx
<span className={styles.logoText}>{'<YN />'}</span>
```

### GNB 네비게이션 항목 변경

`src/components/AI/AIDashboard.jsx` — 11~15번 줄

```js
const navItems = [
  { id: 'about', icon: FaInfoCircle, title: 'About' },
  { id: 'timeline', icon: FaRoute, title: 'Timeline' },
  { id: 'projects', icon: FaCode, title: 'Projects' },
  { id: 'contact', icon: FaEnvelope, title: 'Contact' },
];
```

### 스타일 수정

| 클래스 | 파일 내 위치 | 용도 |
|--------|-------------|------|
| `.hero` | AIDashboard.module.css | Hero 섹션 레이아웃 |
| `.title` | AIDashboard.module.css | 메인 타이틀 폰트/그라디언트 |
| `.subtitle` | AIDashboard.module.css | 서브타이틀 스타일 |
| `.gnb` | AIDashboard.module.css | 상단 네비게이션 바 |
| `.logoText` | AIDashboard.module.css | 로고 텍스트 스타일 |
