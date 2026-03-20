import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const UBUNTU_ORANGE = '#E95420';
const UBUNTU_AUBERGINE = '#77216F';
const UBUNTU_DARK = '#2C001E';

const UbuCon = () => {
    useScrollAnimation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header" style={{
                background: `linear-gradient(160deg, ${UBUNTU_DARK} 0%, ${UBUNTU_AUBERGINE} 50%, ${UBUNTU_ORANGE} 100%)`,
            }}>
                <div className="container text-center">
                    <img
                        src="/images/partners/canonical-cm.webp"
                        alt="UbuCon Cameroon"
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            marginBottom: 'var(--spacing-md)',
                            borderRadius: '16px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            padding: '8px',
                            background: 'rgba(255,255,255,0.1)',
                        }}
                    />
                    <h1 style={{ color: 'white' }}>UbuCon <span style={{ color: UBUNTU_ORANGE }}>Cameroon</span></h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>A dedicated Ubuntu & open source track at PyCon Cameroon 2026</p>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginTop: 'var(--spacing-xs)' }}>
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
                                What is <span style={{ color: UBUNTU_ORANGE }}>UbuCon?</span>
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
                                <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-lg"
                                    style={{ background: UBUNTU_ORANGE, color: 'white', border: 'none' }}>
                                    Submit a UbuCon Talk
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{
                            padding: 'var(--spacing-lg)',
                            textAlign: 'center',
                            borderColor: UBUNTU_AUBERGINE,
                        }}>
                            <h3 style={{ marginBottom: 'var(--spacing-lg)', color: UBUNTU_ORANGE }}>UbuCon at a Glance</h3>
                            <div className="grid grid-2">
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_ORANGE }}>1</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Dedicated Day</div>
                                </div>
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_AUBERGINE }}>6+</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Talks & Workshops</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_ORANGE }}>2</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Communities United</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_AUBERGINE }}>100%</div>
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
                        <h2>UbuCon <span style={{ color: UBUNTU_ORANGE }}>Topics</span></h2>
                        <p>What you can expect at the UbuCon track</p>
                    </div>

                    <div className="grid grid-3 stagger">
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_ORANGE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_ORANGE }}>Ubuntu & Python</h3>
                            <p className="card-text">
                                How Python powers Ubuntu development, packaging, system tools,
                                and automation. From apt to Juju, Python is everywhere in Ubuntu.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_AUBERGINE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_AUBERGINE }}>Linux System Administration</h3>
                            <p className="card-text">
                                Managing Ubuntu servers, desktop environments, networking,
                                and security best practices for developers and sysadmins.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_ORANGE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_ORANGE }}>Open Source Contributions</h3>
                            <p className="card-text">
                                Getting started with open source, contributing to Ubuntu and
                                upstream projects, and building a portfolio through FOSS.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_AUBERGINE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_AUBERGINE }}>Cloud & Infrastructure</h3>
                            <p className="card-text">
                                Ubuntu Server, LXD, MicroK8s, cloud-native development,
                                and deploying Python applications on Ubuntu infrastructure.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_ORANGE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_ORANGE }}>Snap & Packaging</h3>
                            <p className="card-text">
                                Distributing Python applications as Snaps, building packages
                                for Ubuntu, and understanding the Linux packaging ecosystem.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${UBUNTU_AUBERGINE}` }}>
                            <h3 className="card-title" style={{ color: UBUNTU_AUBERGINE }}>IoT & Embedded</h3>
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
                style={{ background: `linear-gradient(135deg, ${UBUNTU_ORANGE} 0%, ${UBUNTU_AUBERGINE} 100%)` }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>Join the UbuCon Track</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        Whether you're an Ubuntu power user or just getting started with Linux,
                        the UbuCon track has something for you.
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-lg"
                            style={{ background: 'white', color: UBUNTU_ORANGE }}>
                            Submit a Talk
                        </a>
                        <Link to="/attend" className="btn btn-lg btn-secondary"
                            style={{ borderColor: 'white', color: 'white' }}>
                            Get Your Ticket
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UbuCon;
