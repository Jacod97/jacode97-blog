// 파티클의 사인파 운동
export const sineWaveMotion = (x, y, time, amplitude = 2, frequency = 0.001) => {
  return {
    x: x + Math.sin(time * frequency + y * 0.01) * amplitude,
    y: y + Math.cos(time * frequency + x * 0.01) * amplitude
  };
};

// 마우스와의 상호작용 벡터 (반발력)
export const getRepulsionVector = (particlePos, mousePos, strength = 5000) => {
  const dx = particlePos.x - mousePos.x;
  const dy = particlePos.y - mousePos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0) return { x: 0, y: 0 };

  const force = Math.min(strength / (distance * distance), 10);
  return {
    x: (dx / distance) * force,
    y: (dy / distance) * force
  };
};

// 두 점 사이의 거리 계산
export const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

// 랜덤 범위 값 생성
export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

// 값을 특정 범위로 제한
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
