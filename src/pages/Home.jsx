import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  // Stats data
  const stats = [
    { number: '15+', label: 'Years Experience', icon: 'fa-solid fa-star' },
    { number: '500+', label: 'Happy Clients', icon: 'fa-solid fa-handshake' },
    { number: '24/7', label: 'Support Available', icon: 'fa-solid fa-clock' },
    { number: '100%', label: 'Quality Assured', icon: 'fa-solid fa-circle-check' }
  ];

  // Services data
  const services = [
    { 
      icon: 'fa-solid fa-bolt', 
      title: 'UPS Systems', 
      desc: 'High-quality online UPS systems from 10KVA to 250KVA for uninterrupted power supply.',
      features: ['10-250KVA', 'Online Double Conversion', 'Pure Sine Wave']
    },
    { 
      icon: 'fa-solid fa-sun', 
      title: 'Solar Solutions', 
      desc: 'Complete solar power systems including inverters, panels, and pumps for sustainable energy.',
      features: ['On-Grid/Off-Grid', 'MPPT Technology', 'Net Metering']
    },
    { 
      icon: 'fa-solid fa-screwdriver-wrench', 
      title: 'AMC Services', 
      desc: 'Comprehensive annual maintenance contracts ensuring peak performance 24/7.',
      features: ['Quarterly Maintenance', 'Priority Support', 'Spare Parts']
    },
    { 
      icon: 'fa-solid fa-plug', 
      title: 'Electrical Products', 
      desc: 'Wide range of electrical materials including cables, batteries, stabilizers.',
      features: ['ISI Marked', 'Branded', 'Warranty']
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    { icon: 'fa-solid fa-user-gear', title: 'Certified Engineers', desc: 'Factory-trained professionals with 10+ years experience' },
    { icon: 'fa-solid fa-rocket', title: 'Fast Response', desc: '4-hour response time for emergency services' },
    { icon: 'fa-solid fa-sack-dollar', title: 'Best Prices', desc: 'Direct dealership, no middlemen' },
    { icon: 'fa-solid fa-shield-halved', title: 'Genuine Products', desc: '100% authentic branded products' }
  ];

  return (
    <div className={styles.homePage}>
      
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}><i className="fa-solid fa-bolt" aria-hidden="true"></i></span>
            RELIABLE POWER SOLUTIONS
          </div>
          
          <h1 className={styles.title}>
            Powering Your <span className={styles.highlight}>Business</span> 
            <br />with Excellence
          </h1>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statIcon}><i className={stat.icon} aria-hidden="true"></i></span>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <p className={styles.description}>
            Datta Power Solutions is your trusted partner for comprehensive power solutions.
            From UPS systems to solar energy, we deliver reliability you can count on.
          </p>

          <div className={styles.buttons}>
            <Link to="/contact" className={styles.btnPrimary}>
              <span><i className="fa-solid fa-file-lines" aria-hidden="true"></i></span>
              Get Free Quote
            </Link>
            <a className={styles.btnOutline} href="https://wa.me/7393939520?text=Hello!%20I%20need%20power%20solutions." target="_blank" rel="noopener noreferrer">
              <span><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
              Chat with us
            </a>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>ABOUT US</div>
          <h2 className={styles.sectionTitle}>
            Your Trusted <span className={styles.sectionHighlight}>Power Partner</span>
          </h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              At <strong>Datta Power Solutions</strong>, 
              we specialize in providing comprehensive power solutions that keep your business running smoothly. 
              Since 2008, we have been authorized dealers for leading UPS, battery, and solar equipment manufacturers.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <span><i className="fa-solid fa-location-dot" aria-hidden="true"></i></span> Pune Based
              </div>
              <div className={styles.aboutFeature}>
                <span><i className="fa-solid fa-industry" aria-hidden="true"></i></span> 1000+ Installations
              </div>
              <div className={styles.aboutFeature}>
                <span><i className="fa-solid fa-star" aria-hidden="true"></i></span> 4.8/5 Rating
              </div>
            </div>
          </div>
          <Link to="/about" className={styles.btnLink}>
            Learn More About Us 
            <span><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </Link>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>OUR SERVICES</div>
          <h2 className={styles.sectionTitle}>
            Comprehensive <span className={styles.sectionHighlight}>Power Solutions</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From installation to maintenance, we provide end-to-end power solutions for all your needs.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>
                  <span className={styles.serviceIcon}><i className={service.icon} aria-hidden="true"></i></span>
                </div>
                <h3>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, index) => (
                    <span key={index} className={styles.serviceFeature}><i className="fa-solid fa-check" aria-hidden="true"></i> {feature}</span>
                  ))}
                </div>
                <Link to="/services" className={styles.serviceLink}>
                  Learn More 
                  <span><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>WHY CHOOSE US</div>
          <h2 className={styles.sectionTitle}>
            We Deliver <span className={styles.sectionHighlight}>Excellence</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Here's why customers trust us with their power needs
          </p>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className={styles.whyCard}>
                <div className={styles.whyIcon}><i className={item.icon} aria-hidden="true"></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Power Up Your Business?</h2>
          <p className={styles.ctaText}>
            Get in touch with our experts for a free consultation and quote
          </p>
          <div className={styles.ctaButtons}>
            <a className={styles.ctaPrimary} href="tel:7393939520">
              <i className="fa-solid fa-phone" aria-hidden="true"></i> Call Now: 7393939520
            </a>
            <a className={styles.ctaOutline} href="mailto:info@dattapower.com">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i> Email Us
            </a>
          </div>
          <p className={styles.ctaNote}>*Free consultation for first-time customers</p>
        </div>
      </section>

    </div>
  );
};

export default Home;


