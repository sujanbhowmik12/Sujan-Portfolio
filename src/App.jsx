import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExploringData from './components/ExploringData';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import GitHubSection from './components/GitHubSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import FloatingBubbles from './components/FloatingBubbles';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Light Neon Theme as default per user request
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Reveal IntersectionObserver
  useEffect(() => {
    if (loading) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => {
      sec.classList.add('reveal-on-scroll');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [loading]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <FloatingBubbles />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExploringData />
        <Experience />
        <Achievements />
        <Certifications />
        <ResumeSection />
        <Contact />
        <GitHubSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
