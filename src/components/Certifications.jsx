import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, Clock, FileCheck, X, Download, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FileCheck size={16} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-subtitle">
            Industry-recognized certifications and official government-backed skill assessments.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`cert-card glass-card ${cert.isVerified ? 'verified-card' : 'placeholder-card'}`}
            >
              {cert.isVerified ? (
                <div className="cert-badge-top gold-badge">
                  <ShieldCheck size={14} /> Verified Gold
                </div>
              ) : (
                <div className="cert-badge-top pending-badge">
                  <Clock size={14} /> In Progress
                </div>
              )}

              {cert.imageUrl ? (
                <div className="cert-image-preview" onClick={() => setSelectedCert(cert)}>
                  <img src={cert.imageUrl} alt={cert.name} className="cert-thumbnail" />
                  <div className="cert-overlay-hover">
                    <span>Click to Expand</span>
                  </div>
                </div>
              ) : (
                <div className="cert-icon-wrapper">
                  <Award size={36} />
                </div>
              )}

              <div className="cert-details">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {cert.credentialId && (
                  <div className="cert-credential-id">
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                <div className="cert-footer-meta">
                  <span className="cert-date">{cert.date}</span>
                </div>

                {cert.skills && (
                  <div className="cert-skills-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="cert-action">
                {cert.imageUrl ? (
                  <button
                    type="button"
                    className="btn btn-primary btn-sm cert-btn"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <FileCheck size={16} /> View Certificate
                  </button>
                ) : (
                  <button className="btn btn-outline btn-sm cert-btn" disabled>
                    <Clock size={15} /> Upcoming
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={24} />
            </button>

            <div className="cert-modal-header">
              <div className="modal-title-wrap">
                <ShieldCheck size={24} className="gold-text-icon" />
                <div>
                  <h3 className="modal-cert-title">{selectedCert.name}</h3>
                  <p className="modal-cert-subtitle">{selectedCert.issuer}</p>
                </div>
              </div>
            </div>

            <div className="cert-modal-body">
              <img src={selectedCert.imageUrl} alt={selectedCert.name} className="cert-full-image" />
            </div>

            <div className="cert-modal-footer">
              <div className="modal-cred-id">
                <CheckCircle2 size={16} className="text-success" />
                <span>Credential ID: <strong>{selectedCert.credentialId}</strong></span>
              </div>
              <div className="modal-actions">
                <a
                  href={selectedCert.pdfUrl}
                  download="Sujan_Bhowmik_Gen_AI_Tools_Certificate.pdf"
                  className="btn btn-primary btn-sm"
                  title="Download Certificate in PDF mode"
                >
                  <Download size={16} /> Download PDF
                </a>
                <a
                  href={`${selectedCert.pdfUrl}?view=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="View PDF in browser"
                >
                  <ExternalLink size={16} /> View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
