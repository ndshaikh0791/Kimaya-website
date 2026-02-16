import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo-img.jpg';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = 'primary-navigation';

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="logo-section" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo" className="company-logo" />
                    <div className="company-name">
                        <h1 className="brand-title">Datta Power Solutions</h1>
                        <span className="brand-subtitle">Datta Power Solutions</span>
                    </div>
                </Link>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls={menuId}
                >
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                </button>

                {/* Nav Menu */}
                <div id={menuId} className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <div className="nav-links">
                        <NavLink to="/" onClick={() => setMenuOpen(false)}><span className="nav-link-label">Home</span></NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}><span className="nav-link-label">About Us</span></NavLink>
                        <NavLink to="/products" onClick={() => setMenuOpen(false)}><span className="nav-link-label">Products</span></NavLink>
                        <NavLink to="/services" onClick={() => setMenuOpen(false)}><span className="nav-link-label">Services</span></NavLink>
                        <NavLink to="/contact" onClick={() => setMenuOpen(false)}><span className="nav-link-label">Contact</span></NavLink>
                    </div>
                </div>

                {/* Desktop Quote */}
                <Link to="/contact" className="desktop-quote-btn">Get Quote</Link>
            </div>
        </nav>
    );
}

export default Navbar;

