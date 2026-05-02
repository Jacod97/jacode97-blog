# Projects

메인 페이지의 프로젝트 카드 섹션. 현재 별도 상세 페이지 없음.

## 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/AI/AIDashboard.jsx` | 프로젝트 섹션 렌더링 |
| `src/components/AI/AIDashboard.module.css` | 프로젝트 카드 스타일 |

---

## 수정 가이드

### 프로젝트 데이터 변경

파일: `src/components/AI/AIDashboard.jsx` — 18~34번 줄

```js
const projectsData = [
  {
    name: 'Real-time Object Detection',      // 프로젝트 이름
    tech: 'YOLOv8, PyTorch, TensorRT',       // 사용 기술
    desc: 'High-performance object detection system',  // 설명
  },
  {
    name: 'Semantic Segmentation',
    tech: 'DeepLabV3+, ResNet, CUDA',
    desc: 'Pixel-level image segmentation',
  },
  {
    name: 'Face Recognition System',
    tech: 'FaceNet, MTCNN, OpenCV',
    desc: 'Real-time face detection and recognition',
  },
];
```

- 프로젝트 추가: 배열에 `{ name, tech, desc }` 객체 추가
- 프로젝트 삭제: 해당 객체 제거
- 프로젝트 수정: 각 필드 값 변경

### 섹션 라벨/타이틀 변경

`src/components/AI/AIDashboard.jsx`

- 섹션 라벨 — 220번 줄: `03 / PROJECTS`
- 섹션 타이틀 — 225번 줄: `Featured Projects`

### 스타일 수정

파일: `src/components/AI/AIDashboard.module.css`

| 클래스 | 용도 |
|--------|------|
| `.projectsList` | 프로젝트 카드 컨테이너 (flex column) |
| `.projectCard` | 개별 카드 (hover 시 우측 이동 효과) |
| `.projectCard h3` | 프로젝트 이름 |
| `.tech` | 기술 스택 텍스트 (#6496ff 색상) |
| `.desc` | 프로젝트 설명 |
