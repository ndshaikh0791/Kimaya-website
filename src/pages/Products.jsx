import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products = () => {
  // State for category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories data
  const categories = [
    { id: 'all', name: 'All Products', icon: 'fa-solid fa-box' },
    { id: 'ups', name: 'UPS Systems', icon: 'fa-solid fa-bolt' },
    { id: 'solar', name: 'Solar Solutions', icon: 'fa-solid fa-sun' },
    { id: 'battery', name: 'Batteries', icon: 'fa-solid fa-car-battery' },
    { id: 'stabilizer', name: 'Stabilizers', icon: 'fa-solid fa-gear' },
    { id: 'electrical', name: 'Electrical', icon: 'fa-solid fa-plug' }
  ];

  // Products data
  const products = [
    // UPS Systems
    {
      id: 1,
      category: 'ups',
      name: 'Online UPS 10KVA',
      brand: 'Luminous',
      description: 'Double conversion online UPS for critical equipment, pure sine wave output, 10KVA capacity.',
      features: ['Pure Sine Wave', 'LCD Display', 'Automatic Bypass', 'SNMP Compatible'],
      warranty: '2 Years',
      icon: 'fa-solid fa-bolt',
      popular: true
    },
    {
      id: 2,
      category: 'ups',
      name: 'Online UPS 20KVA',
      brand: 'Exide',
      description: 'High-frequency online UPS with IGBT technology, ideal for servers and data centers.',
      features: ['IGBT Technology', 'Parallelable', 'ECO Mode', 'Advanced Battery Management'],
      warranty: '2 Years',
      icon: 'fa-solid fa-bolt',
      popular: false
    },
    {
      id: 3,
      category: 'ups',
      name: 'Online UPS 40KVA',
      brand: 'Su-Kam',
      description: 'Industrial grade online UPS for heavy-duty applications, 3-phase input/output.',
      features: ['3-Phase', 'Transformer Based', 'High Efficiency', 'Remote Monitoring'],
      warranty: '2 Years',
      icon: 'fa-solid fa-bolt',
      popular: true
    },
    {
      id: 4,
      category: 'ups',
      name: 'Online UPS 60KVA',
      brand: 'Schneider',
      description: 'Modular online UPS with hot-swappable modules for maximum uptime.',
      features: ['Modular Design', 'Hot-swappable', 'Scalable', 'Energy Saver'],
      warranty: '3 Years',
      icon: 'fa-solid fa-bolt',
      popular: false
    },

    // Solar Solutions
    {
      id: 5,
      category: 'solar',
      name: 'Solar PCU 5KW',
      brand: 'Luminous',
      description: 'Solar PCU with MPPT charge controller, hybrid inverter with solar priority.',
      features: ['MPPT Technology', 'Solar Priority', 'LCD Display', 'Grid-Tie Option'],
      warranty: '5 Years',
      icon: 'fa-solid fa-sun',
      popular: true
    },
    {
      id: 6,
      category: 'solar',
      name: 'Solar Panel 335W',
      brand: 'Vikram',
      description: 'Mono-crystalline solar panel with high efficiency, 25-year performance warranty.',
      features: ['Mono PERC', 'High Efficiency', 'PID Resistant', 'All-Weather'],
      warranty: '25 Years',
      icon: 'fa-solid fa-sun',
      popular: true
    },
    {
      id: 7,
      category: 'solar',
      name: 'Solar Inverter 3KW',
      brand: 'Exide',
      description: 'Grid-tie solar inverter with WiFi monitoring, works without battery.',
      features: ['Grid-Tie', 'WiFi Monitoring', 'IP65 Protection', 'No Battery Option'],
      warranty: '5 Years',
      icon: 'fa-solid fa-sun',
      popular: false
    },
    {
      id: 8,
      category: 'solar',
      name: 'Solar Pump 5HP',
      brand: 'Crompton',
      description: 'Solar water pumping system with AC/DC drive, stainless steel body.',
      features: ['5HP Capacity', 'AC/DC Drive', 'Auto Start/Stop', 'Dry Run Protection'],
      warranty: '3 Years',
      icon: 'fa-solid fa-sun',
      popular: false
    },

    // Batteries
    {
      id: 9,
      category: 'battery',
      name: 'Tubular Battery 150AH',
      brand: 'Luminous',
      description: 'Tall tubular battery with low maintenance, long backup, 150AH capacity.',
      features: ['Tall Tubular', 'Low Maintenance', 'High Efficiency', '5 Year Warranty'],
      warranty: '5 Years',
      icon: 'fa-solid fa-car-battery',
      popular: true
    },
    {
      id: 10,
      category: 'battery',
      name: 'SMF Battery 100AH',
      brand: 'Exide',
      description: 'Sealed maintenance-free battery for UPS systems, zero maintenance.',
      features: ['Sealed', 'Maintenance Free', 'VRLA Technology', 'Deep Discharge'],
      warranty: '3 Years',
      icon: 'fa-solid fa-car-battery',
      popular: false
    },
    {
      id: 11,
      category: 'battery',
      name: 'Lithium Battery 48V',
      brand: 'Su-Kam',
      description: 'Lithium-ion battery with BMS, lightweight, fast charging, 48V 100AH.',
      features: ['Lithium-Ion', 'BMS Included', 'Fast Charging', '10 Year Life'],
      warranty: '7 Years',
      icon: 'fa-solid fa-car-battery',
      popular: true
    },

    // Stabilizers
    {
      id: 12,
      category: 'stabilizer',
      name: 'Servo Stabilizer 10KVA',
      brand: 'Vertex',
      description: 'Servo voltage stabilizer for industrial equipment, ±1% accuracy.',
      features: ['Servo Controlled', 'Digital Display', 'High Accuracy', 'Overload Protection'],
      warranty: '2 Years',
      icon: 'fa-solid fa-gear',
      popular: false
    },
    {
      id: 13,
      category: 'stabilizer',
      name: 'Static Stabilizer 25KVA',
      brand: 'Delta',
      description: 'Static voltage stabilizer with IGBT technology, instant correction.',
      features: ['IGBT Based', 'Instant Correction', 'Zero Crossing', 'Energy Saving'],
      warranty: '2 Years',
      icon: 'fa-solid fa-gear',
      popular: true
    },

    // Electrical Products
    {
      id: 14,
      category: 'electrical',
      name: 'Copper Cable 4 sq mm',
      brand: 'Polycab',
      description: 'FR-LSH copper cable, 90 meter roll, fire retardant, low smoke.',
      features: ['FR-LSH', 'Pure Copper', 'ISI Marked', '90 Meter Roll'],
      warranty: '1 Year',
      icon: 'fa-solid fa-plug',
      popular: true
    },
    {
      id: 15,
      category: 'electrical',
      name: 'MCB 20A SP',
      brand: 'Havells',
      description: 'Miniature circuit breaker with C-curve, 6kA breaking capacity.',
      features: ['C-Curve', '6kA Capacity', 'Din Rail', 'ISI Marked'],
      warranty: '2 Years',
      icon: 'fa-solid fa-plug',
      popular: false
    }
  ];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Popular products
  const popularProducts = products.filter(product => product.popular);

  return (
    <div className={styles.productsPage}>
      
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>OUR PRODUCTS</div>
          <h1 className={styles.title}>
            Power Solutions <span className={styles.highlight}>For Every Need</span>
          </h1>
          <p className={styles.subtitle}>
            From UPS systems to solar energy, we offer comprehensive range of high-quality power products
          </p>
        </div>
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== CATEGORY FILTER ===== */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryIcon}><i className={category.icon} aria-hidden="true"></i></span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS (POPULAR) ===== */}
      {activeCategory === 'all' && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <div className={styles.sectionBadge}>BESTSELLERS</div>
            <h2 className={styles.sectionTitle}>Most Popular Products</h2>
            <p className={styles.sectionSubtitle}>
              Trusted by hundreds of businesses across Maharashtra
            </p>

            <div className={styles.featuredGrid}>
              {popularProducts.slice(0, 4).map((product) => (
                <div key={product.id} className={styles.featuredCard}>
                  <div className={styles.featuredBadge}>Bestseller</div>
                  <div className={styles.productIconLarge}><i className={product.icon} aria-hidden="true"></i></div>
                  <div className={styles.productBrand}>{product.brand}</div>
                  <h3>{product.name}</h3>
                  <Link to="/contact" className={styles.viewDetailsBtn}>View Details</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ALL PRODUCTS GRID ===== */}
      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.productsHeader}>
            <div className={styles.sectionBadge}>
              {activeCategory === 'all' ? 'ALL PRODUCTS' : categories.find(c => c.id === activeCategory)?.name.toUpperCase()}
            </div>
            <h2 className={styles.sectionTitle}>
              {activeCategory === 'all' 
                ? 'Complete Range of Power Solutions' 
                : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className={styles.productCount}>
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                {product.popular && <span className={styles.popularTag}>Popular</span>}
                <div className={styles.productIcon}><i className={product.icon} aria-hidden="true"></i></div>
                <div className={styles.productInfo}>
                  <span className={styles.productBrand}>{product.brand}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  <div className={styles.featuresList}>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className={styles.featureTag}><i className="fa-solid fa-check" aria-hidden="true"></i> {feature}</span>
                    ))}
                  </div>

                  <div className={styles.productMeta}>
                    <span className={styles.warranty}><i className="fa-solid fa-shield-halved" aria-hidden="true"></i> {product.warranty}</span>
                  </div>

                  <div className={styles.productFooter}>
                    <a className={styles.enquiryBtn} href="tel:7393939520">Get Quote</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS SECTION ===== */}
      <section className={styles.brands}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>AUTHORIZED DEALERS</div>
          <h2 className={styles.sectionTitle}>Brands We Trust</h2>
          <div className={styles.brandsGrid}>
            <div className={styles.brandCard}>Luminous</div>
            <div className={styles.brandCard}>Exide</div>
            <div className={styles.brandCard}>Su-Kam</div>
            <div className={styles.brandCard}>Schneider</div>
            <div className={styles.brandCard}>APC</div>
            <div className={styles.brandCard}>Delta</div>
            <div className={styles.brandCard}>Polycab</div>
            <div className={styles.brandCard}>Havells</div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Need Help Choosing the Right Product?</h2>
          <p>Our experts are here to help you find the perfect power solution for your needs.</p>
          <div className={styles.ctaButtons}>
            <a className={styles.btnPrimary} href="tel:7393939520">Talk to an Expert</a>
            <Link to="/contact" className={styles.btnOutline}>Get Product Brochure</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;

