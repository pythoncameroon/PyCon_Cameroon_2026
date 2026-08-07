import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Composer, Formsmd } from 'formsmd';
import { Ticket, Bus, BedDouble } from 'lucide-react';
import 'formsmd/dist/css/formsmd.min.css';
import { grantsEndpoint, grantsSheetName, grantTypes, grantStatusOptions, cameroonRegions } from '../data/grants';
import '../styles/sponsor-form.css';

const copy = {
    en: {
        title: 'Call for',
        titleHighlight: 'Grants',
        subtitle: 'Cost should not keep you away from PyCon Cameroon and UbuCon 2026. These grants help cover the financial aid ticket, transport, or accommodation for both events. Grants are limited and ',
        subtitleHighlight: 'open only to applicants living in Cameroon',
        subtitleAfter: ', so tell us why attending matters to you. Students are our priority.',
        deadlineNote: 'Applications close 15 August 2026.',
        whyTitle: 'What grants can',
        whyHighlight: 'cover',
        whyLead: 'Pick the support you need. You can apply for one or more of the following:',
        grantCards: [
            { title: 'Ticket', text: 'A free conference ticket so you can join all talks, workshops and sessions.' },
            { title: 'Transport', text: 'Help with travel to Yaoundé for attendees coming from further away.' },
            { title: 'Accommodation', text: 'Support with a place to stay for the days of the conference.' },
        ],
        intro: '### Apply for a grant\nAnswer a few quick questions. Grants are limited and reviewed individually, so be honest and specific.',
        name: 'What is your full name?',
        nameDesc: 'First name and surname, as written on your ID. We use it on your ticket and grant record.',
        namePlaceholder: 'e.g. Marie Nguemo Tchouta',
        emailGreeting: 'Thanks {$ fullName $}!',
        email: 'What is your email address?',
        emailDesc: 'We send the grant decision here, so check the spelling.',
        emailPlaceholder: 'e.g. marie@example.com',
        phone: 'What is your phone number?',
        phoneDesc: 'A number we can reach you on, ideally with WhatsApp.',
        phonePlaceholder: 'e.g. 6 77 12 34 56',
        region: 'Which region of Cameroon do you live in?',
        regionDesc: 'The region you would be travelling from.',
        regionPlaceholder: 'Select your region',
        regionLabels: ['Adamawa', 'Centre', 'East', 'Far North', 'Littoral', 'North', 'North-West', 'South', 'South-West', 'West'],
        status: 'Which best describes you?',
        statusDesc: 'Students are our priority, so tell us if you are one.',
        statusLabels: ['Student', 'Professional', 'Self-taught / hobbyist', 'Other'],
        grants: 'Which grant(s) do you need?',
        grantsDesc: 'Select up to 2 of the options below.',
        grantLabels: ['Ticket', 'Transport', 'Accommodation'],
        centreNote: 'As you are in the Centre region, only a ticket grant applies. Transport and accommodation are for attendees travelling from other regions.',
        motivation: 'Why do you need this grant, and what would attending mean for you?',
        motivationDesc: 'Write at least 150 words. Honesty and detail help us decide.',
        motivationPlaceholder: 'Tell us about your situation, what you work on with Python, and what this grant would change for you.',
        motivationMin: 'Please write at least 150 words (currently {n}).',
        wordsLabel: 'words',
        contribution: 'How would you like to take part? (optional)',
        contributionDesc: 'Speaking, volunteering, sprints, or simply attending.',
        contributionPlaceholder: 'e.g. I would like to volunteer at registration.',
        links: 'A link to your work? (optional)',
        linksDesc: 'GitHub, LinkedIn, a portfolio, anything.',
        linksPlaceholder: 'https://github.com/yourusername',
        message: 'Anything else you would like us to know? (optional)',
        messagePlaceholder: 'Leave this blank if you have nothing to add.',
        submit: 'Submit my application',
    },
    fr: {
        title: 'Appel à',
        titleHighlight: 'bourses',
        subtitle: "Le coût ne devrait pas vous empêcher de participer à la PyCon Cameroun et à l'UbuCon 2026. Ces bourses couvrent le billet d'aide financière, le transport ou l'hébergement pour les deux événements. Les bourses sont limitées et ",
        subtitleHighlight: 'réservées aux candidats résidant au Cameroun',
        subtitleAfter: ', alors dites-nous pourquoi votre présence compte. Les étudiants sont notre priorité.',
        deadlineNote: 'Les candidatures ferment le 15 août 2026.',
        whyTitle: 'Ce que les bourses',
        whyHighlight: 'couvrent',
        whyLead: 'Choisissez le soutien dont vous avez besoin. Vous pouvez demander un ou plusieurs des éléments suivants :',
        grantCards: [
            { title: 'Billet', text: 'Un billet gratuit pour assister à toutes les conférences, ateliers et sessions.' },
            { title: 'Transport', text: "Une aide au déplacement vers Yaoundé pour les participants venant de loin." },
            { title: 'Hébergement', text: 'Un soutien pour le logement pendant les jours de la conférence.' },
        ],
        intro: '### Demander une bourse\nRépondez à quelques questions. Les bourses sont limitées et examinées individuellement : soyez honnête et précis.',
        name: 'Quel est votre nom complet ?',
        nameDesc: "Prénom et nom, tels qu'ils figurent sur votre pièce d'identité. Ils apparaîtront sur votre billet et votre dossier de bourse.",
        namePlaceholder: 'ex. Marie Nguemo Tchouta',
        emailGreeting: 'Merci {$ fullName $} !',
        email: 'Quelle est votre adresse email ?',
        emailDesc: "La décision vous sera envoyée à cette adresse, vérifiez l'orthographe.",
        emailPlaceholder: 'ex. marie@example.com',
        phone: 'Quel est votre numéro de téléphone ?',
        phoneDesc: 'Un numéro où vous joindre, idéalement avec WhatsApp.',
        phonePlaceholder: 'ex. 6 77 12 34 56',
        region: 'Dans quelle région du Cameroun vivez-vous ?',
        regionDesc: "La région d'où vous partiriez.",
        regionPlaceholder: 'Sélectionnez votre région',
        regionLabels: ['Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral', 'Nord', 'Nord-Ouest', 'Sud', 'Sud-Ouest', 'Ouest'],
        status: 'Qu\'est-ce qui vous décrit le mieux ?',
        statusDesc: 'Les étudiants sont notre priorité, dites-nous si vous en êtes un.',
        statusLabels: ['Étudiant(e)', 'Professionnel(le)', 'Autodidacte / amateur', 'Autre'],
        grants: 'De quelle(s) bourse(s) avez-vous besoin ?',
        grantsDesc: 'Sélectionnez jusqu\'à 2 options ci-dessous.',
        grantLabels: ['Billet', 'Transport', 'Hébergement'],
        centreNote: "Comme vous êtes dans la région du Centre, seule une bourse de billet s'applique. Le transport et l'hébergement sont réservés aux participants venant d'autres régions.",
        motivation: 'Pourquoi avez-vous besoin de cette bourse, et que représenterait votre présence ?',
        motivationDesc: 'Écrivez au moins 150 mots. L\'honnêteté et les détails nous aident à décider.',
        motivationPlaceholder: 'Parlez-nous de votre situation, de ce que vous faites avec Python, et de ce que cette bourse changerait pour vous.',
        motivationMin: 'Veuillez écrire au moins 150 mots (actuellement {n}).',
        wordsLabel: 'mots',
        contribution: 'Comment souhaiteriez-vous participer ? (optionnel)',
        contributionDesc: 'Conférence, bénévolat, sprints, ou simplement participer.',
        contributionPlaceholder: "ex. J'aimerais aider à l'accueil des participants.",
        links: 'Un lien vers votre travail ? (optionnel)',
        linksDesc: 'GitHub, LinkedIn, un portfolio, etc.',
        linksPlaceholder: 'https://github.com/votrenom',
        message: 'Autre chose à nous signaler ? (optionnel)',
        messagePlaceholder: "Laissez vide si vous n'avez rien à ajouter.",
        submit: 'Envoyer ma demande',
    },
};

