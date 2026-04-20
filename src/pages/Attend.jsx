import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Attend = () => {
    const { t } = useTranslation();
    useScrollAnimation();
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const mainConferenceItems = t('attend.mainConferenceItems', { returnObjects: true });
    const socialEventsItems = t('attend.socialEventsItems', { returnObjects: true });
    const conferenceSwagItems = t('attend.conferenceSwagItems', { returnObjects: true });
    const paymentItems = t('attend.paymentItems', { returnObjects: true });

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('attend.title')} <span className="text-gradient">{t('attend.titleHighlight')}</span></h1>
                    <p>{t('attend.subtitle')}</p>
                </div>
            </header>

            {/* Registration Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('attend.registrationTitle')} <span className="text-gradient">{t('attend.registrationHighlight')}</span></h2>
                        <p>{t('attend.registrationSubtitle')}</p>
                    </div>

                    <p className="text-center mb-lg" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        {t('attend.registrationText')}
                    </p>

                    <div className="grid grid-3 stagger" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Early Bird Rate */}
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: '4px solid var(--color-orange)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className="card-title">{t('attend.earlyBird')}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-orange)', margin: 'var(--spacing-sm) 0' }}>
                                3,000 XAF
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                                {t('attend.limitedTime')}
                            </p>

                            <p className="card-text mb-md">
                                {t('attend.earlyBirdText')}
                            </p>

                            <a href="https://ly.reckot.com/pycon-cameroon-2026-a4390c99-early-birds" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>{t('attend.getEarlyBird')}</a>
                        </div>

                        {/* Normal Rate */}
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: '4px solid var(--color-blue)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className="card-title">{t('attend.normalRate')}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue)', margin: 'var(--spacing-sm) 0' }}>
                                5,000 XAF
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                                {t('attend.standardAdmission')}
                            </p>

                            <p className="card-text mb-md">
                                {t('attend.normalRateText')}
                            </p>

                            <a href="https://ly.reckot.com/pycon-cameroon-2026-a4390c99-regular" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                                style={{ width: '100%', background: 'var(--color-blue)', color: 'white', marginTop: 'auto' }}>{t('attend.getNormal')}</a>
                        </div>

                        {/* On-Site Rate */}
                        <div className="card animate-on-scroll slide-up" style={{ borderTop: '4px solid var(--color-green)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className="card-title">{t('attend.onSite')}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-green)', margin: 'var(--spacing-sm) 0' }}>
                                10,000 XAF
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                                {t('attend.atTheDoor')}
                            </p>

                            <p className="card-text mb-md">
                                {t('attend.onSiteText')}
                            </p>

                            <span className="btn btn-primary"
                                style={{ width: '100%', background: 'var(--color-green)', color: 'white', cursor: 'default', marginTop: 'auto' }}>{t('attend.availableAtVenue')}</span>
                        </div>
                    </div>


                </div>
            </section>

            {/* What's Included */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('attend.whatsIncluded')}</h2>
                            <p className="mb-md">{t('attend.accessTo')}</p>

                            <div className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(0)}>{t('attend.mainConference')}</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            {Array.isArray(mainConferenceItems) && mainConferenceItems.map((item, index) => (
                                                <li key={index} className={index < mainConferenceItems.length - 1 ? 'mb-sm' : ''}>
                                                    <Check size="1em" style={{ display: 'inline', verticalAlign: '-0.125em', marginRight: '0.25rem' }} />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(1)}>{t('attend.socialEvents')}</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            {Array.isArray(socialEventsItems) && socialEventsItems.map((item, index) => (
                                                <li key={index} className={index < socialEventsItems.length - 1 ? 'mb-sm' : ''}>
                                                    <Check size="1em" style={{ display: 'inline', verticalAlign: '-0.125em', marginRight: '0.25rem' }} />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordion-item ${activeAccordion === 2 ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(2)}>{t('attend.conferenceSwag')}</div>
                                <div className="accordion-content">
                                    <div className="accordion-body">
                                        <ul>
                                            {Array.isArray(conferenceSwagItems) && conferenceSwagItems.map((item, index) => (
                                                <li key={index} className={index < conferenceSwagItems.length - 1 ? 'mb-sm' : ''}>
                                                    <Check size="1em" style={{ display: 'inline', verticalAlign: '-0.125em', marginRight: '0.25rem' }} />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('attend.paymentSupport')}</h2>
                            <div className="card">
                                <p className="card-text mb-md">
                                    {t('attend.paymentSupportText')}
                                </p>
                                <ul style={{ listStyle: 'disc', marginLeft: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                                    {Array.isArray(paymentItems) && paymentItems.map((item, index) => (
                                        <li key={index} className={index < paymentItems.length - 1 ? 'mb-sm' : ''}>
                                            {item}
                                        </li>
                                    ))}
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
                        <h2>{t('attend.travelTitle')} <span className="text-gradient">{t('attend.travelHighlight')}</span></h2>
                    </div>

                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h3>{t('attend.visaInfo')}</h3>
                        <p className="mb-md">
                            {t('attend.visaText')}
                        </p>

                        <p>
                            <strong>{t('attend.visaLetters')}</strong> {t('attend.visaLettersText')}
                        </p>

                        <a href="mailto:organizers@pythoncameroon.org?subject=Request%20for%20Invitation%20Letter%20-%20PyCon%20Cameroon%202026&body=Dear%20PyCon%20Cameroon%20Organizing%20Team%2C%0A%0AI%20am%20writing%20to%20request%20an%20official%20invitation%20letter%20for%20my%20visa%20application%20to%20attend%20PyCon%20Cameroon%202026.%0A%0AFull%20Name%3A%20%0APassport%20Number%3A%20%0ANationality%3A%20%0ADate%20of%20Birth%3A%20%0AEmail%3A%20%0APhone%3A%20%0AMailing%20Address%3A%20%0ARegistration%20Confirmation%20Number%3A%20%0A%0AThank%20you%20for%20your%20assistance.%0A%0ABest%20regards" className="btn btn-secondary mt-sm">{t('attend.requestLetter')}</a>
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="section bg-dark">
                <div className="container">
                    <h2 className="mb-lg">{t('attend.policies')}</h2>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                        <div className="card">
                            <h4>{t('attend.cancellation')}</h4>
                            <p className="card-text">
                                {t('attend.cancellationText')}
                            </p>
                        </div>

                        <div className="card">
                            <h4>{t('attend.ticketTransfers')}</h4>
                            <p className="card-text">
                                {t('attend.ticketTransfersText')}
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-lg">
                        <p>{t('attend.questionsRegistration')}</p>
                        <a href="mailto:organizers@pythoncameroon.org"
                            style={{ color: 'var(--color-orange)', textDecoration: 'underline' }}>{t('attend.contactRegistration')}</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Attend;
