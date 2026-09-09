import React from 'react';
import { Award, Trophy, Code, Sparkles, Plus } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const iconMap = {
  Trophy: Trophy,
  Code: Code,
  Sparkles: Sparkles,
  Award: Award
};

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={16} />
            <span>Milestones</span>
          </div>
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Notable milestones, hackathon participations, competitive programming accomplishments, and honors.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div key={item.id} className="achievement-card glass-card">
                <div className="achievement-icon-box">
                  <IconComponent size={24} />
                </div>
                <div className="achievement-info">
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                </div>
                <div className="placeholder-edit-tag">
                  <Plus size={12} /> Editable Slot
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
