import { motion } from 'framer-motion';
import { skills } from '../../data/skillsData';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>
            제가 사용하는 기술 스택들입니다
          </p>
        </motion.div>

        <div className={styles.skillsContainer}>
          {/* Frontend */}
          <motion.div
            className={styles.category}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.categoryTitle}>Frontend</h3>
            <div className={styles.skillsGrid}>
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className={styles.category}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.categoryTitle}>Backend</h3>
            <div className={styles.skillsGrid}>
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className={styles.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.categoryTitle}>Tools & Others</h3>
            <div className={styles.skillsGrid}>
              {skills.tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