const ACCENT = '#e07a24';
const ACCENT_FG = '#ffffff';
const LIGHT = { bg: '#ffffff', color: '#1a1a1a' };
const DARK = { bg: '#1a1a1a', color: '#f5f5f5' };

function buildTemplate(lang) {
    const t = copy[lang] || copy.en;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const scheme = isLight ? LIGHT : DARK;

    const composer = new Composer({
        id: 'grants-form',
        postUrl: grantsEndpoint,
        postSheetName: grantsSheetName,
        page: 'form-slides',
        pageProgress: 'hide',
        autofocus: 'all-slides',
        localization: lang === 'fr' ? 'fr' : 'en',
        colorScheme: isLight ? 'light' : 'dark',
        accent: ACCENT,
        accentForeground: ACCENT_FG,
        backgroundColor: scheme.bg,
        color: scheme.color,
        formsmdBranding: 'hide',
    });

    const statusChoices = grantStatusOptions.map((value, i) => ({ label: t.statusLabels[i] || value, value }));
    const grantChoices = grantTypes.map((value, i) => ({ label: t.grantLabels[i] || value, value }));
    const regionChoices = cameroonRegions.map((value, i) => ({ label: t.regionLabels[i] || value, value }));

    composer.free(t.intro);
    composer.textInput('fullName', { question: t.name, description: t.nameDesc, placeholder: t.namePlaceholder, required: true, maxlength: 80 });

    composer.slide();
    composer.free(t.emailGreeting);
    composer.emailInput('email', { question: t.email, description: t.emailDesc, placeholder: t.emailPlaceholder, required: true, maxlength: 120 });

    composer.slide();
    composer.telInput('phone', { question: t.phone, description: t.phoneDesc, placeholder: t.phonePlaceholder, required: true, country: 'CM', maxlength: 20, pattern: '[0-9 ]{6,15}' });

    composer.slide();
    composer.selectBox('region', { question: t.region, description: t.regionDesc, placeholder: t.regionPlaceholder, options: regionChoices, required: true });

    composer.slide();
    composer.choiceInput('status', { question: t.status, description: t.statusDesc, choices: statusChoices, required: true });

    composer.slide();
    composer.choiceInput('grants', { question: t.grants, description: t.grantsDesc, choices: grantChoices, multiple: true, required: true, hideFormText: true });

    composer.slide();
    composer.textInput('motivation', { question: t.motivation, description: t.motivationDesc, placeholder: t.motivationPlaceholder, required: true, multiline: true, maxlength: 1500 });

    composer.slide();
    composer.textInput('contribution', { question: t.contribution, description: t.contributionDesc, placeholder: t.contributionPlaceholder, multiline: true, maxlength: 1000 });

    composer.slide();
    composer.urlInput('links', { question: t.links, description: t.linksDesc, placeholder: t.linksPlaceholder, maxlength: 200 });

    composer.slide();
    composer.textInput('message', { question: t.message, placeholder: t.messagePlaceholder, multiline: true, maxlength: 1000 });

    return composer.template;
}

