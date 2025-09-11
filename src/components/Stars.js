import { useState, useEffect } from 'react';

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return reducedMotion;
}

export default function Stars({ theme }) {
  const reduce = usePrefersReducedMotion();
  
  if (theme !== 'dark') return null;
  
  return (
    <div 
      className="stars-container"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 1
      }}
      aria-hidden="true"
    >
      {/* 작은 별들 */}
      {[
        { top: '10%', left: '15%', delay: '0s', size: '3px' },
        { top: '25%', left: '80%', delay: '0.5s', size: '2px' },
        { top: '60%', left: '20%', delay: '1s', size: '3px' },
        { top: '40%', left: '70%', delay: '1.5s', size: '2px' },
        { top: '80%', left: '90%', delay: '0.8s', size: '3px' },
        { top: '15%', left: '50%', delay: '2s', size: '2px' },
        { top: '70%', left: '45%', delay: '1.2s', size: '3px' },
        { top: '35%', left: '25%', delay: '0.3s', size: '2px' },
        { top: '55%', left: '85%', delay: '1.8s', size: '3px' },
        { top: '20%', left: '35%', delay: '0.7s', size: '2px' },
        { top: '45%', left: '60%', delay: '0.2s', size: '2px' },
        { top: '85%', left: '30%', delay: '1.4s', size: '3px' },
        { top: '5%', left: '75%', delay: '0.9s', size: '2px' },
        { top: '65%', left: '10%', delay: '1.7s', size: '2px' },
        { top: '30%', left: '95%', delay: '0.6s', size: '3px' },
        { top: '75%', left: '65%', delay: '1.1s', size: '2px' },
        { top: '12%', left: '40%', delay: '1.9s', size: '2px' },
        { top: '50%', left: '5%', delay: '0.4s', size: '3px' },
        { top: '90%', left: '55%', delay: '1.6s', size: '2px' },
        { top: '8%', left: '85%', delay: '0.1s', size: '2px' },
        { top: '18%', left: '65%', delay: '0.3s', size: '3px' },
        { top: '42%', left: '15%', delay: '1.3s', size: '2px' },
        { top: '58%', left: '95%', delay: '0.9s', size: '2px' },
        { top: '28%', left: '45%', delay: '1.7s', size: '3px' },
        { top: '78%', left: '20%', delay: '0.6s', size: '2px' },
        { top: '38%', left: '90%', delay: '1.1s', size: '2px' },
        { top: '68%', left: '75%', delay: '0.8s', size: '3px' },
        { top: '22%', left: '55%', delay: '1.5s', size: '2px' },
        { top: '52%', left: '25%', delay: '0.2s', size: '2px' },
        { top: '82%', left: '70%', delay: '1.9s', size: '3px' },
        { top: '32%', left: '10%', delay: '0.5s', size: '2px' },
        { top: '62%', left: '85%', delay: '1.2s', size: '2px' },
        { top: '88%', left: '40%', delay: '0.7s', size: '3px' },
        { top: '14%', left: '30%', delay: '1.6s', size: '2px' },
        { top: '48%', left: '80%', delay: '0.4s', size: '2px' }
      ].map((star) => (
        <div
          key={`star-${star.top}-${star.left}`}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: 'white',
            borderRadius: '50%',
            opacity: 0.9,
            animation: reduce ? 'none' : `twinkle 3s ease-in-out infinite ${star.delay}`,
            boxShadow: `0 0 6px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}
    </div>
  );
}