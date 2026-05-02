import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// 개별 3D 기하학 도형
const FloatingGeometry = ({ geometry, position, rotationSpeed, color, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];

      // 부드러운 떠다니는 움직임
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={geometry} />
      <meshBasicMaterial color={color} wireframe={true} transparent opacity={0.6} />
    </mesh>
  );
};

// 여러 3D 도형들을 생성
const GeometricScene = () => {
  const geometries = useMemo(() => {
    const shapes = [];
    const colors = ['#00ff88', '#00d9ff', '#ff00ff', '#ffff00'];

    // 큐브들
    for (let i = 0; i < 3; i++) {
      shapes.push({
        geometry: new THREE.BoxGeometry(1, 1, 1),
        position: [Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * -10 - 5],
        rotationSpeed: [
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 1.5 + 0.5
      });
    }

    // 구들
    for (let i = 0; i < 2; i++) {
      shapes.push({
        geometry: new THREE.SphereGeometry(0.8, 16, 16),
        position: [Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * -10 - 5],
        rotationSpeed: [
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 1.5 + 0.5
      });
    }

    // 토러스 (도넛)
    for (let i = 0; i < 2; i++) {
      shapes.push({
        geometry: new THREE.TorusGeometry(0.7, 0.3, 16, 32),
        position: [Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * -10 - 5],
        rotationSpeed: [
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 1.5 + 0.5
      });
    }

    // 옥타헤드론
    for (let i = 0; i < 3; i++) {
      shapes.push({
        geometry: new THREE.OctahedronGeometry(0.8),
        position: [Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * -10 - 5],
        rotationSpeed: [
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 1.5 + 0.5
      });
    }

    // 테트라헤드론
    for (let i = 0; i < 2; i++) {
      shapes.push({
        geometry: new THREE.TetrahedronGeometry(0.8),
        position: [Math.random() * 20 - 10, Math.random() * 10 - 5, Math.random() * -10 - 5],
        rotationSpeed: [
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005,
          Math.random() * 0.01 - 0.005
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 1.5 + 0.5
      });
    }

    return shapes;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      {geometries.map((shape, index) => (
        <FloatingGeometry key={index} {...shape} />
      ))}
    </>
  );
};

const GeometricBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <GeometricScene />
      </Canvas>
    </div>
  );
};

export default GeometricBackground;
