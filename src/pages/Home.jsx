import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import LazyImage from '../components/LazyImage';

const Home = () => {
    useScrollAnimation();

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content animate-fade-scale">
                    <img src="/Images/python-cameroon-logo.webp" alt="PyCon Cameroon Logo" className="hero-logo" />

                    <h1 className="hero-title">
                        <span className="highlight">PyCon</span> Cameroon 2026
                    </h1>

                    <p className="hero-subtitle">Africa's Python Conference, Reimagined in the Heart of Africa</p>

                    <div className="hero-date">
                        📅 September 17th-19th, 2026 | 📍 Yaoundé, Cameroon
                    </div>

                    <div className="hero-buttons">
                        <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-primary btn-lg">
                            🎤 Call For Speakers
                        </a>
                        <Link to="/attend" className="btn btn-secondary btn-lg">
                            🎟️ Get Your Ticket
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tribal Border Decoration */}
            <div className="tribal-border"></div>

            {/* Event Description Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Welcome to <span className="text-gradient">PyCon Cameroon 2026</span></h2>
                        <p className="mt-md" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                            Join us for Cameroon's first-ever PyCon — a celebration of Python, technology, and African
                            innovation.
                            Experience two days of inspiring talks, hands-on workshops, and unforgettable networking
                            opportunities
                            in the vibrant city of Yaoundé.
                        </p>
                    </div>

                    <div className="grid grid-3 mt-lg stagger">
                        <div className="card animate-slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/97568bbec02a103e305ee0d2bbaa6106.webp" alt="African Innovation" />
                            </div>
                            <h3 className="card-title">African Innovation Hub</h3>
                            <p className="card-text">
                                Connect with developers, entrepreneurs, and tech enthusiasts from across Africa
                                and the world. Experience the unique blend of Cameroonian culture and cutting-edge technology.
                            </p>
                        </div>

                        <div className="card animate-slide-up" style={{ transitionDelay: '100ms' }}>
                            <div className="card-icon">
                                <LazyImage src="/Images/50b4bb72bcda16fbabf50f8ca87ca412.webp" alt="Python for Everyone" />
                            </div>
                            <h3 className="card-title">Python for Everyone</h3>
                            <p className="card-text">
                                Whether you're a beginner taking your first steps or an expert pushing boundaries,
                                our diverse program caters to all skill levels and interests.
                            </p>
                        </div>

                        <div className="card animate-slide-up" style={{ transitionDelay: '200ms' }}>
                            <div className="card-icon">
                                <LazyImage src="/Images/African.webp" alt="Community" />
                            </div>
                            <h3 className="card-title">Community Driven</h3>
                            <p className="card-text">
                                We believe in building a welcoming, inclusive community where everyone feels valued.
                                Diversity and collaboration are at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <div className="section-header">
                        <h2>What to Expect</h2>
                    </div>

                    <div className="grid grid-4 stagger">
                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/Images/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Talks" />
                            </div>
                            <h4>Inspiring Talks</h4>
                            <p className="card-text">
                                From beginner to expert, our diverse range of talks covers web development,
                                data science, machine learning, DevOps, and more.
                            </p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/Images/5e7ef535d7837d92dc28625166cc2568.webp" alt="Workshops" />
                            </div>
                            <h4>Hands-on Workshops</h4>
                            <p className="card-text">
                                Learn by doing with practical workshops led by industry experts.
                                Build real projects and gain valuable skills.
                            </p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/Images/Unknown.webp" alt="Networking" />
                            </div>
                            <h4>Networking</h4>
                            <p className="card-text">
                                Connect with fellow Pythonistas, potential employers, and collaborators
                                in a friendly, supportive environment.
                            </p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/Images/ac5ca270fe9d4f7c17c5b2bf97337208.webp" alt="Fun" />
                            </div>
                            <h4>Fun Activities</h4>
                            <p className="card-text">
                                Lightning talks, sprints, cultural experiences, and social events
                                make PyCon Cameroon an unforgettable experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Expected Attendees</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">Technical Sessions</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Workshops</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">2</div>
                            <div className="stat-label">Days of Learning</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>Ready to Join Us?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        Be part of Cameroon's first PyCon and help shape the future of Python in Africa.
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <Link to="/attend" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)' }}>
                            Get Your Ticket
                        </Link>
                        <Link to="/speakers" className="btn btn-lg btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                            Submit a Talk
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
