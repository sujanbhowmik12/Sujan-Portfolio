import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const FAKE_DOMAINS = [
  'example.com', 'example.org', 'example.net',
  'test.com', 'fake.com', 'sample.com',
  'tempmail.com', 'mailinator.com', '10minutemail.com',
  'throwawaymail.com', 'guerrillamail.com', 'trashmail.com',
  'sharklasers.com', 'dispostable.com', 'fakeemail.com',
  'asdf.com', 'qwerty.com', 'xyz.com', 'aaa.com', 'abc.com',
  'none.com', 'noemail.com', 'invalid.com', 'null.com'
];

const validateEmail = (rawEmail) => {
  const email = (rawEmail || '').trim().toLowerCase();

  if (!email) {
    return { isValid: false, message: 'Email address is required.' };
  }

  // Standard safe RFC 5322 regex
  const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    if (!email.includes('@')) {
      return { isValid: false, message: "Invalid email: Missing '@' symbol (e.g. name@gmail.com)." };
    }
    const parts = email.split('@');
    if (parts.length > 2) {
      return { isValid: false, message: "Invalid email: Cannot have multiple '@' symbols." };
    }
    const domain = parts[1];
    if (!domain || !domain.includes('.')) {
      return { isValid: false, message: 'Invalid email: Missing domain extension (e.g. .com, .in, .org).' };
    }
    const tld = domain.split('.').pop();
    if (tld.length < 2) {
      return { isValid: false, message: 'Invalid email: Domain extension is too short.' };
    }
    return { isValid: false, message: 'Invalid email format. Please enter a real address (e.g. name@gmail.com).' };
  }

  const [localPart, domain] = email.split('@');

  // Block fake / disposable domains
  if (FAKE_DOMAINS.includes(domain)) {
    return { isValid: false, message: `Invalid email: '${domain}' is a placeholder/disposable domain. Please use a real email.` };
  }

  // Local part length check
  if (localPart.length < 3) {
    return { isValid: false, message: 'Invalid email: Username before @ is too short.' };
  }

  // Block obvious spam/placeholder usernames
  const blockedUsernames = ['test', 'fake', 'asdf', 'qwerty', 'sample', 'testing', 'admin', 'user', '12345', 'noemail'];
  if (blockedUsernames.includes(localPart)) {
    return { isValid: false, message: `Invalid email: '${localPart}' is a placeholder username. Please provide a genuine email.` };
  }

  // Check if username and domain are identical (e.g. asdf@asdf.com)
  if (localPart === domain.split('.')[0]) {
    return { isValid: false, message: 'Invalid email: Repetitive fake address detected.' };
  }

  // Popular public mail providers minimum character rules
  const majorProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  if (majorProviders.includes(domain) && localPart.length < 5) {
    return { isValid: false, message: `Invalid email: Real ${domain} addresses require at least 5 characters.` };
  }

  return { isValid: true, message: 'Valid email address!' };
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (emailTouched) {
        const check = validateEmail(value);
        setEmailValid(check.isValid);
        setEmailError(check.isValid ? '' : check.message);
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    const check = validateEmail(formData.email);
    setEmailValid(check.isValid);
    setEmailError(check.isValid ? '' : check.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailTouched(true);

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter your real full name.' });
      return;
    }

    // Strict Email Validation
    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.isValid) {
      setEmailValid(false);
      setEmailError(emailCheck.message);
      setStatus({ type: 'error', message: emailCheck.message });
      const emailInput = document.getElementById('email');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus({ type: 'error', message: 'Please write a message of at least 5 characters.' });
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
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `New Portfolio Message from ${formData.name.trim()}!`,
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully to Sujan. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
        setEmailTouched(false);
        setEmailValid(false);
        setEmailError('');
      } else {
        throw new Error((data && data.message) || 'Submission failed');
      }
    } catch {
      // Direct mailto fallback with clear message
      setStatus({
        type: 'error',
        message: 'Could not send automatically. Please send directly via email to ytmrsujan@gmail.com or check your connection.'
      });
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
                  onBlur={handleEmailBlur}
                  className={emailTouched ? (emailValid ? 'input-success' : 'input-error') : ''}
                  required
                />
                {emailTouched && emailError && (
                  <span className="input-feedback error">
                    <AlertCircle size={14} /> {emailError}
                  </span>
                )}
                {emailTouched && emailValid && (
                  <span className="input-feedback success">
                    <CheckCircle size={14} /> Valid email address
                  </span>
                )}
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
