import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const UbuCon = () => {
    useScrollAnimation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <img
                        src="/images/partners/canonical-cm.webp"
                        alt="UbuCon Cameroon"
                        style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: 'var(--spacing-md)', borderRadius: '16px', border: '2px solid var(--color-border)', padding: '8px' }}
                    />
                    <h1>UbuCon <span className="text-gradient">Cameroon</span></h1>
                    <p>A dedicated Ubuntu & open source track at PyCon Cameroon 2026</p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-xs)' }}>
                        Co-organized by Python Cameroon & UbuCon Cameroon
                    </p>
                </div>
            </header>

            {/* About UbuCon */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                                What is <span className="text-gradient">UbuCon?</span>
                            </h2>
                            <p>
                                UbuCon (Ubuntu Conference) is a community-driven event that brings together
                                Ubuntu enthusiasts, developers, and open source advocates. For the first time
                                in Cameroon, we're co-hosting a UbuCon track within PyCon Cameroon 2026.
                            </p>
                            <p>
                                This partnership between Python Cameroon and UbuCon Cameroon celebrates the
                                deep relationship between Python and the Ubuntu ecosystem — from system tools
                                and automation to cloud infrastructure and beyond.
                            </p>
                            <div className="mt-md">
                                <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-primary">
                                    Submit a UbuCon Talk
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>UbuCon at a Glance</h3>
                            <div className="grid grid-2">
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-orange)' }}>1</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Dedicated Day</div>
                                </div>
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-green)' }}>6+</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Talks & Workshops</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue)' }}>2</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Communities United</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>100%</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Open Source</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Topics */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>UbuCon <span className="text-gradient">Topics</span></h2>
                        <p>What you can expect at the UbuCon track</p>
                    </div>

                    <div className="grid grid-3 stagger">
                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>Ubuntu & Python</h3>
                            <p className="card-text">
                                How Python powers Ubuntu development, packaging, system tools,
                                and automation. From apt to Juju, Python is everywhere in Ubuntu.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>Linux System Administration</h3>
                            <p className="card-text">
                                Managing Ubuntu servers, desktop environments, networking,
                                and security best practices for developers and sysadmins.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>Open Source Contributions</h3>
                            <p className="card-text">
                                Getting started with open source, contributing to Ubuntu and
                                upstream projects, and building a portfolio through FOSS.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>Cloud & Infrastructure</h3>
                            <p className="card-text">
                                Ubuntu Server, LXD, MicroK8s, cloud-native development,
                                and deploying Python applications on Ubuntu infrastructure.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>Snap & Packaging</h3>
                            <p className="card-text">
                                Distributing Python applications as Snaps, building packages
                                for Ubuntu, and understanding the Linux packaging ecosystem.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <h3 className="card-title" style={{ color: 'var(--color-orange)' }}>IoT & Embedded</h3>
                            <p className="card-text">
                                Ubuntu Core, Python on embedded devices, IoT solutions,
                                and building smart devices with Ubuntu and Python.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* CTA */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, #E95420 0%, #772953 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>Join the UbuCon Track</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        Whether you're an Ubuntu power user or just getting started with Linux,
                        the UbuCon track has something for you.
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-lg" style={{ background: 'white', color: '#E95420' }}>
                            Submit a Talk
                        </a>
                        <Link to="/attend" className="btn btn-lg btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                            Get Your Ticket
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UbuCon;
