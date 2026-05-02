# Contact

메인 페이지 하단의 연락처 섹션 + 푸터. 현재 별도 상세 페이지 없음.

## 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/AI/AIDashboard.jsx` | Contact 섹션 + Footer 렌더링 |
| `src/components/AI/AIDashboard.module.css` | Contact + Footer 스타일 |

---

## 수정 가이드

### 연락처 정보 변경

파일: `src/components/AI/AIDashboard.jsx` — 36~40번 줄

```js
const contactData = {
  email: 'your.email@example.com',
  github: 'github.com/yourusername',
  linkedin: 'linkedin.com/in/yourusername',
};
```

각 값을 본인 정보로 수정. 링크는 자동으로 생성됨:
- email → `mailto:` 링크
- github → `https://` 접두사 자동 추가
- linkedin → `https://` 접두사 자동 추가

### 연락처 항목 추가/삭제

`src/components/AI/AIDashboard.jsx` — 262~277번 줄

```jsx
{[
  { label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
  { label: 'GitHub', value: contactData.github, href: `https://${contactData.github}` },
  { label: 'LinkedIn', value: contactData.linkedin, href: `https://${contactData.linkedin}` },
].map((item, i) => ( ... ))}
```

배열에 항목을 추가/삭제하면 됨.

### 섹션 라벨/타이틀 변경

`src/components/AI/AIDashboard.jsx`

- 섹션 라벨 — 253번 줄: `04 / CONTACT`
- 섹션 타이틀 — 258번 줄: `Get In Touch`

### 푸터 텍스트 변경

`src/components/AI/AIDashboard.jsx` — 288~292번 줄

```jsx
<footer className={styles.footer}>
  <span>Neural Network Visualization</span>
  <span>·</span>
  <span>AI Portfolio</span>
  <span>·</span>
  <span>2024</span>
</footer>
```

### 스타일 수정

파일: `src/components/AI/AIDashboard.module.css`

| 클래스 | 용도 |
|--------|------|
| `.contactList` | 연락처 리스트 컨테이너 |
| `.contactItem` | 개별 연락처 (왼쪽 파란 보더) |
| `.contactLabel` | 라벨 텍스트 (Email, GitHub 등) |
| `.contactItem a` | 링크 텍스트 (hover 시 우측 이동) |
| `.footer` | 푸터 스타일 |
