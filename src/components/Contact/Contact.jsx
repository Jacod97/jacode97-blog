import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const contacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Your Name',
      link: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      value: '@yourusername',
      link: 'https://twitter.com/yourusername'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>
            프로젝트 협업이나 기타 문의사항이 있으시면 연락주세요
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <contact.icon size={32} />
              </div>
              <h3 className={styles.contactLabel}>{contact.label}</h3>
              <p className={styles.contactValue}>{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className={styles.ctaText}>
            함께 멋진 것을 만들어봅시다!
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            이메일 보내기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
