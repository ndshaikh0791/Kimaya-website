import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.subject || 'Not selected'}`,
      `Message: ${formData.message}`
    ].join('\n');
    const url = `https://wa.me/7393939520?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>GET IN TOUCH</div>
          <h1 className={styles.title}>
            We're Here to <span className={styles.highlight}>Help You</span>
          </h1>
          <p className={styles.subtitle}>
            Have questions? Need a quote? Our team is ready to assist you 24/7
          </p>
        </div>
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <div className={styles.formColumn}>
              <div className={styles.sectionBadge}>SEND MESSAGE</div>
              <h2 className={styles.sectionTitle}>Get a Free Quote</h2>
              <p className={styles.sectionSubtitle}>
                Fill the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      minLength={2}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      autoComplete="tel"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Service Required *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select service</option>
                      <option value="UPS Systems">UPS Systems</option>
                      <option value="Solar Solutions">Solar Solutions</option>
                      <option value="Batteries">Batteries</option>
                      <option value="AMC Service">AMC Service</option>
                      <option value="Repair & Maintenance">Repair & Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    minLength={10}
                    required
                  ></textarea>
                </div>

                <div className={styles.formCheckbox}>
                  <input type="checkbox" id="consent" required />
                  <label htmlFor="consent">
                    I agree to receive communications from Datta Power Solutions
                  </label>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message <span><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </button>
              </form>
            </div>

            <div className={styles.mapColumn}>
              <div className={styles.mapCard}>
                <div className={styles.mapHeader}>
                  <span className={styles.mapIcon}><i className="fa-solid fa-location-dot" aria-hidden="true"></i></span>
                  <h3>Visit Our Office</h3>
                </div>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.878635180274!2d73.8484!3d18.4621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eae3d3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>

                <div className={styles.addressBox}>
                  <h4>Datta Power Solutions</h4>
                  <p>Power Solutions & Services</p>
                  <p className={styles.fullAddress}>
                    Basement, Kanta Heights, Near Bhumkar Bridge,<br />
                    Ambegaon Budruk, Pune - 411046
                  </p>
                  <div className={styles.addressActions}>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.directionBtn}>
                      <i className="fa-solid fa-map-location-dot" aria-hidden="true"></i> Get Directions
                    </a>
                    <a href="tel:7393939520" className={styles.callBtn}>
                      <i className="fa-solid fa-phone" aria-hidden="true"></i> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Need Immediate Assistance?</h2>
          <p>Our support team is available 24/7 to help you with any emergency</p>
          <div className={styles.ctaButtons}>
            <a className={styles.btnPrimary} href="tel:7393939520"><i className="fa-solid fa-phone" aria-hidden="true"></i> Call Emergency: 7393939520</a>
            <a className={styles.btnOutline} href="https://wa.me/7393939520?text=Hello!%20I%20need%20urgent%20support." target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat with Us</a>
          </div>
          <p className={styles.emergencyNote}>*Free consultation for first-time customers</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
