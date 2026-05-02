import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>About Me</h2>

          <div className={styles.grid}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className={styles.imagePlaceholder}>
                <span>Your Photo</span>
              </div>
              <div className={styles.imageGlow}></div>
            </motion.div>

            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className={styles.name}>Your Name</h3>
              <p className={styles.role}>Full Stack Developer</p>

              <div className={styles.description}>
                <p>
                  안녕하세요! 저는 수학적 사고와 코드를 결합하여 문제를 해결하는 것을 즐기는
                  풀스택 개발자입니다.
                </p>
                <p>
                  React, Node.js, TypeScript를 주로 사용하며, 사용자 경험을 최우선으로
                  생각하는 직관적이고 아름다운 웹 애플리케이션을 만듭니다.
                </p>
                <p>
                  끊임없이 새로운 기술을 학습하고, 복잡한 문제를 단순하고 우아한 솔루션으로
                  풀어내는 것에 열정을 가지고 있습니다.
                </p>
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
