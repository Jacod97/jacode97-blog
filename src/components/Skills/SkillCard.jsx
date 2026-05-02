import { motion } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';
import styles from './Skills.module.css';

const SkillCard = ({ skill, index }) => {
  const Icon = SimpleIcons[skill.icon];

  return (
    <motion.div
      className={styles.skillCard}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className={styles.iconWrapper}>
        {Icon && <Icon size={40} style={{ color: skill.color }} />}
      </div>
      <h4 className={styles.skillName}>{skill.name}</h4>
      <div className={styles.levelBar}>
        <motion.div
          className={styles.levelFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
