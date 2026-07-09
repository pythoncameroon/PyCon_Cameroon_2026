import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname, hash, search } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        const id = decodeURIComponent(hash.slice(1));
        let attempts = 0;
        let timer;

        const scrollToTarget = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                timer = setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ block: 'start' });
                }, 400);
                return;
            }
            if (attempts++ < 50) {
                timer = setTimeout(scrollToTarget, 100);
            }
        };

        scrollToTarget();
        return () => clearTimeout(timer);
    }, [pathname, hash, search]);

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
