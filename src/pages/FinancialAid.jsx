import React from 'react';
import { useTranslation } from 'react-i18next';

const FinancialAid = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('financialAid.title')} <span className="text-gradient">{t('financialAid.titleHighlight')}</span></h1>
                    <p>{t('financialAid.subtitle')}</p>
                </div>
            </header>

            <section className="section">
                <div className="container legal-content">
                    <h2>{t('financialAid.aboutTitle')}</h2>
                    <p>{t('financialAid.aboutText')}</p>

                    <h3>{t('financialAid.grantTitle')}</h3>
                    <p>{t('financialAid.grantText')}</p>

                    <h3>{t('financialAid.applicationTitle')}</h3>
                    <p>{t('financialAid.applicationP1')}</p>
                    <p>{t('financialAid.applicationP2')}</p>
                    <p>{t('financialAid.applicationP3')}</p>

                    <h2>{t('financialAid.whoTitle')}</h2>
                    <p>{t('financialAid.whoP1')}</p>
                    <p>{t('financialAid.whoP2')}</p>
                    <ul>
                        {t('financialAid.whoItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('financialAid.whoP3')}</p>

                    <h2>{t('financialAid.howTitle')}</h2>
                    <p>{t('financialAid.howP1')}</p>
                    <p>{t('financialAid.howP2')}</p>

                    <h3>{t('financialAid.whatRequestTitle')}</h3>
                    <p>{t('financialAid.whatRequestText')}</p>

                    <h3>{t('financialAid.howMuchTitle')}</h3>
                    <p>{t('financialAid.howMuchP1')}</p>
                    <p>{t('financialAid.howMuchP2')}</p>
                    <ul>
                        {t('financialAid.howMuchItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('financialAid.howMuchP3')}</p>

                    <h2>{t('financialAid.calculateTitle')}</h2>
                    <p>{t('financialAid.calculateIntro')}</p>
                    <ul>
                        {t('financialAid.calculateItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3>{t('financialAid.travelTitle')}</h3>
                    <p>{t('financialAid.travelText')}</p>

                    <h3>{t('financialAid.accommodationTitle')}</h3>
                    <p>{t('financialAid.accommodationP1')}</p>
                    <p>{t('financialAid.accommodationP2')}</p>

                    <h3>{t('financialAid.subsistenceTitle')}</h3>
                    <p>{t('financialAid.subsistenceText')}</p>

                    <h2>{t('financialAid.timelineTitle')}</h2>
                    <p>{t('financialAid.timelineIntro')}</p>
                    <ul>
                        {t('financialAid.timelineItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('financialAid.fundsTitle')}</h2>
                    <p>{t('financialAid.fundsP1')}</p>
                    <p>{t('financialAid.fundsP2')}</p>
                    <p>{t('financialAid.fundsP3')}</p>

                    <p>{t('financialAid.organizedBy')}</p>
                    <p>{t('financialAid.contactUs')} <a href="mailto:organizers@pythoncameroon.org" style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a></p>
                </div>
            </section>
        </>
    );
};

export default FinancialAid;
