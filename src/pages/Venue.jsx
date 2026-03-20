import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import VenueCard from '../components/VenueCard';
import { venueData } from '../data/venues';

const Venue = () => {
    useScrollAnimation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>The <span className="text-gradient">Venue</span></h1>
                    <p>Join us in the beautiful city of Yaoundé, the political capital of Cameroon</p>
                </div>
            </header>

            {/* Location Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Conference <span className="text-gradient">Location</span></h2>

                            <div className="card" style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>PyCon CM Venue (TBD)</h3>
                                <p className="card-text">
                                    Yaoundé, Cameroon<br />
                                    Address Details Coming Soon
                                </p>
                            </div>

                            <p>
                                We are currently finalizing the perfect venue to host PyCon Cameroon 2026.
                                We're looking for a space that embodies the spirit of our community—modern,
                                accessible, and vibrant.
                            </p>

                            <p>Expect a state-of-the-art facility with:</p>

                            <ul style={{ marginTop: 'var(--spacing-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                                <li>✓ High-speed internet connectivity</li>
                                <li>✓ Modern audiovisual equipment</li>
                                <li>✓ Comfortable seating and workspaces</li>
                                <li>✓ Accessible facilities for all attendees</li>
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
                        <h2>Plan Your <span className="text-gradient">Trip</span></h2>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                        <div className="card bg-dark">
                            <div className="card-icon">
                                <img src="/images/general/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Accommodation" loading="lazy" />
                            </div>
                            <h3>Accommodation</h3>
                            <p className="mb-md">
                                We will be partnering with several hotels near the conference venue
                                to offer special rates for attendees.
                            </p>
                            <div className="alert alert-info">
                                <strong>Official Hotels:</strong> List coming soon once venue is confirmed!
                            </div>
                            <p className="card-text">
                                Yaoundé offers a range of accommodation options from luxury hotels
                                to budget-friendly guesthouses.
                            </p>
                        </div>

                        <div className="card bg-dark">
                            <div className="card-icon">
                                <img src="/images/general/4f58e509d7713f4e1f5ec84e95175c61.webp" alt="Travel" loading="lazy" />
                            </div>
                            <h3>Getting There</h3>
                            <p className="mb-md">
                                <strong>By Air:</strong> Yaoundé Nsimalen International Airport (NSI)
                                is the main airport serving the city.
                            </p>
                            <p className="mb-md">
                                <strong>By Bus:</strong> Several reliable bus companies operate
                                routes connecting Yaoundé to other major cities like Douala.
                            </p>
                            <p className="card-text">
                                Ride-hailing apps like Yango and local taxis are widely available
                                for getting around the city.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Yaoundé */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Explore <span className="text-gradient">Yaoundé</span></h2>
                        <p>Enjoy the city of seven hills during your stay</p>
                    </div>

                    <div className="grid grid-3 stagger">
                        {venueData.map((venue, index) => (
                            <VenueCard key={index} venue={venue} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Venue;
