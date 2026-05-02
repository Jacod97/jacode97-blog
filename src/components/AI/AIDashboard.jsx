import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaInfoCircle, FaRoute } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import RoadTimeline from './RoadTimeline';
import styles from './AIDashboard.module.css';

const GNB_HEIGHT = 64;

const navItems = [
  { id: 'about', icon: FaInfoCircle, title: 'About' },
  { id: 'timeline', icon: FaRoute, title: 'Timeline' },
  { id: 'projects', icon: FaCode, title: 'Projects' },
  { id: 'contact', icon: FaEnvelope, title: 'Contact' },
];

const FILTER_CATEGORIES = ['All', 'Personal', 'Professional', 'Research'];

const projectsData = [
  {
    name: 'ROUTI-AI-MLOps',
    tech: 'PyTorch, MLFlow, Optuna, Docker, PostgreSQL, MinIO, Grafana',
    desc: '자사 3D CNN 모델의 생애주기 관리를 위한 MLOps 파이프라인 프로토타입 구축',
    category: 'Professional',
    slug: 'routi-ai-mlops',
    confidential: true,
  },
  {
    name: 'ROUTI-AI-Auto Routing',
    tech: 'A* Algorithm, Reinforcement Learning, Python',
    desc: 'MEP 라우팅 자동화 — A* 알고리즘 기반 초기 경로 탐색 및 RL을 활용한 파이프 간 충돌 해소',
    category: 'Professional',
    slug: 'routi-ai-auto-routing',
    confidential: true,
  },
  {
    name: '건축부재 자율인식 AI',
    tech: 'PyTorch, OpenCV, Darknet, YOLOv4-tiny, Cosmos, Unreal Engine, MQTT',
    desc: '이미지 기반 CNN 딥러닝을 활용한 건축부재 자율인식 AI 개발 (데이터 산업 육성 지원 사업)',
    category: 'Professional',
    slug: 'building-component-ai',
    confidential: true,
  },
  {
    name: 'Presentation Agent',
    tech: 'LangChain, FAISS, RAG, TTS',
    desc: '발표 자동화 시스템 — 문서 기반 RAG와 음성 합성을 결합한 프레젠테이션 에이전트',
    category: 'Personal',
    slug: 'presentation-agent',
    confidential: false,
  },
  {
    name: 'DACON 건설공사 사고 예방',
    tech: 'LangChain, ChromaDB, Ollama, Gemma3',
    desc: '건설공사 사고 예방 및 대응책 생성 시스템 (DACON 공모전)',
    category: 'Personal',
    slug: 'dacon-construction-safety',
    confidential: false,
  },
  {
    name: 'DeepPrint',
    tech: 'YOLOv11, Gemini, Rule-based, RAG',
    desc: 'HTP 그림검사 기반 아동 심리분석 보조 시스템 — 객체 탐지와 LLM 해석 결합',
    category: 'Personal',
    slug: 'deepprint',
    confidential: false,
  },
  {
    name: '산불 발생 예측 모델',
    tech: 'Scikit-learn, XGBoost, LightGBM, SMOTE',
    desc: '기상·인구·토지 데이터를 통합한 앙상블 학습 기반 산불 발생 예측',
    category: 'Research',
    slug: 'wildfire-prediction',
    confidential: false,
  },
];

const contactData = {
  email: 'jacode6894@gmail.com',
  github: 'github.com/Jacod97',
  linkedin: 'linkedin.com/in/jacode6894',
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + GNB_HEIGHT + 100;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(ids[i]);
          return;
        }
      }
      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);

  return activeId;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const PROJECTS_PER_PAGE = 3;

const AIDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(
    () => sessionStorage.getItem('homeFilter') || 'All',
  );
  const [showAll, setShowAll] = useState(
    () => sessionStorage.getItem('homeShowAll') === 'true',
  );
  const activeSection = useScrollSpy(navItems.map((n) => n.id));
  const scrollYRef = useRef(0);
  const filterRef = useRef(activeFilter);
  const showAllRef = useRef(showAll);
  filterRef.current = activeFilter;
  showAllRef.current = showAll;

  /* ── 스크롤 위치 & 필터 상태 저장 / 복원 ── */
  useEffect(() => {
    const savedY = sessionStorage.getItem('homeScrollY');
    if (savedY) {
      const y = parseInt(savedY, 10);
      window.scrollTo(0, y);
      requestAnimationFrame(() => window.scrollTo(0, y));
    }

    const onScroll = () => { scrollYRef.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      sessionStorage.setItem('homeScrollY', String(scrollYRef.current));
      sessionStorage.setItem('homeFilter', filterRef.current);
      sessionStorage.setItem('homeShowAll', String(showAllRef.current));
    };
  }, []);

  const filteredProjects = useMemo(
    () => activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={styles.dashboard}>
      {/* ── GNB ── */}
      <motion.header
        className={styles.gnb}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.gnbContainer}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={styles.logoText}>{'Jacode97'}</span>
          </div>

          <nav className={`${styles.gnbNav} ${isMobileMenuOpen ? styles.gnbNavOpen : ''}`}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`${styles.gnbLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <item.icon className={styles.gnbIcon} />
                <span>{item.title}</span>
              </motion.button>
            ))}
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className={styles.title}>Real World와 Digital World를 연결하는</h1>
          <p className={styles.subtitle}>AI Engineer, 정재식입니다</p>
        </motion.div>
        <div className={styles.scrollIndicator}>
          <span />
        </div>
      </section>

      {/* ── About Me ── */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <motion.div className={styles.sectionLabel} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className={styles.labelLine} />
            <span>01 / ABOUT ME</span>
            <span className={styles.labelLine} />
          </motion.div>

          <div className={styles.aboutGrid}>
            <motion.div
              className={styles.aboutPhoto}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.photoFrame}>
                {/* 사진을 넣으려면: public/images/profile.jpg 등을 추가 후 src 변경 */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/profile.jpeg`}
                  alt="Profile"
                  className={styles.photoImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.photoPlaceholder}>
                  <FaUser size={48} />
                  <span>Your Photo</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.aboutText}
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Who Am I?</h2>
              <p className={styles.aboutDesc}>
                저는 건설 산업의 복잡한 업무 프로세스를 자동화하기 위해 설계 최적화, 실시간 의사 결정 지원, 비용 및 공기 단축 등을
                수행하는 AI기반 디지털 트윈을 구축하기 위해 노력하고 있는 AI Engineer입니다.
                저는 원래 토목공학을 전공해 고속도로 및 일반도로를 설계하는 엔지니어로 커리어를 시작했습니다. 
                제가 느낀 건설 산업은 다른 분야에 비해 기술의 발전 속도가 더딘 편이라고 느겼으나, 그만큼 아직 기술적 도약과 가치 창출의
                여지가 많다고 판단하여 현재는 같은 삽업에서 AI Engineer라는 다른 포지션으로 역할을 수행하고 있습니다.
              </p>
              <p className={styles.aboutDesc}>
                저는 학창 시절부터 수학을 좋아하였고 이후 전공 공부를 하며 역학까지 제 관심사로 자리잡았습니다.
                이러한 이유때문인지 인공지능과 3차원 물리 시스템이 어렵게 느껴지지만 열심히 파고들 수 있는 동기부여가 
                되고 있습니다.
              </p>
              <p className={styles.aboutDesc}>
                최근에는 현실 세계의 문제를 해소하는 Physical AI에 관심을 두고 있으며,
                3D Computer Vision과 Path Planning을 위한 강화학습, 휴리스틱 알고리즘에 대해 탐구하고
                이를 실제 산업에 적용할 방안을 모색하고 있습니다.
              </p>
              <Link to="/about" className={styles.learnMoreBtn}>
                Resume →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <RoadTimeline />

      {/* ── Projects ── */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className={styles.labelLine} />
            <span>03 / PROJECTS</span>
            <span className={styles.labelLine} />
          </motion.div>

          <motion.h2 className={styles.sectionTitle} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Featured Projects
          </motion.h2>

          {/* Filter Tabs */}
          <motion.div className={styles.filterBar} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className={styles.projectsList}>
            <AnimatePresence mode="popLayout">
              {(showAll ? filteredProjects : filteredProjects.slice(0, PROJECTS_PER_PAGE)).map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link to={`/projects/${project.slug}`} className={styles.cardLink}>
                    <div className={styles.projectCard}>
                      <div className={styles.cardTop}>
                        <h3>{project.name}</h3>
                        <div className={styles.cardTags}>
                          {project.confidential && (
                            <span className={styles.confidentialTag}>대외비</span>
                          )}
                          <span className={styles.categoryTag}>{project.category}</span>
                        </div>
                      </div>
                      <p className={styles.tech}>{project.tech}</p>
                      <p className={styles.desc}>{project.desc}</p>
                      <span className={styles.viewDetail}>View Details →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <p className={styles.emptyState}>No projects in this category yet.</p>
            )}
          </div>

          {filteredProjects.length > PROJECTS_PER_PAGE && (
            <button
              className={styles.showMoreBtn}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : `Show More (${filteredProjects.length - PROJECTS_PER_PAGE})`}
            </button>
          )}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className={styles.labelLine} />
            <span>04 / CONTACT</span>
            <span className={styles.labelLine} />
          </motion.div>

          <motion.h2 className={styles.sectionTitle} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Get In Touch
          </motion.h2>

          <div className={styles.contactList}>
            {[
              { label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
              { label: 'GitHub', value: contactData.github, href: `https://${contactData.github}` },
              { label: 'LinkedIn', value: contactData.linkedin, href: `https://${contactData.linkedin}` },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.contactItem}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className={styles.contactLabel}>{item.label}</span>
                <a href={item.href} target={item.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer">
                  {item.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span>Neural Network Visualization</span>
        <span>·</span>
        <span>AI Portfolio</span>
        <span>·</span>
        <span>2024</span>
      </footer>
    </div>
  );
};

export default AIDashboard;
