import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const internationalTiers = [
    {
        name: 'Diamond',
        className: 'diamond',
        price: 'USD 5,000',
        description: 'The ultimate sponsorship package for maximum visibility and impact.',
        features: [
            'Premium booth placement',
            'Keynote speaking opportunity',
            '2 speaking slots',
            '10 conference tickets',
            'Large branding on signage & materials',
            'Top-tier logo placement on website',
            'Dedicated sponsor page on website',
            'Mention in all press releases',
        ],
        btnClass: 'btn btn-primary btn-diamond',
        btnStyle: { width: '100%' },
    },
    {
        name: 'Gold',
        className: 'gold',
        price: 'USD 3,500',
        description: 'Excellent visibility and engagement opportunities.',
        features: [
            'Exhibition booth',
            '1 speaking slot',
            '5 conference tickets',
            'Medium branding on signage & materials',
            'Tier 2 logo placement on website',
            'Mention in press releases',
        ],
        btnClass: 'btn btn-primary btn-gold',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' },
    },
    {
        name: 'Silver',
        className: 'silver',
        price: 'USD 2,000',
        description: 'Great value for companies looking to support the community.',
        features: [
            '1 speaking slot',
            '3 conference tickets',
            'Tier 3 logo placement on website',
        ],
        btnClass: 'btn btn-primary btn-silver',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-text-secondary)' },
    },
    {
        name: 'Bronze',
        className: 'bronze',
        price: 'USD 1,000',
        description: 'Ideal for startups and smaller organizations.',
        features: [
            '1 speaking slot',
            '1 conference ticket',
            'Company logo on website',
            'Branding on select materials',
        ],
        btnClass: 'btn btn-primary btn-bronze',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid #cd7f32', color: '#cd7f32' },
    },
    {
        name: 'Community',
        className: 'community',
        price: 'USD 500',
        description: 'Ideal for startups and smaller organizations.',
        features: [
            '1 conference ticket',
            'Company logo on website',
            'Branding on select materials',
        ],
        btnClass: 'btn btn-primary',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-green)', color: 'var(--color-green)' },
    },
];

const localTiers = [
    {
        name: 'Diamond',
        className: 'diamond',
        price: 'XAF 1,000,000',
        priceNote: 'Approx. $2,500 USD',
        description: 'The ultimate sponsorship package for maximum visibility and impact.',
        features: [
            'Premium booth placement',
            'Keynote speaking opportunity',
            '2 speaking slots',
            '10 conference tickets',
            'Large branding on signage & materials',
            'Top-tier logo placement on website',
            'Dedicated sponsor page on website',
            'Mention in all press releases',
        ],
        btnClass: 'btn btn-primary btn-diamond',
        btnStyle: { width: '100%' },
    },
    {
        name: 'Gold',
        className: 'gold',
        price: 'XAF 500,000',
        priceNote: 'Approx. $1,000 USD',
        description: 'Excellent visibility and engagement opportunities.',
        features: [
            'Exhibition booth',
            '1 speaking slot',
            '5 conference tickets',
            'Medium branding on signage & materials',
            'Tier 2 logo placement on website',
            'Mention in press releases',
        ],
        btnClass: 'btn btn-primary btn-gold',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' },
    },
    {
        name: 'Silver',
        className: 'silver',
        price: 'XAF 375,000',
        priceNote: 'Approx. $700 USD',
        description: 'Great value for companies looking to support the community.',
        features: [
            '1 speaking slot',
            '3 conference tickets',
            'Conference signage with branding',
            'Tier 3 logo placement on website',
        ],
        btnClass: 'btn btn-primary btn-silver',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-text-secondary)' },
    },
    {
        name: 'Bronze',
        className: 'bronze',
        price: 'XAF 100,000',
        priceNote: 'Approx. $200 USD',
        description: 'Ideal for startups and smaller organizations.',
        features: [
            '1 speaking slot',
            '1 conference ticket',
            'Company logo on website',
            'Branding on select materials',
        ],
        btnClass: 'btn btn-primary btn-bronze',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid #cd7f32', color: '#cd7f32' },
    },
    {
        name: 'Community',
        className: 'community',
        price: 'XAF 50,000',
        priceNote: 'Approx. $100 USD',
        description: 'Ideal for startups and smaller organizations.',
        features: [
            '1 conference ticket',
            'Company logo on website',
            'Branding on select materials',
        ],
        btnClass: 'btn btn-primary',
        btnStyle: { width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-green)', color: 'var(--color-green)' },
    },
];

