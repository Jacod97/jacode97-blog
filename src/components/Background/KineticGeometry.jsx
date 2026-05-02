import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

// 큰 메인 3D 도형 (마우스 인터랙션)
const MainGeometry = ({ mousePosition }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // 마우스 위치에 따라 회전
      groupRef.current.rotation.y = mousePosition.x * 0.5;
      groupRef.current.rotation.x = -mousePosition.y * 0.5;

      // 자동 회전도 추가
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* 중앙의 큰 도형 - 복잡한 기하학 */}
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#00ff88" wireframe={true} transparent opacity={0.3} />
      </mesh>

      {/* 내부 도형 */}
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#00d9ff" wireframe={true} transparent opacity={0.4} />
      </mesh>

      {/* 가장 내부 도형 */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ff00ff" wireframe={true} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

// 떠다니는 작은 기하학 도형들
const FloatingShape = ({ position, shape, color, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed.x;
      meshRef.current.rotation.y += speed.y;
      meshRef.current.rotation.z += speed.z;

      // 웨이브 모션
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 2;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 1.5;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
      case 'sphere':
        return <sphereGeometry args={[0.4, 12, 12]} />;
      case 'torus':
        return <torusGeometry args={[0.3, 0.15, 8, 16]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.4]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[0.4]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.3, 0.1, 32, 8]} />;
      default:
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshBasicMaterial color={color} wireframe={true} transparent opacity={0.5} />
    </mesh>
  );
};

// 연결선들
const ConnectingLines = () => {
  const linesRef = useRef();

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.002;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    const radius = 5;
    const segments = 8;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        Math.cos(theta) * radius,
        Math.sin(theta * 2) * 2,
        Math.sin(theta) * radius
      ));
    }

    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <line ref={linesRef}>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="#00ff88" transparent opacity={0.3} />
    </line>
  );
};

// 회전하는 링들
const RotatingRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[3, -2, -8]}>
      <mesh>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { size } = useThree();

  // 마우스 이벤트
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMousePosition({
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1
      });
    });
  }

  const floatingShapes = useMemo(() => {
    const shapes = ['box', 'sphere', 'torus', 'octahedron', 'tetrahedron', 'torusKnot'];
    const colors = ['#00ff88', '#00d9ff', '#ff00ff', '#ffff00'];
    const items = [];

    for (let i = 0; i < 15; i++) {
      items.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 15 - 7.5,
          Math.random() * -15 - 5
        ],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: {
          x: Math.random() * 0.02 - 0.01,
          y: Math.random() * 0.02 - 0.01,
          z: Math.random() * 0.02 - 0.01
        }
      });
    }

    return items;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <MainGeometry mousePosition={mousePosition} />
      <RotatingRings />
      <ConnectingLines />
      {floatingShapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
};

const KineticGeometry = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default KineticGeometry;
