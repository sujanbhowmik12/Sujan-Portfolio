import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src="/logo.png" alt="Sujan Bhowmik Logo" className="footer-logo-img" />
              <span><span className="logo-accent">&lt;</span>Sujan.<span className="logo-dot">/&gt;</span></span>
            </a>
            <p className="footer-tagline">
              B.Tech CSE Student & Aspiring Data Scientist at Adamas University
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-heading">Quick Links</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#exploring-data">Exploring Data</a>
              <a href="#experience">Experience</a>
              <a href="#achievements">Achievements</a>
              <a href="#certifications">Certifications</a>
              <a href="#resume">Resume</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-socials">
            <h4 className="footer-nav-heading">Connect</h4>
            <div className="footer-social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Sujan Bhowmik. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
