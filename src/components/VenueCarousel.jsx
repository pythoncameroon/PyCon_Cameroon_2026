import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SWIPE_THRESHOLD = 40;

const VenueCarousel = ({ images, interval = 6000 }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef(null);
    const count = images.length;

    const goTo = useCallback((next) => setIndex(((next % count) + count) % count), [count]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);
    const next = useCallback(() => goTo(index + 1), [goTo, index]);

    useEffect(() => {
        if (paused || count < 2) return undefined;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
        const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
        return () => clearInterval(id);
    }, [paused, count, interval]);

    const onKeyDown = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    };

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta > SWIPE_THRESHOLD) prev();
        else if (delta < -SWIPE_THRESHOLD) next();
    };

    if (!count) return null;

    return (
        <div
            className="venue-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={t('venue.galleryLabel')}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="venue-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((image, i) => (
                    <div
                        key={image.src}
                        className="venue-carousel-slide"
                        aria-hidden={i !== index}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {count > 1 && (
                <>
                    <button type="button" className="venue-carousel-btn prev" onClick={prev} aria-label={t('venue.prevPhoto')}>
                        <ChevronLeft size="1.5rem" />
                    </button>
                    <button type="button" className="venue-carousel-btn next" onClick={next} aria-label={t('venue.nextPhoto')}>
                        <ChevronRight size="1.5rem" />
                    </button>

                    <div className="venue-carousel-dots" role="tablist">
                        {images.map((image, i) => (
                            <button
                                key={image.src}
                                type="button"
                                role="tab"
                                aria-selected={i === index}
                                aria-label={t('venue.goToPhoto', { n: i + 1, total: count })}
                                className={i === index ? 'active' : ''}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default VenueCarousel;
