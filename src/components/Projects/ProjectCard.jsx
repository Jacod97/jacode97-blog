import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <span>{project.title}</span>
        </div>
        <div className={styles.overlay}>
          <p className={styles.overlayDescription}>{project.description}</p>
          <div className={styles.links}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.tags}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
