import React, { useMemo } from 'react';
import './FloatingBubbles.css';

const FloatingBubbles = () => {
  // Generate 32 glowing spots with balanced visibility and soft neon colors
  const bubbles = useMemo(() => {
    const colors = [
      'rgba(0, 240, 255, 0.65)',   // Neon Cyan
      'rgba(176, 38, 255, 0.6)',   // Neon Purple
      'rgba(255, 0, 127, 0.55)',   // Neon Pink
      'rgba(16, 185, 129, 0.55)',  // Neon Emerald
      'rgba(99, 102, 241, 0.6)'    // Neon Indigo
    ];

    return Array.from({ length: 35 }).map((_, i) => {
      const size = Math.floor(Math.random() * 12) + 6; // Small spots between 6px and 18px
      const left = Math.floor(Math.random() * 98); // Percentage 0% to 98%
      const duration = (Math.random() * 10 + 8).toFixed(1); // Duration 8s to 18s
      const delay = (Math.random() * 8).toFixed(1); // Delay 0s to 8s
      const color = colors[i % colors.length];

      return {
        id: i,
        size: `${size}px`,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        color
      };
    });
  }, []);

  return (
    <div className="floating-bubbles-container" aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="neon-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.delay,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            boxShadow: `0 0 15px ${b.color}`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
