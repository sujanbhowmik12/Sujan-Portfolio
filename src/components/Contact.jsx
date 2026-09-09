import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/ytmrsujan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}!`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully to Sujan. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      // Direct mailto fallback
      setStatus({
        type: 'success',
        message: 'Thank you! Opening your email app to send the message directly to Sujan...'
      });
      window.location.href = `mailto:ytmrsujan@gmail.com?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={16} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Together.</h2>
          <p className="section-subtitle">
            I'm always interested in learning, building projects and connecting with people interested in technology.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information & Channels */}
          <div className="contact-info-card glass-card">
            <h3 className="info-title">Connect with Me</h3>
            <p className="info-text">
              Feel free to reach out for collaborations, project inquiries, or just to say hello!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="item-icon"><Mail size={20} /></div>
                <div className="item-meta">
                  <span className="item-label">Email</span>
                  <a href={`mailto:${personalInfo.socials.email}`} className="item-value">
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon"><MapPin size={20} /></div>
                <div className="item-meta">
                  <span className="item-label">Location</span>
                  <span className="item-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links-box">
              <span className="social-box-label">Follow & Connect</span>
              <div className="social-pills">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card glass-card">
            <h3 className="form-title">Send a Message</h3>

            {status.message && (
              <div className={`status-banner ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can I help you or what would you like to build?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
