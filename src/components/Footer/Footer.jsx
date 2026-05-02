import { FaHeart } from 'react-icons/fa';
import { smoothScrollTo } from '../../utils/smoothScroll';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.logo}>{'<YN />'}</h3>
            <p className={styles.tagline}>
              Building the future, one line of code at a time
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.quickLinks}>
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => smoothScrollTo(link.id)}
                  className={styles.link}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <p className={styles.email}>your.email@example.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FaHeart className={styles.heart} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
