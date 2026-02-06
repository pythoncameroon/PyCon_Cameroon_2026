/**
 * PyCon Cameroon 2026
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initNavbarScroll();
    initScrollTop();
    initAnimations();
    initAccordion();
});

/**
 * Accordion Functionality
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Close other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/**
 * Navbar Scroll Effect
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Check initial state
        handleScroll();
    }
}

/**
 * Scroll to Top Button
 */
function initScrollTop() {
    const scrollTopBtn = document.getElementById("scrollTop");

    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        }, { passive: true });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

/**
 * Enhanced Scroll Animations using IntersectionObserver
 * Supports all animation classes including new ones
 */
function initAnimations() {
    // All elements with animation classes
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

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        // Set initial state
        if (!el.classList.contains('visible')) {
            el.style.opacity = '0';
        }
        observer.observe(el);
    });
}
