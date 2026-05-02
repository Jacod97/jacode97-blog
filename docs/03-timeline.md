# Timeline

메인 페이지의 PCB 타임라인 섹션 + Learn More 클릭 시 이동하는 상세 페이지(`/timeline`).

## 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/AI/PathfindingTimeline.jsx` | 메인 PCB 타임라인 (6칩 3×2 스네이크) |
| `src/components/AI/PathfindingTimeline.module.css` | PCB 타임라인 스타일 |
| `src/pages/TimelineDetail.jsx` | 상세 페이지 (세로 타임라인) |
| `src/pages/TimelineDetail.module.css` | 상세 페이지 스타일 |

---

## 메인 PCB 타임라인 수정

파일: `src/components/AI/PathfindingTimeline.jsx`

### 타임라인 항목 변경 — 6~13번 줄

```js
const timelineData = [
  { id: 'U1', year: '2015–2022', title: '동아대학교', desc: '토목공학과' },
  { id: 'U2', year: '2023–2024', title: '삼보기술단', desc: '도로사업본부' },
  { id: 'U3', year: '2024–2025', title: 'Wanted PotenUP', desc: 'AI Agent 개발' },
  { id: 'U4', year: '2025', title: 'WisePlus', desc: 'R&D팀 인턴' },
  { id: 'U5', year: '2025–', title: 'SLZ Inc.', desc: 'AI BIM 팀' },
  { id: 'U6', year: '2026–', title: '서강대 대학원', desc: 'AI 석사' },
];
```

- `id`: 칩 식별자 (U1~U6)
- `year`: 연도 표시
- `title`: 기관명
- `desc`: 역할/전공

### 칩 배치 (CSS)

파일: `src/components/AI/PathfindingTimeline.module.css`

```
Row 1: chipPos0 (left 5%,  top 8%)  → chipPos1 (left 55%, top 8%)
Row 2: chipPos3 (left 5%,  top 36%) ← chipPos2 (left 55%, top 36%)
Row 3: chipPos4 (left 5%,  top 64%) → chipPos5 (left 55%, top 64%)
```

칩 위치를 변경하려면 `.chipPos0` ~ `.chipPos5`의 `left`, `top` 값 수정.

### SVG 트레이스 경로

`PathfindingTimeline.jsx` — TRACE_PATHS 배열 (21~27번 줄)

칩 위치를 변경하면 트레이스 경로(SVG path)도 함께 조정 필요.

---

## 상세 페이지 (`/timeline`) 수정

파일: `src/pages/TimelineDetail.jsx`

### 이력 항목 변경 — 5~60번 줄

```js
const timeline = [
  {
    period: '2015.03 – 2022.08',    // 기간
    org: '동아대학교',                // 기관명
    role: '토목공학과 학사',          // 역할
    type: 'edu',                     // 'edu' 또는 'work' (범례 색상 결정)
    details: [                       // 상세 내용 (여러 줄 추가 가능)
      '토목공학 전공 졸업',
    ],
  },
  // ...
];
```

- `type: 'work'` → 파란 점 (업무 경력)
- `type: 'edu'` → 초록 점 (교육/학력)
- `details` 배열에 항목을 추가하면 세부 내용이 늘어남

### 스타일 수정

파일: `src/pages/TimelineDetail.module.css`

| 클래스 | 용도 |
|--------|------|
| `.line` | 중앙 세로 라인 |
| `.dotWork` | 업무 경력 점 (파란색) |
| `.dotEdu` | 교육 점 (초록색) |
| `.card` | 개별 이력 카드 |
| `.entry`, `.entryLeft`, `.entryRight` | 좌우 교차 배치 |
