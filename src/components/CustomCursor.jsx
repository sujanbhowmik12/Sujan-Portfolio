import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Interactive element hover detection
    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .glass-card, .filter-btn, .skill-item-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isVisible]);

  // Smooth lerp trailing animation loop for the outer ring
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.2),
        y: lerp(prev.y, position.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isClicked ? 'clicked' : ''} ${isHovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isClicked ? 'clicked' : ''} ${isHovered ? 'hovered' : ''}`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
