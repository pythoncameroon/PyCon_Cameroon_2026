import React from 'react';
import { useTranslation } from 'react-i18next';

const CodeOfConduct = () => {
    const { t } = useTranslation();

    const expectedItems = t('codeOfConduct.expectedItems', { returnObjects: true });
    const unacceptableItems = t('codeOfConduct.unacceptableItems', { returnObjects: true });

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('codeOfConduct.title')} <span className="text-gradient">{t('codeOfConduct.titleHighlight')}</span></h1>
                    <p>{t('codeOfConduct.subtitle')}</p>
                </div>
            </header>

            <section className="section">
                <div className="container legal-content">
                    <h2>{t('codeOfConduct.commitmentTitle')}</h2>
                    <p>{t('codeOfConduct.commitmentP1')}</p>
                    <p>{t('codeOfConduct.commitmentP2')}</p>
                    <p>{t('codeOfConduct.commitmentP3')}</p>

                    <h2>{t('codeOfConduct.expectedTitle')}</h2>
                    <ul>
                        {expectedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('codeOfConduct.unacceptableTitle')}</h2>
                    <p>{t('codeOfConduct.unacceptableIntro')}</p>
                    <ul>
                        {unacceptableItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('codeOfConduct.consequencesTitle')}</h2>
                    <p>{t('codeOfConduct.consequencesP1')}</p>
                    <p>{t('codeOfConduct.consequencesP2')}</p>
                    <p>{t('codeOfConduct.consequencesP3')}</p>

                    <h2>{t('codeOfConduct.witnessTitle')}</h2>
                    <p>{t('codeOfConduct.witnessP1')}</p>
                    <p>{t('codeOfConduct.witnessP2')}</p>

                    <h2>{t('codeOfConduct.contactTitle')}</h2>
                    <p>{t('codeOfConduct.contactText')}</p>
                    <p>Email: <a href={`mailto:${t('codeOfConduct.contactEmail')}`} style={{ color: 'var(--color-orange)' }}>{t('codeOfConduct.contactEmail')}</a></p>
                </div>
            </section>
        </>
    );
};

export default CodeOfConduct;
