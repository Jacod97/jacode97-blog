import styles from './Background.module.css';

const GridBackground = () => {
  return (
    <div className={styles.gridBackground}>
      <div className={styles.gridPattern}></div>
    </div>
  );
};

export default GridBackground;
