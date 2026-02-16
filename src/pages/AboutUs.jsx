import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  // Company stats
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '24/7', label: 'Support Available' }
  ];

  // Core values
  const values = [
    {
      icon: 'fa-solid fa-scale-balanced',
      title: 'Integrity',
      description: 'We believe in honest, transparent business practices with our clients and partners.'
    },
    {
      icon: 'fa-solid fa-gem',
      title: 'Quality',
      description: 'We deliver only the highest quality products and services, no compromises.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Partnership',
      description: 'We build long-lasting relationships based on trust and mutual success.'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Innovation',
      description: 'We continuously evolve with latest technology to serve you better.'
    }
  ];

  // Team members (optional - baad mein images add kar sakte ho)
  const team = [
    { name: 'Rajesh Sharma', role: 'Founder & CEO', experience: '25+ Years' },
    { name: 'Priya Patil', role: 'Technical Director', experience: '18+ Years' },
    { name: 'Amit Deshmukh', role: 'Operations Head', experience: '15+ Years' }
  ];

  return (
    <div className={styles.aboutPage}>
      
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>ABOUT US</div>
          <h1 className={styles.title}>
            Your Trusted <span className={styles.highlight}>Power Partner</span>
          </h1>
          <p className={styles.subtitle}>
            Delivering reliable power solutions since 2008
          </p>
        </div>
        {/* Decorative wave */}
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <div className={styles.sectionBadge}>OUR STORY</div>
              <h2 className={styles.sectionTitle}>
                Powering Businesses Since 2008
              </h2>
              <div className={styles.storyText}>
                <p>
                  <strong>Datta Power Solutions</strong>, 
                  began its journey in 2008 with a simple mission: to provide uninterrupted power solutions 
                  that businesses can rely on.
                </p>
                <p>
                  What started as a small service center in Pune has now grown into one of the region's most 
                  trusted authorized dealerships for leading brands like Luminous, Exide, Su-Kam, and Schneider Electric.
                </p>
                <p>
                  Today, we take pride in serving over 500+ happy clients across Maharashtra, ensuring their 
                  critical equipment never loses power. Our team of 25+ certified engineers works 24/7 to 
                  deliver excellence in every project.
                </p>
              </div>
              
              {/* Signature / Quote */}
              <div className={styles.quote}>
                <span className={styles.quoteIcon}>"</span>
                <p>We don't just sell products; we deliver peace of mind.</p>
                <div className={styles.quoteAuthor}>- Rajesh Sharma, Founder</div>
              </div>
            </div>
            
            <div className={styles.storyImage}>
              <div className={styles.imageBox}>
                <div className={styles.imagePlaceholder}>
                  <span><i className="fa-solid fa-industry" aria-hidden="true"></i></span>
                  <p>Our Journey</p>
                  <small>Since 2008</small>
                </div>
                {/* Experience badge */}
                <div className={styles.experienceBadge}>
                  <div className={styles.expNumber}>15+</div>
                  <div className={styles.expText}>Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statLine}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>WHAT WE BELIEVE IN</div>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}><i className={value.icon} aria-hidden="true"></i></div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>LEADERSHIP</div>
          <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
          <p className={styles.sectionSubtitle}>
            Experienced professionals dedicated to your success
          </p>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <div className={styles.avatarPlaceholder}>
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <span className={styles.teamExperience}>{member.experience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className={styles.certifications}>
        <div className={styles.container}>
          <div className={styles.certGrid}>
            <div className={styles.certItem}>
              <span><i className="fa-solid fa-check" aria-hidden="true"></i></span>
              <div>
                <strong>ISO 9001:2015</strong>
                <small>Certified</small>
              </div>
            </div>
            <div className={styles.certItem}>
              <span><i className="fa-solid fa-check" aria-hidden="true"></i></span>
              <div>
                <strong>MSME Registered</strong>
                <small>UDYAM-MH-01-1234567</small>
              </div>
            </div>
            <div className={styles.certItem}>
              <span><i className="fa-solid fa-check" aria-hidden="true"></i></span>
              <div>
                <strong>Authorized Dealers</strong>
                <small>Luminous | Exide | Schneider</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to work with us?</h2>
          <p>Let's discuss your power requirements and find the perfect solution.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.btnPrimary}>Contact Us Today</Link>
            <a className={styles.btnOutline} href="tel:7393939520">Call Now</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;



