import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './TimelineDetail.module.css';

const experience = [
  {
    id: 'U2',
    period: '2023.09 – 2024.10',
    org: '(주)삼보기술단',
    role: '도로사업본부',
    current: false,
    rows: [
      { label: '직무', value: '도로 설계 엔지니어' },
      { label: '주요 업무', value: '고속도로 및 일반국도 도로 설계, 노선 선정, 종횡단 설계' },
      { label: '사용 도구', value: 'AutoCAD, Civil3D, MIDAS, 도로설계 프로그램' },
      { label: '성과', value: '— 추가 예정 —' },
    ],
  },
  {
    id: 'U4',
    period: '2025.05 – 2025.07',
    org: 'WisePlus',
    role: 'R&D팀 인턴',
    current: false,
    rows: [
      { label: '직무', value: 'AI R&D 인턴' },
      { label: '주요 업무', value: '— 추가 예정 —' },
      { label: '기술 스택', value: '— 추가 예정 —' },
      { label: '성과', value: '— 추가 예정 —' },
    ],
  },
  {
    id: 'U5',
    period: '2025.09 – 현재',
    org: 'SLZ Inc.',
    role: 'AI BIM 팀',
    current: true,
    rows: [
      { label: '직무', value: 'AI Engineer' },
      { label: '주요 업무', value: 'AI 기반 BIM 솔루션 개발, 3D 모델 자동화' },
      { label: '기술 스택', value: '— 추가 예정 —' },
      { label: '성과', value: '— 추가 예정 —' },
    ],
  },
];

const education = [
  {
    id: 'U1',
    period: '2015.03 – 2022.08',
    org: '동아대학교',
    role: '토목공학과 학사',
    current: false,
    rows: [
      { label: '전공', value: '토목공학' },
      { label: '학위', value: '공학사' },
      { label: '주요 과목', value: '구조역학, 토질역학, 수리학, 측량학, 도로공학, 철근콘크리트공학' },
      { label: '활동', value: '— 추가 예정 —' },
    ],
  },
  {
    id: 'U3',
    period: '2024.12 – 2025.06',
    org: 'Wanted PotenUP',
    role: 'AI Agent 개발 트랙',
    current: false,
    rows: [
      { label: '과정', value: 'AI Agent 개발 부트캠프' },
      { label: '주요 학습', value: 'LLM 기반 Agent 설계, RAG, 프롬프트 엔지니어링, LangChain' },
      { label: '프로젝트', value: '— 추가 예정 —' },
      { label: '기술 스택', value: 'Python, LangChain, OpenAI API, FastAPI' },
    ],
  },
  {
    id: 'U6',
    period: '2026.03 – 현재',
    org: '서강대학교 인공지능융합대학원',
    role: '인공지능학과 석사 재학중',
    current: true,
    rows: [
      { label: '전공', value: '인공지능학과' },
      { label: '연구 분야', value: '3D Computer Vision, Physical AI' },
      { label: '주요 과목', value: '— 추가 예정 —' },
      { label: '관심 주제', value: 'Path Planning, 강화학습, 휴리스틱 알고리즘' },
    ],
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const EntryCard = ({ item, index }) => (
  <motion.div
    className={`${styles.entry} ${item.current ? styles.entryCurrent : ''}`}
    variants={fade}
    custom={index}
    initial="hidden"
    animate="visible"
  >
    <div className={styles.entryHeader}>
      <span className={styles.entryId}>{item.id}</span>
      <span className={styles.entryPeriod}>{item.period}</span>
      {item.current && <span className={styles.currentBadge}>현재 진행중</span>}
    </div>

    <div className={styles.entryTitleRow}>
      <h3 className={styles.entryOrg}>{item.org}</h3>
      <span className={styles.entryRole}>{item.role}</span>
    </div>

    <table className={styles.detailTable}>
      <tbody>
        {item.rows.map((row, j) => (
          <tr key={j}>
            <th>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

const TimelineDetail = () => {
  return (
    <div className={styles.page}>
      <nav className={styles.topNav}>
        <Link to="/" className={styles.backBtn}>← Back</Link>
        <h1 className={styles.pageTitle}>Timeline</h1>
      </nav>

      <div className={styles.scrollArea}>
        <div className={styles.twoColumn}>
          {/* ── Left: Experience ── */}
          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <span className={styles.dotWork} />
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            <div className={styles.cardList}>
              {experience.map((item, i) => (
                <EntryCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right: Education ── */}
          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <span className={styles.dotEdu} />
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            <div className={styles.cardList}>
              {education.map((item, i) => (
                <EntryCard key={item.id} item={item} index={i + experience.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineDetail;
