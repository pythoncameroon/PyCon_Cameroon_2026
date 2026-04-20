import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import VenueCard from '../components/VenueCard';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { venueData as venueImages } from '../data/venues';

const Venue = () => {
    const { t } = useTranslation();
    const { l } = useLocalizedPath();
    useScrollAnimation();

    const facilityItems = t('venue.facilityItems', { returnObjects: true });
    const translatedVenues = t('data.venues', { returnObjects: true });

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
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('venue.locationTitle')} <span className="text-gradient">{t('venue.locationHighlight')}</span></h2>

                            <div className="card" style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>{t('venue.venueName')}</h3>
                                <p className="card-text">
                                    {t('venue.venueCity')}<br />
                                    {t('venue.addressSoon')}
                                </p>
                            </div>

                            <p>{t('venue.finalizingVenue')}</p>

                            <p>{t('venue.expectFacility')}</p>

                            <ul style={{ marginTop: 'var(--spacing-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                                {Array.isArray(facilityItems) && facilityItems.map((item, index) => (
                                    <li key={index}><Check size="1em" style={{ display: 'inline', verticalAlign: '-0.125em', marginRight: '0.25rem' }} />{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ height: '400px', background: '#333', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
                            <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63675.71966952737!2d11.47957790899039!3d3.848032766624866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1684490000000!5m2!1sen!2scm">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            {/* Getting There & Accommodation */}
            <section className="section">
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
            <section className="section bg-dark">
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
