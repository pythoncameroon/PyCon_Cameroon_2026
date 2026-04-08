import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('terms.title')} <span className="text-gradient">{t('terms.titleHighlight')}</span></h1>
                    <p>{t('terms.subtitle')}</p>
                </div>
            </header>

            {/* Content */}
            <section className="section">
                <div className="container legal-content">
                    <p>{t('terms.lastUpdated')}</p>

                    <h2>{t('terms.introTitle')}</h2>
                    <p>{t('terms.introText')}</p>

                    <h2>{t('terms.regTitle')}</h2>
                    <ul>
                        {t('terms.regItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('terms.cancelTitle')}</h2>
                    <p>{t('terms.cancelText')}</p>

                    <h2>{t('terms.cocTitle')}</h2>
                    <p>{t('terms.cocText')}</p>

                    <h2>{t('terms.photoTitle')}</h2>
                    <p>{t('terms.photoText')}</p>

                    <h2>{t('terms.liabilityTitle')}</h2>
                    <p>{t('terms.liabilityText')}</p>

                    <h2>{t('terms.contactTitle')}</h2>
                    <p>{t('terms.contactText')} <a href="mailto:organizers@pythoncameroon.org"
                        style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a>.</p>
                </div>
            </section>
        </>
    );
};

export default Terms;
