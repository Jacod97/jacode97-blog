import { useState, useEffect } from 'react';
import styles from './SimpleScanEffect.module.css';

const SimpleScanEffect = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3초
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress >= 1) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 500);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={styles.scanContainer}>
      {/* 배경 그리드 */}
      <div className={styles.gridBackground}></div>

      {/* 중앙 타겟 */}
      <div className={styles.targetArea}>
        {/* 회전하는 외부 링 */}
        <div className={styles.outerRing}></div>
        <div className={styles.middleRing}></div>
        <div className={styles.innerRing}></div>

        {/* 스캔 라인 */}
        <div
          className={styles.scanLine}
          style={{ top: `${progress * 100}%` }}
        ></div>

        {/* 인물 실루엣 */}
        <div className={styles.silhouette}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
          <div className={styles.armLeft}></div>
          <div className={styles.armRight}></div>
          <div className={styles.legLeft}></div>
          <div className={styles.legRight}></div>
        </div>
      </div>

      {/* HUD 오버레이 */}
      <div className={styles.hudOverlay}>
        {/* 프로그레스 바 */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
          <div className={styles.statusText}>
            {progress < 0.3 && '[ INITIALIZING SCAN... ]'}
            {progress >= 0.3 && progress < 0.6 && '[ ANALYZING DATA... ]'}
            {progress >= 0.6 && progress < 0.9 && '[ PROCESSING PROFILE... ]'}
            {progress >= 0.9 && '[ SCAN COMPLETE ]'}
          </div>
          <div className={styles.percentage}>
            {Math.floor(progress * 100)}%
          </div>
        </div>
      </div>

      {/* 코너 장식 */}
      <div className={styles.cornerTL}></div>
      <div className={styles.cornerTR}></div>
      <div className={styles.cornerBL}></div>
      <div className={styles.cornerBR}></div>

      {/* 파티클 효과 */}
      <div className={styles.particles}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SimpleScanEffect;
