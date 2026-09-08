import { speakers } from '../data/speakers';

const normalizeName = (s) =>
    (s || '')
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();

const NAME_ALIASES = {
    'kamdem ulrich': 'kamdem-yamen-ulrich-laress-ulrich',
    'tayo tate desmond': 'tayo-tate-desmond-corentin',
};

const speakerIdByName = {};
speakers.forEach((sp) => {
    speakerIdByName[normalizeName(sp.name)] = sp.id;
});

export const resolveSpeakerId = (name) => {
    const key = normalizeName(name);
    if (NAME_ALIASES[key]) return NAME_ALIASES[key];
    if (speakerIdByName[key]) return speakerIdByName[key];
    const tokens = key.split(' ').filter(Boolean);
    const match = speakers.find((sp) => {
        const spKey = normalizeName(sp.name);
        return tokens.length > 1 && tokens.every((t) => spKey.includes(t));
    });
    return match ? match.id : null;
};

export const splitSpeakerNames = (speaker) => speaker.split(/\s*&\s*|\s*,\s*/).filter(Boolean);
