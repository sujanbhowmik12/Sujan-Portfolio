import React from 'react';
import { Github, Linkedin, Instagram, ArrowRight, Download, Terminal, Database, Brain, Sparkles, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-decor">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>Hi, I'm Sujan Bhowmik 👋</span>
          </div>

          <h1 className="hero-heading">
            Building with <span className="gradient-text">Code</span>.<br />
            Learning with <span className="gradient-text">Data</span>.<br />
            Creating with <span className="gradient-text">AI</span>.
          </h1>

          <p className="hero-subtitle">
            {personalInfo.heroSubtitle}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href={personalInfo.resumeUrl} download="Sujan_Bhowmik_Resume.pdf" className="btn btn-secondary hero-btn">
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer & Data Science Visualization Dashboard */}
        <div className="hero-visual">
          <div className="dashboard-card animate-float">
            <div className="dashboard-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="dashboard-title">sujan_ds_pipeline.py</span>
              <div className="live-indicator">
                <span className="pulse-dot"></span> LIVE
              </div>
            </div>

            <div className="dashboard-body">
              {/* Code Snippet Box */}
              <div className="code-snippet-box">
                <div className="code-line">
                  <span className="code-keyword">import</span> <span className="code-lib">pandas</span> <span className="code-keyword">as</span> <span className="code-alias">pd</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">import</span> <span className="code-lib">sklearn.model_selection</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">from</span> <span className="code-lib">ai_models</span> <span className="code-keyword">import</span> <span className="code-class">NeuralNet</span>
                </div>
                <div className="code-line empty"></div>
                <div className="code-line">
                  <span className="code-comment"># Initializing Data Science Pipeline</span>
                </div>
                <div className="code-line">
                  <span className="code-var">model</span> = <span className="code-class">NeuralNet</span>(architecture=<span className="code-str">"Transformer"</span>)
                </div>
                <div className="code-line">
                  <span className="code-var">accuracy</span> = <span className="code-var">model</span>.<span className="code-func">train</span>(data=<span className="code-str">"clean_ds.csv"</span>)
                </div>
              </div>

              {/* Data Science Feature Pills */}
              <div className="dashboard-badges">
                <div className="ds-pill pill-python">
                  <Terminal size={15} /> Python
                </div>
                <div className="ds-pill pill-data">
                  <Database size={15} /> Data Analysis
                </div>
                <div className="ds-pill pill-ai">
                  <Brain size={15} /> Artificial Intelligence
                </div>
                <div className="ds-pill pill-ml">
                  <Cpu size={15} /> Machine Learning
                </div>
                <div className="ds-pill pill-code">
                  <Code size={15} /> Software Dev
                </div>
              </div>

              {/* Animated Mini Graph Visual */}
              <div className="mini-chart-visual">
                <div className="chart-header">
                  <span>Model Performance Metrics</span>
                  <span className="status-ok">Training Complete</span>
                </div>
                <svg className="chart-svg" viewBox="0 0 300 80">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,60 Q 40,45 80,50 T 160,25 T 240,15 T 300,10 L 300,80 L 0,80 Z" fill="url(#chartGrad)" />
                  <path d="M 0,60 Q 40,45 80,50 T 160,25 T 240,15 T 300,10" fill="none" stroke="#6366f1" strokeWidth="3" />
                  <circle cx="240" cy="15" r="4" fill="#8b5cf6" className="animate-ping" />
                  <circle cx="300" cy="10" r="5" fill="#06b6d4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
