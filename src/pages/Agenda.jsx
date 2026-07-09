import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { DAYS, agenda } from '../data/agenda';
import AgendaSchedule from '../components/AgendaSchedule';

const Agenda = () => {
    const { t } = useTranslation();
    useScrollAnimation();
    const [searchParams, setSearchParams] = useSearchParams();

    const dayParam = searchParams.get('day');
    const activeDay = DAYS.find(d => d.key === dayParam) ? dayParam : 'day1';

    const handleDayChange = (key) => {
        setSearchParams({ day: key }, { replace: true });
    };

    const sessions = agenda[activeDay] || [];
    const activeDayData = DAYS.find(d => d.key === activeDay);

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('agenda.title')} <span className="text-gradient">{t('agenda.titleHighlight')}</span></h1>
                    <p>{t('agenda.subtitle')}</p>
                </div>
            </header>

            <section className="section bg-dark" id="agenda-schedule">
                <div className="container">
                    <div className="agenda-toggle-wrap">
                        <div className="agenda-toggle">
                            {DAYS.map((day) => {
                                const isActive = activeDay === day.key;
                                return (
                                    <button
                                        key={day.key}
                                        onClick={() => handleDayChange(day.key)}
                                        className={`agenda-toggle-btn ${isActive ? 'active' : ''}`}
                                    >
                                        {day.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {activeDayData?.key === 'day2' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--spacing-md)', justifyContent: 'center' }}>
                            <img src="/images/partners/canonical-cm.webp" alt="UbuCon" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '50%' }} />
                            <span style={{ fontWeight: 700, color: '#E95420', fontSize: '1rem', fontFamily: 'var(--font-ui)' }}>UbuCon Cameroon Day</span>
                        </div>
                    )}

                    <AgendaSchedule sessions={sessions} />
                </div>
            </section>

        </>
    );
};

export default Agenda;
