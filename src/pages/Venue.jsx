import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MapPin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import VenueCard from '../components/VenueCard';
import VenueCarousel from '../components/VenueCarousel';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { venueData as venueImages } from '../data/venues';
import { venuePhotos } from '../data/venuePhotos';

const Venue = () => {
    const { t } = useTranslation();
    const { l } = useLocalizedPath();
    useScrollAnimation();

    const facilityItems = t('venue.facilityItems', { returnObjects: true });
    const translatedVenues = t('data.venues', { returnObjects: true });
    const translatedPhotos = t('venue.photos', { returnObjects: true });
    const carouselImages = venuePhotos.map((photo, index) => ({
        ...photo,
        alt: translatedPhotos[index]?.alt || t('venue.venueName'),
    }));

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('venue.title')} <span className="text-gradient">{t('venue.titleHighlight')}</span></h1>
                    <p>{t('venue.subtitle')}</p>
                </div>
            </header>

            {/* Location Section */}
            <section className="section bg-dark" id="venue-location">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('venue.locationTitle')} <span className="text-gradient">{t('venue.locationHighlight')}</span></h2>

                            <div className="card" style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>{t('venue.venueName')}</h3>
                                <p className="card-text">
                                    {t('venue.venueCity')}<br />
                                    {t('venue.venueAddress')}
                                </p>
                                <a href="https://www.google.com/maps/search/?api=1&query=Girafe+H%C3%B4tel+Elig-Essono+Yaound%C3%A9" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: 'var(--spacing-sm)' }}>
                                    <ExternalLink size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem' }} />
                                    {t('venue.openInMaps')}
                                </a>
                            </div>

                            <p>{t('venue.finalizingVenue')}</p>

                            <p>{t('venue.expectFacility')}</p>

                            <ul style={{ marginTop: 'var(--spacing-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                                {Array.isArray(facilityItems) && facilityItems.map((item, index) => (
                                    <li key={index}><Check size="1em" style={{ display: 'inline', verticalAlign: '-0.125em', marginRight: '0.25rem' }} />{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="venue-media">
                            <VenueCarousel images={carouselImages} />
                            <div className="venue-map">
                                <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
                                    title="Girafe Hotel map" src="https://www.google.com/maps?q=Girafe+H%C3%B4tel+Elig-Essono+Yaound%C3%A9&z=16&output=embed">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            {/* Getting There & Accommodation */}
            <section className="section" id="venue-plan-trip">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('venue.planTripTitle')} <span className="text-gradient">{t('venue.planTripHighlight')}</span></h2>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                        <div className="card bg-dark">
                            <div className="card-icon">
                                <img src="/images/general/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Accommodation" loading="lazy" />
                            </div>
                            <h3>{t('venue.accommodation')}</h3>
                            <p className="mb-md">
                                {t('venue.accommodationText')}
                            </p>
                            <p>
                                <strong>{t('venue.officialHotels')}</strong> {t('venue.hotelsSoon')}
                            </p>
                            <p className="card-text">
                                {t('venue.accommodationRange')}
                            </p>
                        </div>

                        <div className="card bg-dark">
                            <div className="card-icon">
                                <img src="/images/general/4f58e509d7713f4e1f5ec84e95175c61.webp" alt="Travel" loading="lazy" />
                            </div>
                            <h3>{t('venue.gettingThere')}</h3>
                            <p className="mb-md">
                                <strong>{t('venue.byAir')}</strong> {t('venue.byAirText')}
                            </p>
                            <p className="mb-md">
                                <strong>{t('venue.byBus')}</strong> {t('venue.byBusText')}
                            </p>
                            <p className="card-text">
                                {t('venue.rideHailing')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Yaoundé */}
            <section className="section bg-dark" id="venue-explore">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('venue.exploreTitle')} <span className="text-gradient">{t('venue.exploreHighlight')}</span></h2>
                        <p>{t('venue.exploreSubtitle')}</p>
                    </div>

                    <div className="grid grid-3 stagger">
                        {venueImages.slice(0, 3).map((venue, index) => (
                            <VenueCard key={index} venue={{ ...venue, name: translatedVenues[index]?.name || venue.name, description: translatedVenues[index]?.description || venue.description }} />
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
                        <Link to={l('/tourist-sites')} className="btn btn-secondary">
                            <MapPin size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem' }} />
                            {t('venue.exploreMore')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Venue;
