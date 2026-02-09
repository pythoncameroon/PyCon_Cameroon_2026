import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollAnimation = () => {
    const location = useLocation();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scrolled-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll(`
            .animate-on-scroll,
            .animate-slide-up,
            .animate-slide-left,
            .animate-slide-right,
            .animate-slide-down,
            .animate-fade-scale,
            .animate-bounce-in,
            .animate-flip-in,
            .animate-rotate-in,
            .animate-zoom-in,
            .animate-fade-in
        `);

        animateElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            animateElements.forEach(el => observer.unobserve(el));
        };
    }, [location]); // Re-run on route change
};

export default useScrollAnimation;