const Sponsor = () => {
    useScrollAnimation();
    const [isLocal, setIsLocal] = useState(false);
    const tiers = isLocal ? localTiers : internationalTiers;

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>Become a <span className="text-gradient">Sponsor</span></h1>
                    <p>Join us in shaping the future of Python in Cameroon and Central Africa</p>
                </div>
            </header>

            {/* Why Sponsor Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Why Sponsor <span className="text-gradient">PyCon CM?</span></h2>
                            <p>
                                PyCon Cameroon brings together developers, engineers, data scientists, and tech
                                enthusiasts from across East and Central Africa for an unforgettable celebration
                                of Python programming.
                            </p>

                            <ul style={{ marginTop: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <span style={{ color: 'var(--color-orange)', fontSize: '1.25rem' }}>✨</span>
                                    <div>
                                        <strong>Connect with Top Talent</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            Engage directly with hundreds of passionate Python developers,
                                            from beginners to experts.
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <span style={{ color: 'var(--color-orange)', fontSize: '1.25rem' }}>📢</span>
                                    <div>
                                        <strong>Build Brand Awareness</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            Showcase your company to a highly engaged technical audience
                                            in the growing African tech ecosystem.
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <span style={{ color: 'var(--color-orange)', fontSize: '1.25rem' }}>🤝</span>
                                    <div>
                                        <strong>Support the Community</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            Help foster the growth of Python programming in Cameroon and
                                            contribute to technological advancement in the region.
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <span style={{ color: 'var(--color-orange)', fontSize: '1.25rem' }}>🔍</span>
                                    <div>
                                        <strong>Recruitment Opportunities</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            Meet potential candidates face-to-face in a dynamic,
                                            technology-focused environment.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Our Impact</h3>

                                <div className="grid grid-2">
                                    <div className="mb-md">
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-orange)' }}>500+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Expected Attendees</div>
                                    </div>
                                    <div className="mb-md">
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-green)' }}>30+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Technical Talks</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue)' }}>10+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Countries Represented</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>1M+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Digital Reach</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Sponsorship Tiers */}
            <section className="section" id="tiers">
                <div className="container">
                    <div className="section-header">
                        <h2>Sponsorship <span className="text-gradient">Tiers</span></h2>
                        <p>Choose the package that best fits your goals</p>
                    </div>

                    {/* Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{
                            display: 'inline-flex',
                            background: 'var(--color-dark)',
                            borderRadius: '50px',
                            padding: '4px',
                            border: '1px solid var(--color-border)',
                        }}>
                            <button
                                onClick={() => setIsLocal(false)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    background: !isLocal ? 'var(--color-orange)' : 'transparent',
                                    color: !isLocal ? 'white' : 'var(--color-text-secondary)',
                                }}
                            >
                                International (USD)
                            </button>
                            <button
                                onClick={() => setIsLocal(true)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    background: isLocal ? 'var(--color-orange)' : 'transparent',
                                    color: isLocal ? 'white' : 'var(--color-text-secondary)',
                                }}
                            >
                                Local (XAF)
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-2 stagger">
                        {tiers.map((tier) => (
                            <div key={tier.name} className={`card sponsor-card ${tier.className} animate-on-scroll slide-up`}>
                                <div className="sponsor-tier">{tier.name === 'Community' ? 'Community Package' : `${tier.name} Tier`}</div>
                                <div className="sponsor-price">{tier.price}</div>
                                {tier.priceNote && (
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                        ({tier.priceNote})
                                    </div>
                                )}

                                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                    {tier.description}
                                </p>

                                <ul className="sponsor-features">
                                    {tier.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <a href={`mailto:organizers@pythoncameroon.org?subject=${tier.name} Sponsorship Inquiry`}
                                    className={tier.btnClass}
                                    style={tier.btnStyle}>Select {tier.name}</a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-lg">
                        <p className="mb-md">
                            {isLocal
                                ? 'Prices are listed in XAF (Cameroon Franc). USD equivalent shown for reference.'
                                : 'Prices are listed in USD. Payment in local currency (XAF) is also accepted.'}
                        </p>
                        <div className="alert alert-info">
                            <strong>Custom Packages:</strong> Don't see a package that fits your needs?
                            We're happy to discuss custom sponsorship opportunities!
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>Get Involved Today</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        Join companies that are leading the way in supporting the Python community in Africa.
                    </p>
                    <a href="mailto:organizers@pythoncameroon.org" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)' }}>
                        Contact Us for Sponsorship
                    </a>
                </div>
            </section>
        </>
    );
};

export default Sponsor;
