import React from 'react';
import { User, Milestone, GraduationCap, BarChart, Brain, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutCards, journeyTimeline } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Passionate About Code & Data</h2>
          <p className="section-subtitle">
            Combining software engineering principles with data science algorithms to build intelligent solutions.
          </p>
        </div>

        {/* Bio & Information Cards Grid */}
        <div className="about-grid">
          {/* Photo & Profile Spotlight Card */}
          <div className="about-photo-card glass-card">
            <div className="photo-frame-wrapper">
              <div className="photo-glow-bg"></div>
              <img src="/profile.jpg" alt="Sujan Bhowmik" className="about-profile-img" />
              <div className="photo-status-badge">
                <span className="status-indicator-dot"></span>
                <span>Available for Internships & Projects</span>
              </div>
            </div>
            <div className="photo-card-info">
              <h3 className="photo-name">Sujan Bhowmik</h3>
              <p className="photo-tagline">B.Tech CSE Student & Aspiring Data Scientist</p>
            </div>
          </div>

          <div className="about-bio-card glass-card">
            <h3 className="bio-title">Hello & Welcome! 👋</h3>
            <p className="bio-text">
              {personalInfo.bio}
            </p>
            
            <div className="university-highlight">
              <div className="univ-icon"><GraduationCap size={24} /></div>
              <div className="univ-details">
                <span className="univ-name">{personalInfo.university}</span>
                <span className="univ-degree">{personalInfo.degree} ({personalInfo.year})</span>
              </div>
            </div>

            <div className="key-points-list">
              <div className="key-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Focusing on Python, Data Science, and Machine Learning</span>
              </div>
              <div className="key-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Hands-on Web Application & AI Project Development</span>
              </div>
              <div className="key-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Strong foundation in Computer Science Fundamentals</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="about-highlights-grid">
            {aboutCards.map((card, idx) => (
              <div key={idx} className="highlight-card glass-card">
                <span className="card-emoji">{card.icon}</span>
                <div className="card-info">
                  <span className="card-label">{card.label}</span>
                  <span className="card-val">{card.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="journey-wrapper">
          <div className="journey-header">
            <Milestone size={22} className="journey-icon" />
            <h3 className="journey-title">My Learning Journey</h3>
          </div>

          <div className="journey-timeline">
            {journeyTimeline.map((item, index) => (
              <div key={index} className="journey-node">
                <div className="node-marker">
                  <span className="node-number">{index + 1}</span>
                </div>
                <div className="node-content glass-card">
                  <h4 className="node-title">{item.step}</h4>
                  <p className="node-desc">{item.desc}</p>
                </div>
                {index < journeyTimeline.length - 1 && <div className="node-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
