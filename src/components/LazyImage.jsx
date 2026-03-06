import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className, style, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={imgRef}
            className={`lazy-image-wrapper ${loaded ? 'loaded' : ''}`}
            style={style}
        >
            {!loaded && <div className="lazy-image-skeleton" />}
            {inView && (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={() => setLoaded(true)}
                    {...props}
                />
            )}
        </div>
    );
};

export default LazyImage;
