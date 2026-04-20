import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, Megaphone, Handshake, Search } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { internationalTiers, localTiers, sponsorshipDeckUrl } from '../data/sponsors';

const Sponsor = () => {
    const { t } = useTranslation();
    useScrollAnimation();
    const [searchParams, setSearchParams] = useSearchParams();
    const isLocal = searchParams.get('deck') === 'local';

    const handleToggle = (local) => {
        setSearchParams({ deck: local ? 'local' : 'international' }, { replace: true });
    };
    const rawTiers = isLocal ? localTiers : internationalTiers;
    const tiers = rawTiers.map(tier => {
        const key = tier.name.toLowerCase();
        const translated = t(`data.sponsors.${key}`, { returnObjects: true });
        const featuresKey = isLocal && translated?.featuresLocal ? 'featuresLocal' : 'features';
        return {
            ...tier,
            description: translated?.description || tier.description,
            features: Array.isArray(translated?.[featuresKey]) ? translated[featuresKey] : tier.features,
        };
    });

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('sponsor.title')} <span className="text-gradient">{t('sponsor.titleHighlight')}</span></h1>
                    <p>{t('sponsor.subtitle')}</p>
                    <a href={sponsorshipDeckUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-md">
                        {t('sponsor.viewDeck')}
                    </a>
                </div>
            </header>

            {/* Why Sponsor Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('sponsor.whySponsorTitle')} <span className="text-gradient">{t('sponsor.whySponsorHighlight')}</span></h2>
                            <p>
                                {t('sponsor.whySponsorText')}
                            </p>

                            <ul style={{ marginTop: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <Sparkles size="1.25rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                    <div>
                                        <strong>{t('sponsor.connectTalent')}</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            {t('sponsor.connectTalentText')}
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <Megaphone size="1.25rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                    <div>
                                        <strong>{t('sponsor.brandAwareness')}</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            {t('sponsor.brandAwarenessText')}
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <Handshake size="1.25rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                    <div>
                                        <strong>{t('sponsor.supportCommunity')}</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            {t('sponsor.supportCommunityText')}
                                        </p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <Search size="1.25rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                    <div>
                                        <strong>{t('sponsor.recruitment')}</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                            {t('sponsor.recruitmentText')}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>{t('sponsor.ourImpact')}</h3>
                                <div className="grid grid-2">
                                    <div className="mb-md">
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-orange)' }}>500+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('sponsor.expectedAttendees')}</div>
                                    </div>
                                    <div className="mb-md">
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-green)' }}>30+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('sponsor.technicalTalks')}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue)' }}>10+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('sponsor.countriesRepresented')}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>1M+</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('sponsor.digitalReach')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            {/* Sponsorship Tiers */}
            <section className="section" id="tiers">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('sponsor.tiersTitle')} <span className="text-gradient">{t('sponsor.tiersHighlight')}</span></h2>
                        <p>{t('sponsor.tiersSubtitle')}</p>
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
                                onClick={() => handleToggle(false)}
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
                                {t('sponsor.international')}
                            </button>
                            <button
                                onClick={() => handleToggle(true)}
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
                                {t('sponsor.local')}
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-2 stagger">
                        {tiers.map((tier) => (
                            <div key={tier.name} className={`card sponsor-card ${tier.className} animate-on-scroll slide-up`}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="sponsor-tier">{tier.name === 'Community' ? t('sponsor.communityPackage') : `${tier.name} ${t('sponsor.tier')}`}</div>
                                <div className="sponsor-price">
                                    {tier.xafEquivalent && (
                                        <span className="price-hover">{tier.price} ≈ {tier.xafEquivalent}</span>
                                    )}
                                    <span className="price-default">{tier.price}</span>
                                </div>
                                {tier.priceNote && (
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>
                                        ({tier.priceNote})
                                    </div>
                                )}

                                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                                    {tier.description}
                                </p>

                                <ul className="sponsor-features" style={{ flex: 1 }}>
                                    {tier.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <a href={`mailto:organizers@pythoncameroon.org?subject=${tier.name} Sponsorship Inquiry`}
                                    className={tier.btnClass}
                                    style={{ marginTop: 'auto' }}>{t('sponsor.select')} {tier.name}</a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-lg" style={{ paddingBottom: 'var(--spacing-lg)' }}>
                        <p className="mb-md">
                            {isLocal
                                ? t('sponsor.pricesLocal')
                                : t('sponsor.pricesInternational')}
                        </p>
                        <p>
                            <strong>{t('sponsor.customPackages')}</strong> {t('sponsor.customPackagesText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>{t('sponsor.getInvolved')}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        {t('sponsor.getInvolvedText')}
                    </p>
                    <a href="mailto:organizers@pythoncameroon.org" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)' }}>
                        {t('sponsor.contactSponsor')}
                    </a>
                </div>
            </section>
        </>
    );
};

export default Sponsor;
