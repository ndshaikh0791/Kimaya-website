import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: 'fa-solid fa-screwdriver-wrench' },
    { id: 'installation', name: 'Installation', icon: 'fa-solid fa-gear' },
    { id: 'amc', name: 'AMC Services', icon: 'fa-solid fa-clipboard-list' },
    { id: 'repair', name: 'Repair & Maintenance', icon: 'fa-solid fa-hammer' },
    { id: 'consulting', name: 'Consulting', icon: 'fa-solid fa-lightbulb' },
    { id: 'solar', name: 'Solar Services', icon: 'fa-solid fa-sun' }
  ];

  // Services data
  const services = [
    // Installation Services
    {
      id: 1,
      category: 'installation',
      name: 'UPS Installation',
      description: 'Professional installation of online and offline UPS systems for businesses and homes.',
      longDescription: 'Our certified engineers ensure seamless installation of your UPS system with proper wiring, earthing, and configuration. We handle everything from site survey to final commissioning.',
      icon: 'fa-solid fa-bolt',
      features: ['Site Survey', 'Professional Wiring', 'Earthing Setup', 'System Configuration', 'Testing & Commissioning'],
      support: '24/7',
      popular: true
    },
    {
      id: 2,
      category: 'installation',
      name: 'Solar Panel Installation',
      description: 'End-to-end solar power system installation for residential and commercial properties.',
      longDescription: 'Complete solar solution including panel mounting, inverter setup, battery connection, and grid integration. We handle all paperwork for subsidies and net metering.',
      icon: 'fa-solid fa-sun',
      features: ['Rooftop Mounting', 'Inverter Setup', 'Battery Bank', 'Net Metering', 'Subsidy Assistance'],
      support: '5 Year Warranty',
      popular: true
    },
    {
      id: 3,
      category: 'installation',
      name: 'Stabilizer Installation',
      description: 'Expert installation of servo and static voltage stabilizers for industrial equipment.',
      icon: 'fa-solid fa-gear',
      features: ['Load Calculation', 'Proper Sizing', 'Wiring Setup', 'Voltage Calibration'],
      support: '1 Year Warranty',
      popular: false
    },

    // AMC Services
    {
      id: 4,
      category: 'amc',
      name: 'Comprehensive AMC',
      description: 'Annual maintenance contract covering all your power equipment with priority support.',
      longDescription: 'Our comprehensive AMC includes regular preventive maintenance, priority service calls, 20% discount on spare parts, and quarterly system health reports.',
      icon: 'fa-solid fa-clipboard-list',
      features: ['Quarterly Maintenance', 'Priority Service', 'Spare Parts Discount', 'Health Reports', 'Emergency Support'],
      support: '24/7 Priority',
      popular: true
    },
    {
      id: 5,
      category: 'amc',
      name: 'UPS AMC',
      description: 'Dedicated maintenance contract for UPS systems with battery replacement options.',
      icon: 'fa-solid fa-bolt',
      features: ['Battery Testing', 'Capacitor Check', 'Fan Replacement', 'Inverter Calibration', 'Emergency Backup'],
      support: '12x7 Support',
      popular: false
    },
    {
      id: 6,
      category: 'amc',
      name: 'Solar AMC',
      description: 'Complete maintenance package for solar power systems with panel cleaning.',
      icon: 'fa-solid fa-sun',
      features: ['Panel Cleaning', 'Inverter Maintenance', 'Battery Care', 'Performance Monitoring', 'Net Meter Check'],
      support: 'Quarterly Visit',
      popular: true
    },

    // Repair & Maintenance
    {
      id: 7,
      category: 'repair',
      name: 'UPS Repair',
      description: 'Expert repair services for all brands of UPS systems and inverters.',
      icon: 'fa-solid fa-hammer',
      features: ['PCB Repair', 'Battery Replacement', 'Inverter Repair', 'Charger Fix', 'Component Level Repair'],
      support: '90 Day Warranty',
      popular: true
    },
    {
      id: 8,
      category: 'repair',
      name: 'Battery Replacement',
      description: 'High-quality battery replacement for UPS, inverter, and solar systems.',
      icon: 'fa-solid fa-car-battery',
      features: ['Free Testing', 'Original Batteries', 'Installation Included', 'Old Battery Buyback', '1 Year Warranty'],
      support: '1 Year Warranty',
      popular: false
    },
    {
      id: 9,
      category: 'repair',
      name: 'Emergency Service',
      description: '24/7 emergency repair service for critical power equipment breakdowns.',
      icon: 'fa-solid fa-triangle-exclamation',
      features: ['2 Hour Response', 'Night Service', 'Holiday Support', 'Temporary Backup', 'Express Repair'],
      support: 'Emergency',
      popular: true
    },

    // Consulting Services
    {
      id: 10,
      category: 'consulting',
      name: 'Power Audit',
      description: 'Comprehensive power quality audit for your facility with detailed recommendations.',
      icon: 'fa-solid fa-chart-column',
      features: ['Load Analysis', 'Power Quality Check', 'Efficiency Study', 'Cost Analysis', 'Detailed Report'],
      support: 'Free Consultation',
      popular: false
    },
    {
      id: 11,
      category: 'consulting',
      name: 'Energy Efficiency',
      description: 'Consulting services to optimize your power consumption and reduce electricity bills.',
      icon: 'fa-solid fa-lightbulb',
      features: ['Energy Audit', 'Load Management', 'Peak Shaving', 'Power Factor Correction', 'ROI Analysis'],
      support: '6 Month Follow-up',
      popular: true
    },

    // Solar Services
    {
      id: 12,
      category: 'solar',
      name: 'Solar Panel Cleaning',
      description: 'Professional cleaning service to maintain optimal solar panel efficiency.',
      icon: 'fa-solid fa-broom',
      features: ['Deionized Water', 'Soft Brushes', 'Anti-static', 'Performance Check', 'Monthly/Quarterly Plans'],
      support: 'Free Inspection',
      popular: true
    },
    {
      id: 13,
      category: 'solar',
      name: 'Solar Inverter Repair',
      description: 'Expert repair service for all types of solar inverters and charge controllers.',
      icon: 'fa-solid fa-screwdriver-wrench',
      features: ['MPPT Repair', 'Inverter Fix', 'Controller Service', 'Firmware Update', 'Performance Test'],
      support: '6 Month Warranty',
      popular: false
    }
  ];

  // Process steps
  const processSteps = [
    { step: '01', title: 'Request Service', description: 'Call us or fill the online form', icon: 'fa-solid fa-phone' },
    { step: '02', title: 'Site Visit', description: 'Our engineer visits your location', icon: 'fa-solid fa-building' },
    { step: '03', title: 'Free Estimate', description: 'Get transparent pricing', icon: 'fa-solid fa-sack-dollar' },
    { step: '04', title: 'Service Delivery', description: 'Professional service completion', icon: 'fa-solid fa-circle-check' },
    { step: '05', title: 'Quality Check', description: '100% satisfaction guarantee', icon: 'fa-solid fa-star' },
    { step: '06', title: 'Follow-up', description: 'Post-service support', icon: 'fa-solid fa-rotate' }
  ];

  // Why choose us
  const whyChooseUs = [
    { icon: 'fa-solid fa-user-gear', title: 'Certified Engineers', description: 'All our technicians are factory-trained and certified.' },
    { icon: 'fa-solid fa-rocket', title: 'Rapid Response', description: '4-hour response time for emergency services.' },
    { icon: 'fa-solid fa-sack-dollar', title: 'Best Prices', description: 'Transparent pricing with no hidden charges.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Warranty', description: '90-day service warranty on all repairs.' },
    { icon: 'fa-solid fa-star', title: '5-Star Rated', description: '4.8/5 rating from 1000+ satisfied customers.' },
    { icon: 'fa-solid fa-clipboard-list', title: 'Digital Reports', description: 'Get detailed service reports via email.' }
  ];

  // Testimonials
  const testimonials = [
    { name: 'Rajesh Patil', company: 'Patil Industries', rating: 5, comment: 'Excellent AMC service! They maintain all our UPS systems. Very professional team.' },
    { name: 'Priya Deshmukh', company: 'Deshmukh Hospital', rating: 5, comment: 'Emergency service at 11 PM and they fixed our UPS in 2 hours. Highly recommended!' },
    { name: 'Amit Gupta', company: 'Gupta Enterprises', rating: 4, comment: 'Solar installation was smooth and hassle-free. Good workmanship.' }
  ];

  // Filter services by category
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  // Popular services
  const popularServices = services.filter(service => service.popular);

  return (
    <div className={styles.servicesPage}>
      
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>OUR SERVICES</div>
          <h1 className={styles.title}>
            Professional Power <span className={styles.highlight}>Solutions & Support</span>
          </h1>
          <p className={styles.subtitle}>
            From installation to maintenance, we provide end-to-end power services you can rely on 24/7
          </p>
        </div>
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== SERVICE CATEGORIES TABS ===== */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.tabsContainer}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.tabBtn} ${activeTab === category.id ? styles.active : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className={styles.tabIcon}><i className={category.icon} aria-hidden="true"></i></span>
                <span className={styles.tabName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES (POPULAR) ===== */}
      {activeTab === 'all' && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <div className={styles.sectionBadge}>MOST POPULAR</div>
            <h2 className={styles.sectionTitle}>Customer Favorites</h2>
            <p className={styles.sectionSubtitle}>
              Trusted by hundreds of businesses across Pune
            </p>

            <div className={styles.featuredGrid}>
              {popularServices.slice(0, 3).map((service) => (
                <div key={service.id} className={styles.featuredCard}>
                  <div className={styles.featuredBadge}>Most Popular</div>
                  <div className={styles.serviceIconLarge}><i className={service.icon} aria-hidden="true"></i></div>
                  <h3>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <a className={styles.bookNowBtn} href="tel:7393939520">Book Now</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ALL SERVICES GRID ===== */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <div className={styles.sectionBadge}>
              {activeTab === 'all' ? 'ALL SERVICES' : categories.find(c => c.id === activeTab)?.name.toUpperCase()}
            </div>
            <h2 className={styles.sectionTitle}>
              {activeTab === 'all' 
                ? 'Complete Range of Power Services' 
                : categories.find(c => c.id === activeTab)?.name}
            </h2>
            <p className={styles.serviceCount}>
              Showing {filteredServices.length} services
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {filteredServices.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                {service.popular && <span className={styles.popularTag}>Popular</span>}
                <div className={styles.serviceIcon}><i className={service.icon} aria-hidden="true"></i></div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  
                  <div className={styles.featuresList}>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <span key={index} className={styles.featureTag}><i className="fa-solid fa-check" aria-hidden="true"></i> {feature}</span>
                    ))}
                  </div>

                  <div className={styles.serviceDetails}>
                    <span className={styles.serviceSupport}><i className="fa-solid fa-shield-halved" aria-hidden="true"></i> {service.support}</span>
                  </div>

                  <div className={styles.serviceFooter}>
                    <a className={styles.enquiryBtn} href="tel:7393939520">Get Quote</a>
                    <Link to="/contact" className={styles.detailsBtn}>View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>HOW IT WORKS</div>
          <h2 className={styles.sectionTitle}>Our Service Process</h2>
          <p className={styles.sectionSubtitle}>
            Simple, transparent, and hassle-free
          </p>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIcon}><i className={step.icon} aria-hidden="true"></i></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>WHY CHOOSE US</div>
          <h2 className={styles.sectionTitle}>We Deliver Excellence</h2>
          <p className={styles.sectionSubtitle}>
            Here's why customers trust us with their power needs
          </p>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className={styles.whyCard}>
                <div className={styles.whyIcon}><i className={item.icon} aria-hidden="true"></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>TESTIMONIALS</div>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>
            Real feedback from our valued customers
          </p>

          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialComment}>"{testimonial.comment}"</p>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
                  ))}
                </div>
                <h4>{testimonial.name}</h4>
                <span className={styles.companyName}>{testimonial.company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className={styles.serviceArea}>
        <div className={styles.container}>
          <div className={styles.areaContent}>
            <div className={styles.sectionBadge}>SERVICE AREA</div>
            <h2 className={styles.sectionTitle}>Serving Across Pune</h2>
            <p className={styles.areaText}>
              We provide our services across Pune and nearby areas including:
            </p>
            <div className={styles.areaTags}>
              <span className={styles.areaTag}>Pune City</span>
              <span className={styles.areaTag}>Pimpri-Chinchwad</span>
              <span className={styles.areaTag}>Hinjewadi</span>
              <span className={styles.areaTag}>Hadapsar</span>
              <span className={styles.areaTag}>Baner</span>
              <span className={styles.areaTag}>Kothrud</span>
              <span className={styles.areaTag}>Viman Nagar</span>
              <span className={styles.areaTag}>Wakad</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Need Immediate Service?</h2>
          <p>Our team is ready to assist you 24/7. Call us now or book online.</p>
          <div className={styles.ctaButtons}>
            <a className={styles.btnPrimary} href="tel:7393939520"><i className="fa-solid fa-phone" aria-hidden="true"></i> Call Now: 7393939520</a>
            <Link to="/contact" className={styles.btnOutline}><i className="fa-solid fa-clipboard-list" aria-hidden="true"></i> Book Service Online</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

