import React from 'react';
import { BookOpen, Calendar, GraduationCap, ChevronRight, PlusCircle } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>Academic & Skill Building</span>
          </div>
          <h2 className="section-title">Experience & Learning</h2>
          <p className="section-subtitle">
            My educational background, academic coursework, and hands-on skill development path.
          </p>
        </div>

        <div className="experience-timeline-container">
          <div className="timeline-line"></div>

          {experienceTimeline.map((item, index) => (
            <div key={index} className="experience-timeline-item">
              <div className="timeline-dot">
                <GraduationCap size={16} />
              </div>

              <div className="timeline-card glass-card">
                <div className="card-top">
                  <span className="experience-tag">{item.tag}</span>
                  <span className="experience-period">
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>
                <h3 className="experience-item-title">{item.title}</h3>
                <p className="experience-item-desc">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Editable Future Internship Node Indicator */}
          <div className="experience-timeline-item future-node">
            <div className="timeline-dot dot-future">
              <PlusCircle size={16} />
            </div>
            <div className="timeline-card glass-card card-future">
              <span className="future-label">🚀 Future Internships & Professional Roles</span>
              <p className="future-desc">
                Currently open for Data Science, Machine Learning, and Software Engineering internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
