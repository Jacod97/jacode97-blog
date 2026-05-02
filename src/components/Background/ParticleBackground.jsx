import { useEffect, useRef } from 'react';
import { sineWaveMotion, getRepulsionVector, getDistance, randomInRange } from '../../utils/mathUtils';
import styles from './Background.module.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particleCount = window.innerWidth < 768 ? 50 : 100; // 모바일에서 적게

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = window.innerWidth < 768 ? 50 : 100;
      initParticles();
    };

    // 파티클 초기화
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: randomInRange(0, canvas.width),
          y: randomInRange(0, canvas.height),
          baseX: 0,
          baseY: 0,
          vx: randomInRange(-0.5, 0.5),
          vy: randomInRange(-0.5, 0.5),
          radius: randomInRange(1, 3),
          opacity: randomInRange(0.3, 0.8)
        });
      }
      // baseX, baseY를 초기 위치로 설정
      particlesRef.current.forEach(p => {
        p.baseX = p.x;
        p.baseY = p.y;
      });
    };

    // 마우스 이벤트
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // 애니메이션
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 파티클 업데이트 및 그리기
      particlesRef.current.forEach((particle, i) => {
        // 사인파 운동
        const wave = sineWaveMotion(particle.baseX, particle.baseY, time, 30, 0.0005);

        // 마우스 반발력
        let repulsion = { x: 0, y: 0 };
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          repulsion = getRepulsionVector(
            { x: wave.x, y: wave.y },
            mouseRef.current,
            8000
          );
        }

        // 위치 업데이트
        particle.x = wave.x + repulsion.x;
        particle.y = wave.y + repulsion.y;

        // baseX, baseY도 천천히 이동
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        // 경계 반사
        if (particle.baseX < 0 || particle.baseX > canvas.width) particle.vx *= -1;
        if (particle.baseY < 0 || particle.baseY > canvas.height) particle.vy *= -1;

        // 파티클 그리기
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${particle.opacity})`;
        ctx.fill();

        // 연결선 그리기
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const distance = getDistance(particle.x, particle.y, otherParticle.x, otherParticle.y);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
};

export default ParticleBackground;
