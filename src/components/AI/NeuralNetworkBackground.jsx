import { useEffect, useRef } from 'react';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 신경망 레이어 구조
    const layers = [5, 8, 8, 6, 3]; // 각 레이어의 노드 수
    const nodes = [];
    const connections = [];

    // 노드 생성
    const layerSpacing = canvas.width / (layers.length + 1);
    layers.forEach((nodeCount, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const nodeSpacing = canvas.height / (nodeCount + 1);

      for (let i = 0; i < nodeCount; i++) {
        const y = nodeSpacing * (i + 1);
        nodes.push({
          x,
          y,
          layer: layerIndex,
          index: i,
          activation: Math.random(),
          targetActivation: Math.random(),
          radius: 4
        });
      }
    });

    // 연결 생성 (레이어 간)
    let currentNodeIndex = 0;
    layers.forEach((nodeCount, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const currentLayerNodes = nodes.slice(currentNodeIndex, currentNodeIndex + nodeCount);
        const nextLayerStart = currentNodeIndex + nodeCount;
        const nextLayerNodes = nodes.slice(nextLayerStart, nextLayerStart + layers[layerIndex + 1]);

        currentLayerNodes.forEach(fromNode => {
          nextLayerNodes.forEach(toNode => {
            connections.push({
              from: fromNode,
              to: toNode,
              weight: Math.random() * 2 - 1,
              signal: 0,
              signalSpeed: 0.02 + Math.random() * 0.03
            });
          });
        });
      }
      currentNodeIndex += nodeCount;
    });

    // 데이터 파티클
    const particles = [];
    const createParticle = () => {
      const startNode = nodes[Math.floor(Math.random() * layers[0])];
      particles.push({
        x: startNode.x,
        y: startNode.y,
        targetX: startNode.x,
        targetY: startNode.y,
        currentNodeIndex: 0,
        path: [],
        speed: 2,
        alpha: 1
      });
    };

    // 초기 파티클 생성
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // 애니메이션
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 연결선 그리기
      connections.forEach(conn => {
        const gradient = ctx.createLinearGradient(
          conn.from.x, conn.from.y,
          conn.to.x, conn.to.y
        );

        // 신호가 전파되는 효과
        conn.signal += conn.signalSpeed;
        if (conn.signal > 1) conn.signal = 0;

        const opacity = 0.1 + Math.abs(conn.weight) * 0.2;
        const activeOpacity = opacity + conn.signal * 0.3;

        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(conn.signal, `rgba(100, 150, 255, ${activeOpacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();
      });

      // 노드 그리기
      nodes.forEach(node => {
        // 활성화 값 부드럽게 변경
        node.activation += (node.targetActivation - node.activation) * 0.05;
        if (Math.random() < 0.01) {
          node.targetActivation = Math.random();
        }

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        );

        const intensity = node.activation;
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 + intensity * 0.2})`);
        gradient.addColorStop(0.5, `rgba(100, 150, 255, ${0.3 + intensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // 노드 외곽선
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 + intensity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 데이터 파티클 애니메이션
      particles.forEach((particle, index) => {
        // 파티클 이동
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 5) {
          // 다음 레이어로
          const currentLayer = Math.floor(particle.currentNodeIndex / 10);
          if (currentLayer < layers.length - 1) {
            const nextLayerStart = layers.slice(0, currentLayer + 1).reduce((a, b) => a + b, 0);
            const nextLayerSize = layers[currentLayer + 1];
            const nextNode = nodes[nextLayerStart + Math.floor(Math.random() * nextLayerSize)];

            particle.targetX = nextNode.x;
            particle.targetY = nextNode.y;
            particle.currentNodeIndex++;
          } else {
            // 끝에 도달하면 제거하고 새 파티클 생성
            particles.splice(index, 1);
            createParticle();
          }
        } else {
          particle.x += (dx / dist) * particle.speed;
          particle.y += (dy / dist) * particle.speed;
        }

        // 파티클 그리기
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, 8
        );
        particleGradient.addColorStop(0, 'rgba(100, 200, 255, 1)');
        particleGradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.5)');
        particleGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // 꼬리 효과
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - dx * 0.3, particle.y - dy * 0.3);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: '#000000'
      }}
    />
  );
};

export default NeuralNetworkBackground;
