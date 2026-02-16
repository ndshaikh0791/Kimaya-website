import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-img.jpg';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                        <h3>Datta Power Solutions</h3>
                    </div>
                    <p>Datta Power Solutions - your trusted partner for reliable power solutions.</p>
                    <div className="support-badge">
                        <span>Support</span> 24/7 Available
                    </div>
                    <div className="footer-social" aria-label="Social media links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href="https://wa.me/7393939520" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">AMC Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Products</h4>
                    <ul>
                        <li>Online UPS Systems</li>
                        <li>Solar Solutions</li>
                        <li>Lift Inverters</li>
                        <li>Batteries and Stabilizers</li>
                        <li>Electrical Materials</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <div className="contact-details">
                        <p><span>Phone:</span> 7393939520 / 9028564485</p>
                        <p><span>Email:</span> info@dattapower.com</p>
                        <p><span>Address:</span> Basement, Kanta Heights, Narhe, Pune 411046</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Sanvi Softech Solutions - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;



