import React, { useState } from 'react';
import { FileText, Eye, Download, X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './ResumeSection.css';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-card glass-card">
          <div className="resume-icon-badge">
            <FileText size={32} />
          </div>

          <div className="resume-content">
            <h2 className="resume-heading">Want to know more about me?</h2>
            <p className="resume-text">
              Take a look at my resume to learn about my education, skills, projects and experience in detail.
            </p>
          </div>

          <div className="resume-actions">
            <button
              className="btn btn-secondary"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye size={18} /> View Resume
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Sujan-Bhowmik-Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      {isPreviewOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FileText size={18} /> Sujan Bhowmik - Resume Preview
              </div>
              <div className="modal-actions">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-icon-btn"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  className="modal-icon-btn"
                  onClick={() => setIsPreviewOpen(false)}
                  title="Close preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <iframe
                src={personalInfo.resumeUrl}
                title="Sujan Bhowmik Resume"
                className="resume-iframe"
              >
                <p>Your browser does not support PDF viewing. <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">Click here to open the PDF</a>.</p>
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;
