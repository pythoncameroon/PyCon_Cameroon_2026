import { agenda, DAYS } from './agenda.js';
import { speakers } from './speakers.js';
import { sponsorsList } from './sponsorsList.js';
import { partnerCommunities } from './partners.js';

export const attendeeTotal = '500+';

export const reportSessions = Object.values(agenda).flat().filter((s) => s.id);

export const countBy = (items, key) =>
    Object.entries(items.reduce((acc, item) => ({ ...acc, [key(item)]: (acc[key(item)] || 0) + 1 }), {}))
        .sort((a, b) => b[1] - a[1]);

export const sessionFormats = countBy(reportSessions, (s) => s.type);
export const sessionTopics = countBy(reportSessions, (s) => s.category);
export const sessionLanguages = countBy(reportSessions, (s) => (s.lang === 'en' || s.lang === 'fr' ? s.lang : 'bilingual'));
export const speakerCountries = countBy(speakers, (s) => s.country || '');

export const headlineStats = [
    { key: 'attendees', value: attendeeTotal },
    { key: 'speakers', value: speakers.length },
    { key: 'sessions', value: reportSessions.length },
    { key: 'days', value: DAYS.length },
    { key: 'countries', value: speakerCountries.filter(([country]) => country).length },
    { key: 'sponsors', value: sponsorsList.length },
    { key: 'partners', value: partnerCommunities.length },
];

export const dayBadge = (day, dayWord, lang) =>
    `${dayWord} ${DAYS.indexOf(day) + 1} · ${new Date(`${day.date} 12:00`).toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' })}`;
