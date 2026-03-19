import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        if (isOpen) {
            setIsOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
        }
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/Images/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" />
                    <span>PyCon CM</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="/speakers" className={({ isActive }) => isActive ? "active" : ""}>Speakers</NavLink>
                    <NavLink to="/sponsor" className={({ isActive }) => isActive ? "active" : ""}>Sponsor</NavLink>
                    <NavLink to="/attend" className={({ isActive }) => isActive ? "active" : ""}>Attend</NavLink>
                    <NavLink to="/venue" className={({ isActive }) => isActive ? "active" : ""}>Venue</NavLink>
                </div>

                <button
                    className="nav-toggle"
                    id="navToggle"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="tribal-border"></div>
        </nav>
    );
};

export default Navbar;
