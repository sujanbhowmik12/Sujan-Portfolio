import React from 'react';
import {
  Wrench,
  Code2,
  Cpu,
  Terminal,
  FileCode,
  Database,
  Binary,
  Table,
  BarChart3,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  Wand2,
  Bot,
  GitBranch,
  Github,
  Laptop,
  Cloud,
  Trophy,
  Coffee
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

// Map icon string names to Lucide icon components
const iconMap = {
  Code2,
  Cpu,
  Coffee,
  Terminal,
  FileCode,
  Database,
  Binary,
  Table,
  BarChart3,
  BrainCircuit,
  BookOpen,
  Sparkles,
  Network,
  Wand2,
  Bot,
  GitBranch,
  Github,
  Laptop,
  Cloud,
  Trophy
};

const Skills = () => {
  const getLevelBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case 'intermediate':
        return 'badge-intermediate';
      case 'familiar':
        return 'badge-familiar';
      case 'learning':
        return 'badge-learning';
      default:
        return 'badge-default';
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={16} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">My Tech Stack & Toolkit</h2>
          <p className="section-subtitle">
            Languages, frameworks, data tools, and technologies I work with and continuously expand.
          </p>
        </div>

        <div className="skill-categories-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="category-card glass-card">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={sIdx} className="skill-item-card">
                      <div className="skill-icon-wrapper">
                        <IconComponent size={22} className="skill-icon" />
                      </div>
                      <div className="skill-meta">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level-badge ${getLevelBadgeClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
