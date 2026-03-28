import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

const FloatingParticles = ({ count = 15 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 10,
    }));
    setParticles(p);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold opacity-20"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            filter: `blur(${p.size / 2}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
