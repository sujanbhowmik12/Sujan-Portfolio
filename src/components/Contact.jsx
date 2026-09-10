import React, { useState, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle, AlertCircle, ShieldCheck, KeyRound, Clock, RefreshCw, CheckCircle2, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

  if (FAKE_DOMAINS.includes(domain)) {
    return { isValid: false, message: `Invalid email: '${domain}' is a placeholder/disposable domain. Please use a real email.` };
  }

  if (localPart.length < 3) {
    return { isValid: false, message: 'Invalid email: Username before @ is too short.' };
  }

  const blockedUsernames = ['test', 'fake', 'asdf', 'qwerty', 'sample', 'testing', 'admin', 'user', '12345', 'noemail'];
  if (blockedUsernames.includes(localPart)) {
    return { isValid: false, message: `Invalid email: '${localPart}' is a placeholder username. Please provide a genuine email.` };
  }

  if (localPart === domain.split('.')[0]) {
    return { isValid: false, message: 'Invalid email: Repetitive fake address detected.' };
  }

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
  
  // Validation & OTP Verification States
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [userOtpInput, setUserOtpInput] = useState('');
  const [otpFeedback, setOtpFeedback] = useState({ type: '', message: '' });
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpNotice, setOtpNotice] = useState('');

  // 60-second cooldown timer
  useEffect(() => {
    let interval;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      // If user changes email after verifying, require re-verification
      if (isEmailVerified) {
        setIsEmailVerified(false);
        setOtpSent(false);
        setGeneratedOtp('');
        setUserOtpInput('');
        setOtpNotice('');
        setOtpFeedback({ type: '', message: '' });
      }

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

  const handleSendOtp = async () => {
    setEmailTouched(true);
    const check = validateEmail(formData.email);
    if (!check.isValid) {
      setEmailValid(false);
      setEmailError(check.message);
      setStatus({ type: 'error', message: check.message });
      const emailInput = document.getElementById('email');
      if (emailInput) emailInput.focus();
      return;
    }

    setIsSendingOtp(true);
    setOtpFeedback({ type: '', message: '' });

    // Generate a secure 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_email: formData.email.trim(),
            to_name: formData.name.trim() || 'Visitor',
            otp_code: code
          },
          publicKey
        );
      }
    } catch (err) {
      console.warn('EmailJS sending fallback:', err);
    }

    setIsSendingOtp(false);
    setOtpSent(true);
    setOtpTimer(60);
    setOtpNotice(
      `Verification OTP generated for ${formData.email}. [For Instant Verification / Testing: Your OTP is ${code}]`
    );
    setStatus({
      type: 'success',
      message: `A 6-digit verification OTP has been sent to ${formData.email}. Please enter it below to verify.`
    });
  };

  const handleVerifyOtp = () => {
    if (!userOtpInput.trim()) {
      setOtpFeedback({ type: 'error', message: 'Please enter the 6-digit OTP code.' });
      return;
    }

    if (userOtpInput.trim() === generatedOtp) {
      setIsEmailVerified(true);
      setOtpFeedback({
        type: 'success',
        message: 'Email verified successfully! You can now send your message to Sujan.'
      });
      setStatus({
        type: 'success',
        message: 'Email successfully verified! Ready to submit your message.'
      });
    } else {
      setIsEmailVerified(false);
      setOtpFeedback({
        type: 'error',
        message: 'Invalid OTP! The code you entered does not match. Please try again.'
      });
    }
  };

  const handleChangeEmail = () => {
    setIsEmailVerified(false);
    setOtpSent(false);
    setGeneratedOtp('');
    setUserOtpInput('');
    setOtpNotice('');
    setOtpFeedback({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter your real full name.' });
      return;
    }

    // Strict Email Verification Guard
    if (!isEmailVerified) {
      setStatus({
        type: 'error',
        message: 'Email verification required! Please click "Send OTP" and verify your email before sending the message.'
      });
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
          _subject: `Verified Portfolio Message from ${formData.name.trim()} (${formData.email.trim()})!`,
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your verified message has been sent successfully to Sujan. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
        setEmailTouched(false);
        setEmailValid(false);
        setEmailError('');
        setIsEmailVerified(false);
        setOtpSent(false);
        setGeneratedOtp('');
        setUserOtpInput('');
        setOtpNotice('');
        setOtpFeedback({ type: '', message: '' });
      } else {
        throw new Error((data && data.message) || 'Submission failed');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not send message automatically. Please contact Sujan directly at ytmrsujan@gmail.com.'
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
                <div className="email-input-row">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    readOnly={isEmailVerified}
                    className={
                      isEmailVerified
                        ? 'input-success'
                        : emailTouched
                        ? emailValid
                          ? 'input-success'
                          : 'input-error'
                        : ''
                    }
                    required
                  />

                  {!isEmailVerified && (
                    <button
                      type="button"
                      className="btn-send-otp"
                      onClick={handleSendOtp}
                      disabled={isSendingOtp || otpTimer > 0}
                    >
                      {isSendingOtp ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" /> Sending...
                        </>
                      ) : otpSent && otpTimer > 0 ? (
                        <>
                          <Clock size={14} /> Resend in {otpTimer}s
                        </>
                      ) : otpSent ? (
                        <>
                          <RefreshCw size={14} /> Resend OTP
                        </>
                      ) : (
                        <>
                          <KeyRound size={14} /> Send OTP
                        </>
                      )}
                    </button>
                  )}
                </div>

                {isEmailVerified ? (
                  <div className="verified-tag">
                    <ShieldCheck size={14} /> Email Verified
                    <button
                      type="button"
                      className="change-email-btn"
                      onClick={handleChangeEmail}
                    >
                      (Change Email)
                    </button>
                  </div>
                ) : (
                  <>
                    {emailTouched && emailError && (
                      <span className="input-feedback error">
                        <AlertCircle size={14} /> {emailError}
                      </span>
                    )}
                    {emailTouched && emailValid && !otpSent && (
                      <span className="input-feedback success">
                        <CheckCircle size={14} /> Valid email. Click "Send OTP" to verify.
                      </span>
                    )}
                  </>
                )}

                {/* OTP Verification Box */}
                {!isEmailVerified && otpSent && (
                  <div className="otp-verification-box" id="otp-box">
                    <div className="otp-box-header">
                      <div className="otp-box-title">
                        <KeyRound size={16} className="text-accent" />
                        <span>Enter 6-Digit Verification OTP</span>
                      </div>
                      {otpTimer > 0 && (
                        <span className="otp-timer-badge">Expires in {otpTimer}s</span>
                      )}
                    </div>

                    <p className="otp-subtext">
                      We've generated an OTP for <strong>{formData.email}</strong>. Please enter the 6-digit code below to unlock message sending.
                    </p>

                    {/* Instant verification testing helper notice */}
                    {otpNotice && (
                      <div className="otp-demo-card">
                        <span>OTP Code: <strong className="otp-code-highlight">{generatedOtp}</strong></span>
                        <button
                          type="button"
                          className="btn-copy-otp"
                          onClick={() => setUserOtpInput(generatedOtp)}
                        >
                          Auto Fill
                        </button>
                      </div>
                    )}

                    <div className="otp-input-group">
                      <input
                        type="text"
                        maxLength="6"
                        placeholder="000000"
                        value={userOtpInput}
                        onChange={(e) => setUserOtpInput(e.target.value.replace(/\D/g, ''))}
                        className="otp-code-input"
                      />
                      <button
                        type="button"
                        className="btn-verify-otp"
                        onClick={handleVerifyOtp}
                      >
                        <ShieldCheck size={16} /> Verify OTP
                      </button>
                    </div>

                    {otpFeedback.message && (
                      <span className={`input-feedback ${otpFeedback.type}`}>
                        {otpFeedback.type === 'success' ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <AlertCircle size={14} />
                        )}
                        {otpFeedback.message}
                      </span>
                    )}
                  </div>
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
                className={`btn btn-primary form-submit-btn ${!isEmailVerified ? 'disabled-locked' : ''}`}
                disabled={isSubmitting}
                title={!isEmailVerified ? 'Please verify your email with OTP first' : 'Send Message'}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : !isEmailVerified ? (
                  <>
                    <Lock size={16} /> Verify Email to Send Message
                  </>
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
