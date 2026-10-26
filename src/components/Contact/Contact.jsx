import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // 3 second baad form reset
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className={`contact-section ${isVisible ? "visible" : ""}`}>
      <div className="contact-container">
        
        {/* Left Side */}
        <div className="contact-left">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact-title">
            Let's work <span>together</span>
          </h2>
          <p className="contact-desc">
            Have a project in mind or just want to say hi?  
            Feel free to reach out. I'm always open to discussing new opportunities.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <span>Email</span>
                <a href="mailto:kumarsharmakishor948@gmail.com">kumarsharmakishor948@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <span>Location</span>
                <p>Noida Sector-16,Utter Pradesh, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💼</div>
              <div>
                <span>Availability</span>
                <p>Open for Internship & junior Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com" className="social-btn" title="GitHub">GH</a>
            <a href="https://linkedin.com/in/kishor-kumar-6a95792a7" className="social-btn" title="LinkedIn">in</a>
    
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="arrow">→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;