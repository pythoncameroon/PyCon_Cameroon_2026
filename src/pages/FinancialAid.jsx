import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, HandCoins } from 'lucide-react';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const ORGANIZERS_EMAIL = 'organizers@pythoncameroon.org';

const FinancialAid = () => {
    const { t } = useTranslation();
    const { l, lang } = useLocalizedPath();

    const grantsCta = lang === 'fr' ? {
        title: 'Appel à bourses ouvert',
        text: "Nous avons ouvert un appel à bourses pour aider les étudiants au Cameroun à couvrir leur billet, leur transport et leur hébergement.",
        button: 'Demander une bourse',
    } : {
        title: 'Call for grants is open',
        text: "We have opened a call for grants to help students in Cameroon cover their ticket, transport and accommodation.",
        button: 'Apply for a grant',
    };

    const subject = t('financialAid.emailSubject');
    const body = t('financialAid.emailBody');
    const mailto = `mailto:${ORGANIZERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('financialAid.title')} <span className="text-gradient">{t('financialAid.titleHighlight')}</span></h1>
                    <p>{t('financialAid.subtitle')}</p>
                </div>
            </header>

            <section id="financial-aid-details" className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        borderLeft: '4px solid var(--color-green)',
                        marginBottom: 'var(--spacing-lg)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flex: '1 1 320px' }}>
                            <HandCoins size="2.5rem" style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                            <div>
                                <h3 className="card-title" style={{ marginBottom: '0.25rem' }}>{grantsCta.title}</h3>
                                <p className="card-text" style={{ marginBottom: 0 }}>{grantsCta.text}</p>
                            </div>
                        </div>
                        <Link to={l('grants')} className="btn btn-primary" style={{ flexShrink: 0, background: 'var(--color-green)' }}>
                            {grantsCta.button}
                        </Link>
                    </div>

                    <p style={{ fontSize: '1.125rem' }}>{t('financialAid.intro')}</p>

                    <h2 style={{ marginTop: 'var(--spacing-lg)' }}>{t('financialAid.noTransportTitle')}</h2>
                    <p>{t('financialAid.noTransportText')}</p>

                    <h2 style={{ marginTop: 'var(--spacing-lg)' }}>{t('financialAid.waiverTitle')}</h2>
                    <p>{t('financialAid.waiverText')}</p>

                    <h2 style={{ marginTop: 'var(--spacing-lg)' }}>{t('financialAid.howToRequestTitle')}</h2>
                    <p>{t('financialAid.howToRequestText')}</p>

                    <div className="text-center mt-lg">
                        <a href={mailto} className="btn btn-primary btn-lg">
                            <Mail size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem' }} />
                            {t('financialAid.requestButton')}
                        </a>
                        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                            {t('financialAid.clickNote')} <a href={`mailto:${ORGANIZERS_EMAIL}`} style={{ color: 'var(--color-orange)' }}>{ORGANIZERS_EMAIL}</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinancialAid;
