import React from 'react';
import { AreaChart, BarChart2, PieChart, LineChart, Cpu, Database, Binary, Activity, Layers } from 'lucide-react';
import './ExploringData.css';

const ExploringData = () => {
  return (
    <section id="exploring-data" className="section data-science-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge badge-cyan">
            <BarChart2 size={16} />
            <span>Data Science Focus</span>
          </div>
          <h2 className="section-title">Exploring Data & Intelligence</h2>
          <p className="section-subtitle">
            Currently building my foundation in statistics, data analysis and machine learning with the goal of becoming a professional Data Scientist.
          </p>
        </div>

        {/* Dashboard Concept Container */}
        <div className="data-dashboard-container glass-card">
          <div className="dashboard-topbar">
            <div className="topbar-left">
              <Activity size={18} className="icon-pulse" />
              <span className="topbar-title">Data Analytics & ML Workbench</span>
            </div>
            <div className="topbar-tags">
              <span className="tag-pill"><Binary size={12} /> NumPy</span>
              <span className="tag-pill"><Layers size={12} /> Pandas</span>
              <span className="tag-pill"><BarChart2 size={12} /> Matplotlib</span>
              <span className="tag-pill"><Cpu size={12} /> Scikit-Learn</span>
            </div>
          </div>

          {/* Grid of Dashboard Data Visualizations */}
          <div className="dashboard-grid">
            {/* Widget 1: Data Analysis Pipeline */}
            <div className="dash-widget">
              <div className="widget-header">
                <span className="widget-title"><Database size={16} /> Data Analysis Pipeline</span>
                <span className="widget-status">Exploratory Stage</span>
              </div>
              <div className="pipeline-steps">
                <div className="step-box">
                  <span className="step-num">01</span>
                  <span className="step-name">Data Ingestion</span>
                </div>
                <div className="step-arrow">➔</div>
                <div className="step-box">
                  <span className="step-num">02</span>
                  <span className="step-name">Preprocessing</span>
                </div>
                <div className="step-arrow">➔</div>
                <div className="step-box">
                  <span className="step-num">03</span>
                  <span className="step-name">EDA & Viz</span>
                </div>
                <div className="step-arrow">➔</div>
                <div className="step-box highlight">
                  <span className="step-num">04</span>
                  <span className="step-name">Modeling</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Statistical Distribution (Animated SVG) */}
            <div className="dash-widget">
              <div className="widget-header">
                <span className="widget-title"><LineChart size={16} /> Statistical Distributions</span>
                <span className="widget-status">Gaussian Curve</span>
              </div>
              <div className="svg-chart-wrapper">
                <svg viewBox="0 0 300 120" className="data-svg">
                  <defs>
                    <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0891b2" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 10 110 Q 70 110, 100 80 T 150 10 T 200 80 Q 230 110, 290 110 Z" fill="url(#bellGrad)" />
                  <path d="M 10 110 Q 70 110, 100 80 T 150 10 T 200 80 Q 230 110, 290 110" fill="none" stroke="#0891b2" strokeWidth="3" />
                  <line x1="150" y1="10" x2="150" y2="110" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="150" cy="10" r="5" fill="#7c3aed" />
                </svg>
              </div>
            </div>

            {/* Widget 3: Machine Learning Model Training Visual */}
            <div className="dash-widget">
              <div className="widget-header">
                <span className="widget-title"><Cpu size={16} /> Machine Learning Convergence</span>
                <span className="widget-status">Loss Curve</span>
              </div>
              <div className="svg-chart-wrapper">
                <svg viewBox="0 0 300 120" className="data-svg">
                  <defs>
                    <linearGradient id="lossGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 10 15 Q 80 90, 150 100 T 290 105 L 290 120 L 10 120 Z" fill="url(#lossGrad)" />
                  <path d="M 10 15 Q 80 90, 150 100 T 290 105" fill="none" stroke="#7c3aed" strokeWidth="3" />
                  <circle cx="290" cy="105" r="5" fill="#10b981" />
                </svg>
              </div>
            </div>

            {/* Widget 4: Feature Importance / Correlation Breakdown */}
            <div className="dash-widget">
              <div className="widget-header">
                <span className="widget-title"><PieChart size={16} /> Data Focus Areas</span>
                <span className="widget-status">Core Pillars</span>
              </div>
              <div className="pillar-bars">
                <div className="pillar-item">
                  <div className="pillar-info">
                    <span>Python & Algorithms</span>
                    <span className="pillar-pct">Core</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill bar-1"></div></div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-info">
                    <span>Data Wrangling & Analysis</span>
                    <span className="pillar-pct">Active</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill bar-2"></div></div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-info">
                    <span>Machine Learning Fundamentals</span>
                    <span className="pillar-pct">Growing</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill bar-3"></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-footer-note">
            💡 <strong>Mission:</strong> Transforming raw numbers into meaningful insights and actionable artificial intelligence tools.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploringData;
