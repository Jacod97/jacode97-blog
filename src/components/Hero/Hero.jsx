import { motion } from 'framer-motion';
import { smoothScrollTo } from '../../utils/smoothScroll';
import styles from './Hero.module.css';

const Hero = () => {
  const mathFormulas = [
    "f(x) = passion × skills + ∞ curiosity",
    "lim(learning → ∞) = growth",
    "∫ code dx = innovation"
  ];

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className={styles.geometricShape}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Name
        </motion.h1>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer & Math Enthusiast
        </motion.h2>

        <motion.p
          className={styles.mathFormula}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {mathFormulas[0]}
        </motion.p>

        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            className={styles.primaryBtn}
            onClick={() => smoothScrollTo('projects')}
          >
            프로젝트 보기
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => smoothScrollTo('contact')}
          >
            연락하기
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => smoothScrollTo('about')}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>스크롤하세요</p>
      </motion.div>
    </section>
  );
};

export default Hero;
