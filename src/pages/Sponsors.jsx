import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SponsorShowcase from '../components/SponsorShowcase';

const Sponsors = () => {
    const { t } = useTranslation();
    useScrollAnimation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('sponsors.title')} <span className="text-gradient">{t('sponsors.titleHighlight')}</span></h1>
                    <p>{t('sponsors.subtitle')}</p>
                </div>
            </header>

            <SponsorShowcase />
        </>
    );
};

export default Sponsors;
