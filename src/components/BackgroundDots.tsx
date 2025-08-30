import React from 'react';

const BackgroundDots: React.FC = () => {
  // Generate dots with random positions and animation delays
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-foreground/15 dark:bg-foreground/25"
          style={{
            left: `${dot.initialX}%`,
            top: `${dot.initialY}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `moveDot ${dot.duration}s linear infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes moveDot {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(100px, -100px);
          }
          50% {
            transform: translate(-50px, 150px);
          }
          75% {
            transform: translate(200px, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundDots;