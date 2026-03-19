import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Attend = () => {
    useScrollAnimation();
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>Attend <span className="text-gradient">PyCon</span></h1>
                    <p>Everything you need to know about registration, travel, and your stay in Yaoundé</p>
                </div>
            </header>

            {/* Registration Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Registration <span className="text-gradient">Information</span></h2>
                        <p>Register today to secure your spot at Cameroon's premier Python event</p>
                    </div>

                    <p className="text-center mb-lg" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        PyCon Cameroon trusts you to self-select a fair registration rate. By choosing the
                        appropriate rate, you help keep the conference affordable for students and those
                        requiring financial assistance.
                    </p>

                    <div className="grid grid-2 stagger" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {/* Early Bird Rate */}
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: '4px solid var(--color-orange)' }}>
                            <h3 className="card-title">Early Bird</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-orange)', margin: 'var(--spacing-sm) 0' }}>
                                3,000 XAF
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                                Limited Time Offer
                            </p>

                            <p className="card-text mb-md">
                                Secure your spot early at our special discounted rate. Available for all
                                attendees for a limited time.
                            </p>

                            <a href="https://ly.reckot.com/pycon-cameroon-2026-a4390c99-early-birds" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Get Early Bird Ticket</a>
                        </div>

                        {/* Normal Rate */}
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: '4px solid var(--color-blue)' }}>
                            <h3 className="card-title">Normal Rate</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue)', margin: 'var(--spacing-sm) 0' }}>
                                5,000 XAF
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                                Standard Admission
                            </p>

                            <p className="card-text mb-md">
                                Standard ticket price for the two-day conference, including lunch,
                                refreshments, and conference swag.
                            </p>

                            <a href="https://ly.reckot.com/pycon-cameroon-2026-a4390c99-regular" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                                style={{ width: '100%', background: 'var(--color-blue)', color: 'white' }}>Get Normal Ticket</a>
                        </div>
                    </div>


                </div>
            </section>

            {/* What's Included */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>What's Included?</h2>
                            <p className="mb-md">Your registration gives you access to:</p>

                            <div className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(0)}>Main Conference Days (Aug 28-29)</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            <li className="mb-sm">✓ Access to all keynote sessions and talk tracks</li>
                                            <li className="mb-sm">✓ Morning coffee and refreshments</li>
                                            <li className="mb-sm">✓ Delicious lunch on both days</li>
                                            <li className="mb-sm">✓ Afternoon tea/coffee break</li>
                                            <li>✓ Access to the Expo Hall and Job Fair</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(1)}>Social Events</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            <li className="mb-sm">✓ Opening Reception (Aug 27 evening)</li>
                                            <li className="mb-sm">✓ PyCon Official Dinner</li>
                                            <li>✓ Community networking sessions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordion-item ${activeAccordion === 2 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(2)}>Conference Swag</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            <li className="mb-sm">✓ Official PyCon Cameroon T-shirt</li>
                                            <li className="mb-sm">✓ Tote bag with sponsor goodies</li>
                                            <li>✓ Stickers and other fun items</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>What does your payment support?</h2>
                            <div className="card">
                                <p className="card-text mb-md">
                                    Your registration helps us keep PyCon Cameroon affordable. Costs go towards:
                                </p>
                                <ul style={{ listStyle: 'disc', marginLeft: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                                    <li className="mb-sm">Venue rental and audiovisual equipment</li>
                                    <li className="mb-sm">Catering (lunch and breaks)</li>
                                    <li className="mb-sm">Internet connectivity</li>
                                    <li className="mb-sm">Travel grants for those who need assistance</li>
                                    <li>Community infrastructure and future events</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* International Travel */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>International <span className="text-gradient">Travel & Visas</span></h2>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                        <div>
                            <h3>Visa Information</h3>
                            <p className="mb-md">
                                Most visitors to Cameroon require a visa. Please check with your local
                                Cameroonian embassy or consulate for specific requirements.
                            </p>

                            <div className="alert alert-warning">
                                <strong>Visa Letters:</strong> We can provide an official invitation letter
                                to support your visa application once you have a paid registration.
                            </div>

                            <a href="#" className="btn btn-secondary mt-sm">Request Invitation Letter</a>
                        </div>

                        <div>
                            <h3>Travel Grants</h3>
                            <p className="mb-md">
                                We are committed to making PyCon Cameroon accessible. A limited number
                                of financial aid grants are available for speakers and attendees who
                                require assistance with travel or accommodation costs.
                            </p>

                            <a href="#" className="btn btn-secondary mt-sm">Apply for Financial Aid</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="section bg-dark">
                <div className="container">
                    <h2 className="mb-lg">Policies</h2>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                        <div className="card">
                            <h4>Cancellation Policy</h4>
                            <p className="card-text">
                                Cancellations received by July 15, 2026, will receive a refund less a
                                processing fee. No refunds will be granted after this date unless for
                                visa denial or health reasons.
                            </p>
                        </div>

                        <div className="card">
                            <h4>Ticket Transfers</h4>
                            <p className="card-text">
                                You may transfer your ticket to another person by sending a written
                                request to registration@pycon.cm before August 1, 2026.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-lg">
                        <p>Questions about registration?</p>
                        <a href="mailto:organizers@pythoncameroon.org"
                            style={{ color: 'var(--color-orange)', textDecoration: 'underline' }}>Contact our registration team</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Attend;
