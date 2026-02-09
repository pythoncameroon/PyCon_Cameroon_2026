import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Sponsor = () => {
    useScrollAnimation();

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

                    <div className="grid grid-2 stagger">
                        {/* Diamond Tier */}
                        <div className="card sponsor-card diamond animate-on-scroll slide-up">
                            <div className="sponsor-tier">Diamond Tier</div>
                            <div className="sponsor-price">XAF 1,105,000</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                (Approx. $2,500 USD)
                            </div>

                            <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                The ultimate sponsorship package for maximum visibility and impact.
                            </p>

                            <ul className="sponsor-features">
                                <li>Premium booth placement</li>
                                <li>Keynote speaking opportunity</li>
                                <li>5 speaking slots</li>
                                <li>20 conference tickets</li>
                                <li>Large branding on signage & materials</li>
                                <li>Top-tier logo placement on website</li>
                                <li>Dedicated sponsor story page</li>
                                <li>Mention in all press releases</li>
                            </ul>

                            <a href="mailto:organizers@pythoncameroon.org?subject=Diamond Sponsorship Inquiry"
                                className="btn btn-primary btn-diamond" style={{ width: '100%' }}>Select Diamond</a>
                        </div>

                        {/* Gold Tier */}
                        <div className="card sponsor-card gold animate-on-scroll slide-up">
                            <div className="sponsor-tier">Gold Tier</div>
                            <div className="sponsor-price">XAF 650,000</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                (Approx. $1,000 USD)
                            </div>

                            <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                Excellent visibility and engagement opportunities.
                            </p>

                            <ul className="sponsor-features">
                                <li>Exhibition booth</li>
                                <li>3 speaking slots</li>
                                <li>6 conference tickets</li>
                                <li>Medium branding on signage & materials</li>
                                <li>Tier 2 logo placement on website</li>
                                <li>Mention in press releases</li>
                            </ul>

                            <a href="mailto:organizers@pythoncameroon.org?subject=Gold Sponsorship Inquiry" className="btn btn-primary btn-gold"
                                style={{ width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>Select Gold</a>
                        </div>

                        {/* Silver Tier */}
                        <div className="card sponsor-card silver animate-on-scroll slide-up">
                            <div className="sponsor-tier">Silver Tier</div>
                            <div className="sponsor-price">XAF 260,000</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                (Approx. $700 USD)
                            </div>

                            <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                Great value for companies looking to support the community.
                            </p>

                            <ul className="sponsor-features">
                                <li>2 speaking slots</li>
                                <li>4 conference tickets</li>
                                <li>Branding on conference signage</li>
                                <li>Tier 3 logo placement on website</li>
                                <li>Sponsor story on sponsors page</li>
                            </ul>

                            <a href="mailto:organizers@pythoncameroon.org?subject=Silver Sponsorship Inquiry"
                                className="btn btn-primary btn-silver"
                                style={{ width: '100%', background: 'var(--color-dark)', border: '1px solid var(--color-text-secondary)' }}>Select Silver</a>
                        </div>

                        {/* Bronze Tier */}
                        <div className="card sponsor-card bronze animate-on-scroll slide-up">
                            <div className="sponsor-tier">Bronze Tier</div>
                            <div className="sponsor-price">XAF 130,000</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                (Approx. $100 USD)
                            </div>

                            <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                Perfect for startups and smaller organizations.
                            </p>

                            <ul className="sponsor-features">
                                <li>1 speaking slot</li>
                                <li>2 conference tickets</li>
                                <li>Social media mentions</li>
                                <li>Company logo on website</li>
                                <li>Branding on select materials</li>
                            </ul>

                            <a href="mailto:organizers@pythoncameroon.org?subject=Bronze Sponsorship Inquiry"
                                className="btn btn-primary btn-bronze"
                                style={{ width: '100%', background: 'var(--color-dark)', border: '1px solid #cd7f32', color: '#cd7f32' }}>Select Bronze</a>
                        </div>
                    </div>

                    <div className="text-center mt-lg">
                        <p className="mb-md">Prices are listed in Cameroon Currency (XAF) as per reference, but payment in USD is accepted.</p>
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
