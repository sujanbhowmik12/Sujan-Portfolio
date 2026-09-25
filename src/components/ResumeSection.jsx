import React, { useState } from 'react';
import { FileText, Eye, Download, X, ExternalLink, GraduationCap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './ResumeSection.css';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-card glass-card">
          <div className="resume-icon-badge">
            <FileText size={34} />
          </div>

          <div className="resume-content">
            <div className="resume-tag-pill">
              <Sparkles size={14} /> Curriculum Vitae (CV) & Resume
            </div>
            <h2 className="resume-heading">Looking for My Full Professional CV?</h2>
            <p className="resume-text">
              View or download my verified CV featuring my academic standing at Adamas University (9.2 CGPA), core technical skills in C++, Java, SQL, AI Agents, and hands-on projects.
            </p>

            <div className="resume-highlights-row">
              <span className="cv-pill"><GraduationCap size={14} /> B.Tech CSE (9.2 CGPA)</span>
              <span className="cv-pill"><Award size={14} /> NASSCOM Certified</span>
              <span className="cv-pill"><CheckCircle2 size={14} /> C++, Java, SQL & DSA</span>
              <span className="cv-pill"><CheckCircle2 size={14} /> AI Agents (ZOYA)</span>
            </div>
          </div>

          <div className="resume-actions">
            <button
              className="btn btn-secondary"
              onClick={() => setIsPreviewOpen(true)}
              title="Preview CV directly on this page"
            >
              <Eye size={18} /> View CV
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              title="Open CV in a new tab"
            >
              <ExternalLink size={18} /> Open Tab
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Sujan_Bhowmik_CV.pdf"
              className="btn btn-primary"
              title="Download CV PDF"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Resume / CV Viewer Modal */}
      {isPreviewOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FileText size={18} /> Sujan Bhowmik — Professional CV Preview
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
                <a
                  href={personalInfo.resumeUrl}
                  download="Sujan_Bhowmik_CV.pdf"
                  className="modal-icon-btn"
                  title="Download PDF"
                >
                  <Download size={18} />
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
                src={`${personalInfo.resumeUrl}#view=FitH`}
                title="Sujan Bhowmik CV"
                className="resume-iframe"
              >
                <p>Your browser does not support inline PDF viewing. <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">Click here to open the PDF</a>.</p>
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;
