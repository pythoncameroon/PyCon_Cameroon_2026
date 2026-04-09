import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname, hash, search } = useLocation();
    const navigate = useNavigate();

    // Scroll to top on route change, or to hash target if present
    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                    navigate(pathname + search, { replace: true });
                }, 100);
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash, search, navigate]);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            id="scrollTop"
            className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
            aria-label="Scroll to top"
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTop;
