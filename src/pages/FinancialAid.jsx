import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const ORGANIZERS_EMAIL = 'organizers@pythoncameroon.org';

const FinancialAid = () => {
    const { t } = useTranslation();

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

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
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
