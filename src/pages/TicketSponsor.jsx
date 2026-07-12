import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Composer, Formsmd } from 'formsmd';
import 'formsmd/dist/css/formsmd.min.css';
import { ticketSponsorEndpoint, ticketSponsorSheetName, paymentMethods } from '../data/ticketSponsor';
import '../styles/sponsor-form.css';

const copy = {
    en: {
        title: 'Sponsor a Student',
        titleHighlight: 'Ticket',
        subtitle: 'Cover the cost of a ticket so a student can attend PyCon Cameroon 2026. Pay by MTN MoMo or Orange Money, then confirm your gift below so we can match it and thank you.',
        intro: '### Let us confirm your gift\nAnswer a few quick questions. Send your mobile money payment first, then have the confirmation code ready.',
        name: 'First things first, how can we call you?',
        nameDesc: 'The name we should address you by.',
        emailGreeting: 'Thanks {$ fullName $}!',
        email: 'What email can we reach you on?',
        organisation: 'Are you giving on behalf of a company or organisation?',
        organisationDesc: 'Leave this blank to sponsor as an individual.',
        phone: 'What phone number can we reach you on?',
        ticketsGreeting: 'Here is the important part, {$ fullName $}.',
        tickets: 'How many student tickets would you like to sponsor?',
        amount: 'How much did you send in total?',
        amountDesc: 'The total you paid by mobile money, in XAF.',
        method: 'Which service did you pay with?',
        payerNumber: 'Which number did the payment come from?',
        payerNumberDesc: 'The MoMo or Orange Money number you sent from. It helps us match your payment.',
        codeGreeting: 'You paid with {$ paymentMethod $}. Grab your confirmation SMS.',
        code: "What's the confirmation code from the receipt?",
        codeDesc: 'The transaction / reference code in your confirmation SMS.',
        creditGreeting: 'One last thing, {$ fullName $}.',
        credit: 'How would you like to be credited?',
        creditChoices: ['Publicly with my / our name', 'Keep me anonymous'],
        message: 'Anything you would like to tell the students? (optional)',
        messagePlaceholder: 'A few words of encouragement we can pass on.',
        submit: 'Confirm my sponsorship',
    },
    fr: {
        title: 'Parrainez un billet',
        titleHighlight: 'étudiant',
        subtitle: "Prenez en charge un billet pour qu'un étudiant puisse participer à la PyCon Cameroun 2026. Payez par MTN MoMo ou Orange Money, puis confirmez votre don ci-dessous pour que nous puissions le rapprocher et vous remercier.",
        intro: '### Confirmons votre don\nRépondez à quelques questions rapides. Effectuez d\'abord votre paiement mobile money, puis gardez le code de confirmation à portée de main.',
        name: 'Pour commencer, comment pouvons-nous vous appeler ?',
        nameDesc: 'Le nom sous lequel nous devons vous adresser.',
        emailGreeting: 'Merci {$ fullName $} !',
        email: 'À quelle adresse email pouvons-nous vous joindre ?',
        organisation: "Faites-vous ce don au nom d'une entreprise ou d'une organisation ?",
        organisationDesc: 'Laissez vide pour parrainer à titre individuel.',
        phone: 'Sur quel numéro de téléphone pouvons-nous vous joindre ?',
        ticketsGreeting: 'Voici le plus important, {$ fullName $}.',
        tickets: 'Combien de billets étudiants souhaitez-vous parrainer ?',
        amount: 'Quel montant total avez-vous envoyé ?',
        amountDesc: 'Le total payé par mobile money, en XAF.',
        method: 'Avec quel service avez-vous payé ?',
        payerNumber: 'De quel numéro provient le paiement ?',
        payerNumberDesc: 'Le numéro MoMo ou Orange Money depuis lequel vous avez envoyé. Cela nous aide à rapprocher votre paiement.',
        codeGreeting: 'Vous avez payé avec {$ paymentMethod $}. Ouvrez votre SMS de confirmation.',
        code: 'Quel est le code de confirmation du reçu ?',
        codeDesc: 'Le code de transaction / référence dans votre SMS de confirmation.',
        creditGreeting: 'Une dernière chose, {$ fullName $}.',
        credit: 'Comment souhaitez-vous être crédité ?',
        creditChoices: ['Publiquement avec mon / notre nom', 'Rester anonyme'],
        message: 'Un mot pour les étudiants ? (optionnel)',
        messagePlaceholder: "Quelques mots d'encouragement que nous transmettrons.",
        submit: 'Confirmer mon parrainage',
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
        id: 'ticket-sponsor-form',
        postUrl: ticketSponsorEndpoint,
        postSheetName: ticketSponsorSheetName,
        page: 'form-slides',
        pageProgress: 'show',
        localization: lang === 'fr' ? 'fr' : 'en',
        colorScheme: isLight ? 'light' : 'dark',
        accent: ACCENT,
        accentForeground: ACCENT_FG,
        backgroundColor: scheme.bg,
        color: scheme.color,
        formsmdBranding: 'hide',
    });

    composer.free(t.intro);
    composer.textInput('fullName', {
        question: t.name,
        description: t.nameDesc,
        required: true,
        maxlength: 80,
    });

    composer.slide();
    composer.free(t.emailGreeting);
    composer.emailInput('email', { question: t.email, required: true, maxlength: 120 });

    composer.slide();
    composer.textInput('organisation', { question: t.organisation, description: t.organisationDesc, maxlength: 120 });

    composer.slide();
    composer.telInput('phone', { question: t.phone, required: true, maxlength: 20 });

    composer.slide();
    composer.free(t.ticketsGreeting);
    composer.numberInput('tickets', { question: t.tickets, required: true, min: 1, max: 500, step: 1, value: 1 });

    composer.slide();
    composer.numberInput('amountPaid', { question: t.amount, description: t.amountDesc, required: true, min: 100, step: 1, unitEnd: 'XAF' });

    composer.slide();
    composer.choiceInput('paymentMethod', { question: t.method, choices: paymentMethods, required: true });

    composer.slide();
    composer.telInput('payerNumber', { question: t.payerNumber, description: t.payerNumberDesc, required: true, maxlength: 20 });

    composer.slide();
    composer.free(t.codeGreeting);
    composer.textInput('confirmationCode', {
        question: t.code,
        description: t.codeDesc,
        required: true,
        maxlength: 40,
        pattern: '[A-Za-z0-9][A-Za-z0-9.]{3,39}',
    });

    composer.slide();
    composer.free(t.creditGreeting);
    composer.choiceInput('acknowledgement', { question: t.credit, choices: t.creditChoices, required: true });

    composer.slide();
    composer.textInput('message', { question: t.message, placeholder: t.messagePlaceholder, multiline: true, maxlength: 1000 });

    return composer.template;
}

const TicketSponsor = () => {
    const { lang } = useParams();
    const containerRef = useRef(null);
    const currentLang = lang === 'fr' ? 'fr' : 'en';
    const t = copy[currentLang];

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
                footer: 'hide',
                formsmdBranding: 'hide',
                paddingInlineTop: 0,
                paddingInlineBottom: 0,
            });
            formsmd.init();
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
                    <p>{t.subtitle}</p>
                </div>
            </header>

            <section className="section bg-dark" id="ticket-sponsor-form">
                <div className="container">
                    <div className="card sponsor-form-card">
                        <div ref={containerRef} className="sponsor-form-mount" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TicketSponsor;
