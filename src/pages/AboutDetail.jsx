import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBlog, FaEnvelope, FaPhone, FaBirthdayCake } from 'react-icons/fa';
import {
  SiPython, SiPytorch, SiOpencv,
  SiOpenaigym, SiScikitlearn, SiFastapi,
  SiPostgresql, SiSqlite, SiDocker, SiMlflow,
  SiGit, SiLinux,
} from 'react-icons/si';
import styles from './AboutDetail.module.css';

const profile = {
  name: '정재식',
  nameEn: 'Jaesik Jung',
  birth: '1997.02.16',
  email: 'your.email@example.com',
  phone: '010-0000-0000',
  links: [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { icon: FaBlog, label: 'Blog', href: 'https://yourblog.com' },
  ],
};

const experience = [
  {
    period: '2025.09 – 현재',
    org: 'SLZ Inc.',
    role: 'AI BIM 팀',
    details: ['AI 기반 BIM 솔루션 개발'],
  },
  {
    period: '2025.05 – 2025.07',
    org: 'WisePlus',
    role: 'R&D팀 인턴',
    details: ['R&D 연구 개발'],
  },
  {
    period: '2023.09 – 2024.10',
    org: '(주)삼보기술단',
    role: '도로사업본부',
    details: ['도로 설계 및 사업 관리'],
  },
];

const education = [
  {
    period: '2026.03 – 현재',
    org: '서강대학교 인공지능융합대학원',
    role: '인공지능학과 석사 재학중',
  },
  {
    period: '2024.12 – 2025.06',
    org: 'Wanted PotenUP',
    role: 'AI Agent 개발 트랙 수료',
  },
  {
    period: '2015.03 – 2022.08',
    org: '동아대학교',
    role: '토목공학과 학사 졸업',
  },
];

const skills = [
  { icon: SiPython, name: 'Python' },
  { icon: SiPytorch, name: 'PyTorch' },
  { icon: SiOpencv, name: 'OpenCV' },
  { icon: SiOpenaigym, name: 'Gymnasium' },
  { icon: SiScikitlearn, name: 'Scikit-learn' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiSqlite, name: 'SQLite' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiMlflow, name: 'MLFlow' },
  { icon: SiGit, name: 'Git' },
  { icon: SiLinux, name: 'Linux' },
];

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const AboutDetail = () => {
  return (
    <div className={styles.page}>
      <nav className={styles.topNav}>
        <Link to="/" className={styles.backBtn}>← Back</Link>
        <h1 className={styles.pageTitle}>Resume</h1>
      </nav>

      <div className={styles.content}>
      <motion.div className={styles.inner} variants={fade} initial="hidden" animate="visible">
        {/* Profile */}
        <div className={styles.profileSection}>
          <h2 className={styles.name}>{profile.name}</h2>
          <span className={styles.nameEn}>{profile.nameEn}</span>
        </div>

        {/* Information */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Information</h3>
          <div className={styles.infoColumn}>
            <div className={styles.infoItem}>
              <FaBirthdayCake className={styles.contactIcon} />
              <span className={styles.infoValue}>{profile.birth}</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span className={styles.infoValue}>{profile.email}</span>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.contactIcon} />
              <span className={styles.infoValue}>{profile.phone}</span>
            </div>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                <link.icon className={styles.contactIcon} />
                <span className={styles.infoValue}>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <skill.icon className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          {experience.map((item) => (
            <div key={item.period} className={styles.entry}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.org}>{item.org}</span>
              <span className={styles.entryRole}>{item.role}</span>
              {item.details && (
                <ul className={styles.detailList}>
                  {item.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Education</h3>
          {education.map((item) => (
            <div key={item.period} className={styles.entry}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.org}>{item.org}</span>
              <span className={styles.entryRole}>{item.role}</span>
            </div>
          ))}
        </div>

        {/* Download */}
        <a href="/resume.pdf" download className={styles.downloadBtn}>
          Download PDF ↓
        </a>
      </motion.div>
      </div>
    </div>
  );
};

export default AboutDetail;
