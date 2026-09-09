import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="logo-pulse-ring"></div>
        <div className="preloader-logo-wrapper">
          <img src="/logo.png" alt="Sujan Bhowmik Logo" className="preloader-logo-img" />
        </div>
        <div className="preloader-brand">
          <span className="logo-accent">&lt;</span>Sujan.<span className="logo-dot">/&gt;</span>
        </div>
        <div className="preloader-badge">
          <Sparkles size={14} className="animate-spin-slow" /> Loading Portfolio...
        </div>
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
