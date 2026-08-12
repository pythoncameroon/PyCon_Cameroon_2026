import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Calendar, MapPin } from 'lucide-react';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { DAYS, LANG_LABELS, dayBySessionId } from '../data/agenda';

const KeynoteCard = ({ speaker, session }) => {
    const { t } = useTranslation();
    const { l } = useLocalizedPath();
    const day = DAYS.find((d) => d.key === dayBySessionId[session.id]);

    return (
        <Link to={l(`/speakers/${speaker.id}`)} className="keynote-card-link">
            <article className="card keynote-card animate-on-scroll slide-up">
                <div className="keynote-card-media">
                    {speaker.photo ? (
                        <img src={speaker.photo} alt={speaker.name} className="keynote-card-photo" loading="lazy" />
                    ) : (
                        <div className="keynote-card-photo keynote-card-photo-placeholder">
                            <User size={40} />
                        </div>
                    )}
                    <span className="keynote-card-badge">{t('speakers.keynoteBadge')}</span>
                </div>

                <div className="keynote-card-body">
                    <h3 className="keynote-card-name">{speaker.name}</h3>
                    {speaker.title && <p className="keynote-card-role">{speaker.title}</p>}
                    <p className="keynote-card-talk">{session.title}</p>

                    <div className="keynote-card-meta">
                        {day && (
                            <span><Calendar size={13} /> {day.label} · {day.date}</span>
                        )}
                        {session.room && (
                            <span><MapPin size={13} /> {session.room}</span>
                        )}
                        {session.lang && (
                            <span className="keynote-card-lang">{LANG_LABELS[session.lang]}</span>
                        )}
                    </div>

                </div>
            </article>
        </Link>
    );
};

export default KeynoteCard;
