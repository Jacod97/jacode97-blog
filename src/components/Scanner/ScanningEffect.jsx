import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// 스캔 라인
const ScanLine = ({ progress }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2 + progress * 4, 0]}>
      <torusGeometry args={[2, 0.02, 16, 100]} />
      <meshBasicMaterial color="#00ff88" />
    </mesh>
  );
};

// 회전하는 드론/스캐너 링
const ScannerRing = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 외부 링 */}
      <mesh>
        <torusGeometry args={[3, 0.05, 16, 32]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.8} />
      </mesh>

      {/* 내부 회전 링 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 16, 32]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.6} />
      </mesh>

      {/* 스캐너 점들 */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 3,
            0,
            Math.sin((i * Math.PI) / 2) * 3
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#00ff88" />
        </mesh>
      ))}
    </group>
  );
};

// 중앙 인물 실루엣 (간단한 형태)
const PersonSilhouette = () => {
  return (
    <group>
      {/* 머리 */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>

      {/* 몸통 */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.3]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>

      {/* 팔 */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>

      {/* 다리 */}
      <mesh position={[-0.2, -0.5, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.2, -0.5, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// 3D 씬
const ScanScene = ({ progress }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <PersonSilhouette />
      <ScannerRing />
      <ScanLine progress={progress} />

      {/* 파티클 효과 */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.5} />
        </mesh>
      ))}
    </>
  );
};

const ScanningEffect = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3초 스캔
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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#0a0e27',
      zIndex: 9999
    }}>
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ScanScene progress={progress} />
      </Canvas>

      {/* HUD 오버레이 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        width: '80%',
        maxWidth: '600px'
      }}>
        {/* 스캔 프로그레스 바 */}
        <div style={{
          width: '100%',
          height: '4px',
          background: 'rgba(0, 255, 136, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <div style={{
            width: `${progress * 100}%`,
            height: '100%',
            background: '#00ff88',
            boxShadow: '0 0 10px #00ff88',
            transition: 'width 0.1s ease'
          }} />
        </div>

        {/* 스캔 텍스트 */}
        <div style={{
          fontFamily: 'monospace',
          color: '#00ff88',
          fontSize: '1.2rem',
          textAlign: 'center',
          textShadow: '0 0 10px #00ff88'
        }}>
          {progress < 0.3 && '[ INITIALIZING SCAN... ]'}
          {progress >= 0.3 && progress < 0.6 && '[ ANALYZING DATA... ]'}
          {progress >= 0.6 && progress < 0.9 && '[ PROCESSING PROFILE... ]'}
          {progress >= 0.9 && '[ SCAN COMPLETE ]'}
        </div>

        {/* 퍼센트 */}
        <div style={{
          fontFamily: 'monospace',
          color: '#00d9ff',
          fontSize: '2rem',
          textAlign: 'center',
          marginTop: '10px',
          fontWeight: 'bold'
        }}>
          {Math.floor(progress * 100)}%
        </div>
      </div>

      {/* 코너 장식 */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '60px',
        height: '60px',
        borderTop: '2px solid #00ff88',
        borderLeft: '2px solid #00ff88',
        opacity: 0.5
      }} />
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderTop: '2px solid #00ff88',
        borderRight: '2px solid #00ff88',
        opacity: 0.5
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        width: '60px',
        height: '60px',
        borderBottom: '2px solid #00ff88',
        borderLeft: '2px solid #00ff88',
        opacity: 0.5
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderBottom: '2px solid #00ff88',
        borderRight: '2px solid #00ff88',
        opacity: 0.5
      }} />
    </div>
  );
};

export default ScanningEffect;
