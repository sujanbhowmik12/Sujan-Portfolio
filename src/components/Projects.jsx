import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Clock, Code } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={16} />
            <span>Featured Works</span>
          </div>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            Explore my latest real-world applications, AI tools, and ongoing data science projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs-wrapper">
          <div className="filter-tabs">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-card ${project.isComingSoon ? 'coming-soon-card' : ''}`}
            >
              {/* Card Top Banner / Visual */}
              <div className="project-banner">
                <div className="banner-badge">
                  {project.isComingSoon ? (
                    <span className="badge-cs"><Clock size={14} /> Coming Soon</span>
                  ) : (
                    <span className="badge-featured"><Sparkles size={14} /> {project.badge}</span>
                  )}
                </div>
                <div className="project-banner-icon">
                  <Code size={36} />
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions / Links */}
                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub Repository"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      title="View Live Application"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : project.isComingSoon ? (
                    <span className="btn btn-outline btn-sm disabled">
                      In Development
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
