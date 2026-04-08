import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const currentLang = lang || 'en';
    const otherLang = currentLang === 'en' ? 'fr' : 'en';

    const l = (path) => `/${currentLang}${path}`;

    const toggleLanguage = () => {
        const rest = location.pathname.replace(`/${currentLang}`, '') || '/';
        navigate(`/${otherLang}${rest}${location.search}${location.hash}`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to={l('/')} className="nav-logo">
                    <img src="/images/branding/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" />
                    <span>PyCon CM</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                    <NavLink to={l('/about')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.about')}</NavLink>
                    <NavLink to={l('/speakers')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.speakers')}</NavLink>
                    <NavLink to={l('/sponsor')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.sponsor')}</NavLink>
                    <NavLink to={l('/attend')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.attend')}</NavLink>
                    <NavLink to={l('/venue')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.venue')}</NavLink>
                    <NavLink to={l('/ubucon')} className={({ isActive }) => isActive ? "active" : ""} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <img src="/images/partners/canonical-cm.webp" alt="" style={{ width: '18px', height: '18px', objectFit: 'contain', borderRadius: '50%' }} />
                        {t('nav.ubucon')}
                    </NavLink>
                    <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
                        <Languages size={16} />
                        {currentLang === 'en' ? 'FR' : 'EN'}
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
                        <Link to={l('/')} className="nav-logo" onClick={() => setIsOpen(false)}>
                            <img src="/images/branding/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" />
                            <span>PyCon CM</span>
                        </Link>
                    </div>
                    <div className="nav-drawer-links">
                        <NavLink to={l('/about')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.about')}</NavLink>
                        <NavLink to={l('/speakers')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.speakers')}</NavLink>
                        <NavLink to={l('/sponsor')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.sponsor')}</NavLink>
                        <NavLink to={l('/attend')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.attend')}</NavLink>
                        <NavLink to={l('/venue')} className={({ isActive }) => isActive ? "active" : ""}>{t('nav.venue')}</NavLink>
                        <NavLink to={l('/ubucon')} className={({ isActive }) => isActive ? "active" : ""} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <img src="/images/partners/canonical-cm.webp" alt="" style={{ width: '22px', height: '22px', objectFit: 'contain', borderRadius: '50%' }} />
                            {t('nav.ubucon')}
                        </NavLink>
                        <div className="nav-drawer-actions">
                            <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
                                <Languages size={18} />
                                {currentLang === 'en' ? 'FR' : 'EN'}
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
