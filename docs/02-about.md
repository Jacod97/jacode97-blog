# About Me

메인 페이지의 About Me 섹션 + Learn More 클릭 시 이동하는 상세 페이지(`/about`).

## 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/AI/AIDashboard.jsx` | 메인 About Me 섹션 (사진, 소개글, Learn More 버튼) |
| `src/components/AI/AIDashboard.module.css` | 메인 About Me 스타일 |
| `src/pages/AboutDetail.jsx` | 상세 페이지 (소셜링크, ToDo, 스킬, 이력서) |
| `src/pages/AboutDetail.module.css` | 상세 페이지 스타일 |

---

## 메인 페이지 About Me 수정

파일: `src/components/AI/AIDashboard.jsx`

### 소개글 변경 — 195~202번 줄

```jsx
<p className={styles.aboutDesc}>
  안녕하세요. AI Engineer로서 Computer Vision과 Deep Learning 분야에서
  연구하고 있습니다. ...
</p>
<p className={styles.aboutDesc}>
  새로운 기술에 대한 호기심과 문제 해결에 대한 열정을 바탕으로, ...
</p>
```

### 프로필 사진 변경 — 171번 줄

```jsx
<img src="/images/profile.jpg" ... />
```

실제 사진 파일을 `public/images/profile.jpg` 경로에 넣으면 자동 표시.

### 섹션 라벨 변경 — 156번 줄

```jsx
<span>01 / ABOUT ME</span>
```

---

## 상세 페이지 (`/about`) 수정

파일: `src/pages/AboutDetail.jsx`

### 소셜 링크 변경 — 14~18번 줄

```js
const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { icon: FaBlog, label: 'Blog', href: 'https://yourblog.com' },
];
```

`href` 값을 본인 URL로 수정.

### To Do List 변경 — 39~45번 줄

```js
const todos = [
  { text: 'Transformer 기반 비전 모델 논문 리뷰', done: true },
  { text: '포트폴리오 프로젝트 3종 완성', done: true },
  { text: '오픈소스 컨트리뷰션 시작하기', done: false },
  { text: 'AWS Solutions Architect 자격증 취득', done: false },
  { text: '기술 블로그 10편 작성', done: false },
];
```

- `text`: 항목 내용
- `done`: `true`면 완료(취소선), `false`면 미완료

### 기술 스택 변경 — 20~37번 줄

```js
const skills = [
  { icon: SiPython, name: 'Python' },
  { icon: SiJavascript, name: 'JavaScript' },
  // ... 4개씩 한 줄에 표시됨
];
```

아이콘 추가 시 `react-icons` 패키지에서 import 필요.

### 이력서 파일 변경 — 101번 줄

```jsx
<a href="/resume.pdf" download className={styles.downloadBtn}>
```

`public/resume.pdf` 경로에 이력서 파일을 넣으면 다운로드 동작.

### 스타일 수정

파일: `src/pages/AboutDetail.module.css`

| 클래스 | 용도 |
|--------|------|
| `.socialRow`, `.socialBtn` | 상단 소셜 링크 버튼 |
| `.todoList`, `.todoItem` | To Do 리스트 |
| `.skillGrid`, `.skillItem` | 기술 스택 4열 그리드 |
| `.downloadBtn` | 이력서 다운로드 버튼 |