const Grants = () => {
    const { lang } = useParams();
    const containerRef = useRef(null);
    const currentLang = lang === 'fr' ? 'fr' : 'en';
    const t = copy[currentLang];
    const grantIcons = [Ticket, Bus, BedDouble];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let cancelled = false;

        const render = () => {
            if (cancelled || !container) return;
            container.innerHTML = '';
            const scheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const formsmd = new Formsmd(buildTemplate(currentLang), container, {
                colorScheme: scheme,
                isFullPage: false,
                footer: 'show',
                formsmdBranding: 'hide',
                paddingInlineTop: 0,
                paddingInlineBottom: 0,
            });
            formsmd.init();

            setTimeout(() => {
                if (cancelled) return;
                const boxes = Array.from(container.querySelectorAll('input[name="grants"]'));
                const regionSelect = container.querySelector('select[name="region"]');
                const grantsField = boxes[0] ? boxes[0].closest('.fmd-form-field') : null;
                let centreNote = null;
                if (grantsField) {
                    centreNote = document.createElement('div');
                    centreNote.style.cssText = 'font-size:0.85rem;margin-top:0.5rem;color:var(--color-orange);display:none;';
                    grantsField.appendChild(centreNote);
                }
                const isCentre = () => regionSelect && regionSelect.value === 'Centre';
                const updateGrants = () => {
                    const centre = isCentre();
                    const checked = boxes.filter((b) => b.checked).length;
                    boxes.forEach((b) => {
                        if (centre && (b.value === 'Transport' || b.value === 'Accommodation')) {
                            b.checked = false;
                            b.disabled = true;
                        } else {
                            b.disabled = !b.checked && checked >= 2;
                        }
                    });
                    if (centreNote) {
                        centreNote.textContent = centre ? copy[currentLang].centreNote : '';
                        centreNote.style.display = centre ? 'block' : 'none';
                    }
                };
                boxes.forEach((b) => b.addEventListener('change', updateGrants));
                if (regionSelect) regionSelect.addEventListener('change', updateGrants);
                updateGrants();

                const motivation = container.querySelector('textarea[name="motivation"]');
                if (motivation) {
                    const counter = document.createElement('div');
                    counter.style.cssText = 'font-size:0.8rem;margin-top:0.4rem;';
                    motivation.insertAdjacentElement('afterend', counter);
                    const MIN_WORDS = 150;
                    const checkWords = () => {
                        const words = motivation.value.trim().split(/\s+/).filter(Boolean).length;
                        const short = words < MIN_WORDS;
                        motivation.setCustomValidity(short ? copy[currentLang].motivationMin.replace('{n}', String(words)) : '');
                        counter.textContent = `${words} / ${MIN_WORDS} ${copy[currentLang].wordsLabel}`;
                        counter.style.color = short ? 'var(--color-text-muted)' : 'var(--color-green)';
                    };
                    motivation.addEventListener('input', checkWords);
                    checkWords();
                }
            }, 0);
        };

        render();

        const observer = new MutationObserver((mutations) => {
            if (mutations.some((m) => m.attributeName === 'data-theme')) render();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => {
            cancelled = true;
            observer.disconnect();
            if (container) container.innerHTML = '';
        };
    }, [currentLang]);

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t.title} <span className="text-gradient">{t.titleHighlight}</span></h1>
                    <p>{t.subtitle}<strong style={{ color: 'var(--color-orange)' }}>{t.subtitleHighlight}</strong>{t.subtitleAfter}</p>
                    <p style={{ fontWeight: 700, color: 'var(--color-orange)', marginTop: 'var(--spacing-sm)' }}>{t.deadlineNote}</p>
                </div>
            </header>

            <section className="section" id="grants-why">
                <div className="container">
                    <div className="section-header">
                        <h2>{t.whyTitle} <span className="text-gradient">{t.whyHighlight}</span></h2>
                        <p>{t.whyLead}</p>
                    </div>
                    <div className="grid grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {t.grantCards.map((card, i) => {
                            const Icon = grantIcons[i % grantIcons.length];
                            return (
                                <div key={card.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <Icon size="1.75rem" style={{ color: 'var(--color-orange)' }} />
                                    <strong>{card.title}</strong>
                                    <p style={{ fontSize: '0.9rem', marginBottom: 0, color: 'var(--color-text-secondary)' }}>{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section bg-dark" id="grants-form">
                <div className="container">
                    <div className="card sponsor-form-card">
                        <div ref={containerRef} className="sponsor-form-mount" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Grants;
