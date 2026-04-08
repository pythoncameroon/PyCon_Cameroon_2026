import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

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

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/images/branding/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" />
                    <span>PyCon CM</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.about')}</NavLink>
                    <NavLink to="/speakers" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.speakers')}</NavLink>
                    <NavLink to="/sponsor" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.sponsor')}</NavLink>
                    <NavLink to="/attend" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.attend')}</NavLink>
                    <NavLink to="/venue" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.venue')}</NavLink>
                    <NavLink to="/ubucon" className={({ isActive }) => isActive ? "active" : ""} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <img src="/images/partners/canonical-cm.webp" alt="" style={{ width: '18px', height: '18px', objectFit: 'contain', borderRadius: '50%' }} />
                        {t('nav.ubucon')}
                    </NavLink>
                    <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
                        <Languages size={16} />
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                    </button>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile drawer overlay */}
                {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}

                {/* Mobile drawer */}
                <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
                    <button
                        className="nav-drawer-close"
                        aria-label="Close menu"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                    <div className="nav-drawer-header">
                        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                            <img src="/images/branding/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" />
                            <span>PyCon CM</span>
                        </Link>
                    </div>
                    <div className="nav-drawer-links">
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.about')}</NavLink>
                        <NavLink to="/speakers" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.speakers')}</NavLink>
                        <NavLink to="/sponsor" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.sponsor')}</NavLink>
                        <NavLink to="/attend" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.attend')}</NavLink>
                        <NavLink to="/venue" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.venue')}</NavLink>
                        <NavLink to="/ubucon" className={({ isActive }) => isActive ? "active" : ""} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <img src="/images/partners/canonical-cm.webp" alt="" style={{ width: '22px', height: '22px', objectFit: 'contain', borderRadius: '50%' }} />
                            {t('nav.ubucon')}
                        </NavLink>
                        <div className="nav-drawer-actions">
                            <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
                                <Languages size={18} />
                                {i18n.language === 'en' ? 'FR' : 'EN'}
                            </button>
                            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {!isOpen && (
                    <button
                        className="nav-toggle"
                        id="navToggle"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(true)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
            </div>
            <div className="tribal-border"></div>
        </nav>
    );
};

export default Navbar;
