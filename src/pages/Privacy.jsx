import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('privacy.title')} <span className="text-gradient">{t('privacy.titleHighlight')}</span></h1>
                    <p>{t('privacy.subtitle')}</p>
                </div>
            </header>

            {/* Content */}
            <section className="section">
                <div className="container legal-content">
                    <p><strong>Summary:</strong> {t('privacy.summary')}</p>
                    <p>{t('privacy.submitTalk')}</p>
                    <p>{t('privacy.optIn')}</p>

                    <h2>{t('privacy.whoResponsibleTitle')}</h2>
                    <p>{t('privacy.whoResponsibleP1')}</p>
                    <p>{t('privacy.whoResponsibleP2')}</p>

                    <h2>{t('privacy.whatCollectTitle')}</h2>
                    <p>{t('privacy.whatCollectIntro')}</p>
                    <ul>
                        {t('privacy.whatCollectItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('privacy.whatCollectThirdParty')}</p>

                    <p>{t('privacy.whatCollectUse')}</p>
                    <p>{t('privacy.whatCollectDemographics')}</p>

                    <h2>{t('privacy.linksTitle')}</h2>
                    <p>{t('privacy.linksText')}</p>

                    <h2>{t('privacy.howUseTitle')}</h2>
                    <p>{t('privacy.howUseIntro')}</p>
                    <ul>
                        {t('privacy.howUseItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('privacy.howUseLegitimate')}</p>

                    <h2>{t('privacy.audioTitle')}</h2>
                    <p>{t('privacy.audioText')}</p>

                    <h2>{t('privacy.rightsTitle')}</h2>
                    <p>{t('privacy.rightsP1')}</p>
                    <p>{t('privacy.rightsP2')}</p>
                    <ul>
                        {t('privacy.rightsItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('privacy.rightsException')}</p>

                    <h2>{t('privacy.retentionTitle')}</h2>
                    <p>{t('privacy.retentionText')}</p>

                    <h2>{t('privacy.questionsTitle')}</h2>
                    <p>{t('privacy.questionsText')}</p>

                    <h2>{t('privacy.updatesTitle')}</h2>
                    <p>{t('privacy.updatesText')}</p>

                    <p>{t('privacy.organizedBy')}</p>
                    <p>{t('privacy.contactUs')} <a href="mailto:organizers@pythoncameroon.org" style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a></p>
                </div>
            </section>
        </>
    );
};

export default Privacy;
