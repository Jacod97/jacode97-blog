import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './HUDDashboard.module.css';

const HUDDashboard = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  const menuItems = [
    {
      id: 'profile',
      icon: FaUser,
      label: 'PROFILE',
      color: '#00ff88',
      content: {
        title: 'PROFILE DATA',
        data: [
          { label: 'NAME', value: 'Your Name' },
          { label: 'ROLE', value: 'Full Stack Developer' },
          { label: 'LOCATION', value: 'Seoul, Korea' },
          { label: 'STATUS', value: 'Available for Work' },
          { label: 'EXPERIENCE', value: '3+ Years' },
        ]
      }
    },
    {
      id: 'projects',
      icon: FaCode,
      label: 'PROJECTS',
      color: '#00d9ff',
      content: {
        title: 'PROJECT DATABASE',
        data: [
          { label: 'E-Commerce Platform', value: 'React, Node.js, MongoDB' },
          { label: 'Task Management App', value: 'React, Firebase' },
          { label: 'Weather Dashboard', value: 'TypeScript, Chart.js' },
          { label: 'Portfolio Generator', value: 'Next.js, Tailwind' },
          { label: 'Chat Application', value: 'Socket.io, Redis' },
        ]
      }
    },
    {
      id: 'skills',
      icon: FaBriefcase,
      label: 'SKILLS',
      color: '#ff00ff',
      content: {
        title: 'SKILL MATRIX',
        data: [
          { label: 'React', value: '████████░░ 90%' },
          { label: 'JavaScript', value: '█████████░ 95%' },
          { label: 'TypeScript', value: '████████░░ 85%' },
          { label: 'Node.js', value: '████████░░ 85%' },
          { label: 'Python', value: '███████░░░ 80%' },
        ]
      }
    },
    {
      id: 'contact',
      icon: FaEnvelope,
      label: 'CONTACT',
      color: '#ffff00',
      content: {
        title: 'CONTACT CHANNELS',
        data: [
          { label: 'EMAIL', value: 'your.email@example.com' },
          { label: 'GITHUB', value: 'github.com/yourusername' },
          { label: 'LINKEDIN', value: 'linkedin.com/in/yourusername' },
          { label: 'TWITTER', value: '@yourusername' },
        ]
      }
    }
  ];

  return (
    <div className={styles.dashboard}>
      {/* 배경 그리드 */}
      <div className={styles.gridBackground}></div>

      {/* 중앙 타이틀 */}
      <motion.div
        className={styles.centerTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.glitchText}>PORTFOLIO_SYSTEM</h1>
        <p className={styles.subtitle}>[ ACCESS GRANTED ]</p>
      </motion.div>

      {/* 메뉴 버튼들 */}
      <div className={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`${styles.menuButton} ${selectedPanel === item.id ? styles.active : ''}`}
            onClick={() => setSelectedPanel(selectedPanel === item.id ? null : item.id)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${item.color}` }}
            style={{ borderColor: item.color }}
          >
            <item.icon className={styles.icon} style={{ color: item.color }} />
            <span className={styles.label} style={{ color: item.color }}>{item.label}</span>
            <div className={styles.cornerTL} style={{ borderColor: item.color }}></div>
            <div className={styles.cornerTR} style={{ borderColor: item.color }}></div>
            <div className={styles.cornerBL} style={{ borderColor: item.color }}></div>
            <div className={styles.cornerBR} style={{ borderColor: item.color }}></div>
          </motion.button>
        ))}
      </div>

      {/* 선택된 패널 */}
      {selectedPanel && (
        <motion.div
          className={styles.infoPanel}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.panelHeader}>
            <h2>{menuItems.find(m => m.id === selectedPanel)?.content.title}</h2>
            <button className={styles.closeBtn} onClick={() => setSelectedPanel(null)}>
              ✕
            </button>
          </div>
          <div className={styles.panelContent}>
            {menuItems.find(m => m.id === selectedPanel)?.content.data.map((item, i) => (
              <motion.div
                key={i}
                className={styles.dataRow}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className={styles.dataLabel}>{item.label}</span>
                <span className={styles.dataValue}>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* HUD 장식 */}
      <div className={styles.hudDecor}>
        <div className={styles.cornerDecorTL}></div>
        <div className={styles.cornerDecorTR}></div>
        <div className={styles.cornerDecorBL}></div>
        <div className={styles.cornerDecorBR}></div>
      </div>

      {/* 하단 정보 */}
      <div className={styles.bottomInfo}>
        <span>SYSTEM_STATUS: ONLINE</span>
        <span>SECURITY_LEVEL: PUBLIC</span>
        <span>UPTIME: 99.9%</span>
      </div>
    </div>
  );
};

export default HUDDashboard;
