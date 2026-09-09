import React from 'react';
import { Github, ExternalLink, GitBranch, Star, Code, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './GitHubSection.css';

const GitHubSection = () => {
  return (
    <section className="section github-section">
      <div className="container">
        <div className="github-card glass-card">
          <div className="github-content">
            <div className="github-badge">
              <Github size={20} />
              <span>Open Source & Code</span>
            </div>
            <h2 className="github-title">Explore My Code on GitHub</h2>
            <p className="github-desc">
              Check out my open-source projects, machine learning code repositories, and development activity at <strong>@sujanbhowmik12</strong>.
            </p>

            <div className="github-highlights">
              <div className="gh-stat-box">
                <Code size={18} className="gh-icon" />
                <span className="gh-stat-val">LectureMind AI</span>
                <span className="gh-stat-lbl">Featured Project</span>
              </div>
              <div className="gh-stat-box">
                <GitBranch size={18} className="gh-icon" />
                <span className="gh-stat-val">YTMR-LPG</span>
                <span className="gh-stat-lbl">Web Platform</span>
              </div>
              <div className="gh-stat-box">
                <Layers size={18} className="gh-icon" />
                <span className="gh-stat-val">Data Science</span>
                <span className="gh-stat-lbl">ML Notebooks</span>
              </div>
            </div>

            <div className="github-actions">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={18} /> Visit GitHub Profile <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
