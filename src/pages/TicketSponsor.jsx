import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Composer, Formsmd } from 'formsmd';
import { GraduationCap, Users, Sparkles, Ticket, Send, ExternalLink } from 'lucide-react';
import 'formsmd/dist/css/formsmd.min.css';
import { ticketSponsorEndpoint, ticketSponsorSheetName, paymentMethods, payTo, ticketPriceXAF, remittanceLinks } from '../data/ticketSponsor';
import '../styles/sponsor-form.css';

const copy = {
    en: {
        title: 'Sponsor a Student',
        titleHighlight: 'Ticket',
        subtitle: 'Cover the cost of a ticket so a student can attend PyCon Cameroon 2026. Pay by MTN MoMo or Orange Money, then confirm your gift below so we can match it and thank you.',
        whyTitle: 'Why your sponsorship',
        whyHighlight: 'matters',
        whyLead: 'Many talented students across Cameroon and the region want to be at PyCon Cameroon 2026 but cannot cover a ticket. At 3,000 FCFA, one ticket opens the whole conference to a student who would otherwise miss out.',
        whyPoints: [
            { title: 'Access for future builders', text: 'Talks, workshops and hands-on sessions with the wider Python community.' },
            { title: 'Mentorship and networking', text: 'Students meet speakers, contributors and potential employers face to face.' },
            { title: 'A stronger local ecosystem', text: "Today's sponsored student is tomorrow's maintainer, founder or mentor." },
            { title: 'Every ticket counts', text: 'Sponsor one, five or a whole classroom. It all goes to student access.' },
        ],
        abroadTitle: 'Sending from',
        abroadHighlight: 'abroad',
        abroadLead: 'Paying from outside Cameroon? Use a remittance service that pays out straight to a mobile money wallet. Pick "Mobile Money" as the payout, enter the recipient STEVE YONKEU and the MTN MoMo or Orange Money number shown in the form. Money usually arrives within minutes.',
        abroadRecommended: 'Recommended',
        abroadOptions: [
            { name: 'Taptap Send', best: true, note: 'Zero fees and direct mobile money delivery to Cameroon. Send from the US, UK, Canada and Europe.' },
            { name: 'LemFi', best: true, note: 'Zero fees with strong rates on African corridors. From the US, UK, Canada and the EU.' },
            { name: 'Sendwave', best: false, note: 'Zero-fee transfers straight to MTN MoMo and Orange Money.' },
            { name: 'WorldRemit', best: false, note: 'Small fixed fee, with mobile money, bank and cash-pickup options.' },
            { name: 'Remitly', best: false, note: 'Mobile money, bank deposit or cash pickup, with promo rates on first transfers.' },
            { name: 'Western Union / MoneyGram', best: false, note: 'Available worldwide; can pay out to a mobile wallet or cash pickup.' },
        ],
        abroadNote: 'Wallet limits: MTN accepts up to 3,000,000 FCFA per day, Orange up to 1,500,000 FCFA per day. After sending, come back and enter your mobile money confirmation code.',
        intro: '### Let us set up your gift\nAnswer a few quick questions about you, then you will make the payment and confirm it here.',
        name: 'First things first, how can we call you?',
        nameDesc: 'The name we should address you by.',
        emailGreeting: 'Thanks {$ fullName $}!',
        email: 'What email can we reach you on?',
        organisation: 'Are you giving on behalf of a company or organisation?',
        organisationDesc: 'Leave this blank to sponsor as an individual.',
        phone: 'What phone number can we reach you on?',
        ticketsGreeting: 'Almost there, {$ fullName $}.',
        tickets: 'How many student tickets would you like to sponsor?',
        payInstructions: (p, price) =>
            `### Now make the payment\nYou are sponsoring **<span class="js-ticket-count"></span>** ticket(s) at **${price.toLocaleString('en-US')} FCFA** each.\n\nPlease send **<span class="js-pay-total"></span>** (plus any mobile money charges) to **one** of these numbers, then come back to confirm:\n\n- **MTN MoMo:** ${p.mtn}\n- **Orange Money:** ${p.orange}\n\nBoth accounts are registered to **${p.name}**. Once your transfer is done, tap OK and we will record the confirmation.`,
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
        whyTitle: 'Pourquoi votre parrainage',
        whyHighlight: 'compte',
        whyLead: "De nombreux étudiants talentueux du Cameroun et de la région veulent participer à la PyCon Cameroun 2026 mais ne peuvent pas payer un billet. À 3 000 FCFA, un billet ouvre toute la conférence à un étudiant qui, sinon, la manquerait.",
        whyPoints: [
            { title: 'Un accès pour les bâtisseurs de demain', text: 'Conférences, ateliers et sessions pratiques avec la communauté Python.' },
            { title: 'Mentorat et réseautage', text: 'Les étudiants rencontrent intervenants, contributeurs et employeurs potentiels.' },
            { title: 'Un écosystème local plus fort', text: "L'étudiant parrainé aujourd'hui est le mainteneur, fondateur ou mentor de demain." },
            { title: 'Chaque billet compte', text: "Parrainez un, cinq ou toute une classe. Tout va à l'accès des étudiants." },
        ],
        abroadTitle: 'Depuis',
        abroadHighlight: "l'étranger",
        abroadLead: "Vous payez depuis l'étranger ? Utilisez un service de transfert qui verse directement sur un portefeuille mobile money. Choisissez « Mobile Money » comme mode de réception, indiquez le bénéficiaire STEVE YONKEU et le numéro MTN MoMo ou Orange Money affiché dans le formulaire. L'argent arrive généralement en quelques minutes.",
        abroadRecommended: 'Recommandé',
        abroadOptions: [
            { name: 'Taptap Send', best: true, note: "Sans frais et versement mobile money direct au Cameroun. Depuis les États-Unis, le Royaume-Uni, le Canada et l'Europe." },
            { name: 'LemFi', best: true, note: "Sans frais et bons taux sur les corridors africains. Depuis les États-Unis, le Royaume-Uni, le Canada et l'UE." },
            { name: 'Sendwave', best: false, note: 'Transferts sans frais directement vers MTN MoMo et Orange Money.' },
            { name: 'WorldRemit', best: false, note: 'Petits frais fixes, avec mobile money, banque et retrait en espèces.' },
            { name: 'Remitly', best: false, note: 'Mobile money, dépôt bancaire ou retrait en espèces, avec des taux promo au premier envoi.' },
            { name: 'Western Union / MoneyGram', best: false, note: 'Disponibles partout ; versement sur portefeuille mobile ou retrait en espèces.' },
        ],
        abroadNote: "Plafonds des portefeuilles : MTN accepte jusqu'à 3 000 000 FCFA par jour, Orange jusqu'à 1 500 000 FCFA par jour. Après l'envoi, revenez saisir votre code de confirmation mobile money.",
        intro: '### Préparons votre don\nRépondez à quelques questions sur vous, puis vous effectuerez le paiement et le confirmerez ici.',
        name: 'Pour commencer, comment pouvons-nous vous appeler ?',
        nameDesc: 'Le nom sous lequel nous devons vous adresser.',
        emailGreeting: 'Merci {$ fullName $} !',
        email: 'À quelle adresse email pouvons-nous vous joindre ?',
        organisation: "Faites-vous ce don au nom d'une entreprise ou d'une organisation ?",
        organisationDesc: 'Laissez vide pour parrainer à titre individuel.',
        phone: 'Sur quel numéro de téléphone pouvons-nous vous joindre ?',
        ticketsGreeting: 'Presque fini, {$ fullName $}.',
        tickets: 'Combien de billets étudiants souhaitez-vous parrainer ?',
        payInstructions: (p, price) =>
            `### Effectuez maintenant le paiement\nVous parrainez **{$ tickets $}** billet(s) à **${price.toLocaleString('fr-FR')} FCFA** chacun.\n\nEnvoyez **<span class="js-pay-total"></span>** (plus les frais mobile money) à **l'un** de ces numéros, puis revenez confirmer :\n\n- **MTN MoMo :** ${p.mtn}\n- **Orange Money :** ${p.orange}\n\nLes deux comptes sont enregistrés au nom de **${p.name}**. Une fois le transfert effectué, appuyez sur OK et nous enregistrerons la confirmation.`,
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
        pageProgress: 'hide',
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
    composer.telInput('phone', { question: t.phone, required: true, country: 'CM', maxlength: 20, pattern: '[0-9 ]{6,15}' });

    composer.slide();
    composer.free(t.ticketsGreeting);
    composer.numberInput('tickets', { question: t.tickets, required: true, min: 1, max: 500, step: 1, value: 1 });

    composer.slide();
    composer.free(t.payInstructions(payTo, ticketPriceXAF));

    composer.slide();
    composer.choiceInput('paymentMethod', { question: t.method, choices: paymentMethods, required: true });

    composer.slide();
    composer.numberInput('amountPaid', { question: t.amount, description: t.amountDesc, required: true, min: 100, step: 1, unitEnd: 'XAF' });

    composer.slide();
    composer.telInput('payerNumber', { question: t.payerNumber, description: t.payerNumberDesc, required: true, country: 'CM', maxlength: 20, pattern: '[0-9 ]{6,15}' });

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

            const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
            const updateTotal = () => {
                const ticketsInput = container.querySelector('input[name="tickets"]');
                const count = parseInt(ticketsInput ? ticketsInput.value : '1', 10);
                const n = Number.isFinite(count) && count > 0 ? count : 1;
                const total = (n * ticketPriceXAF).toLocaleString(locale) + ' FCFA';
                container.querySelectorAll('.js-ticket-count').forEach((el) => {
                    el.textContent = String(n);
                });
                container.querySelectorAll('.js-pay-total').forEach((el) => {
                    el.textContent = total;
                });
            };

            setTimeout(() => {
                if (cancelled) return;
                const ticketsInput = container.querySelector('input[name="tickets"]');
                if (ticketsInput) {
                    ticketsInput.addEventListener('input', updateTotal);
                }
                updateTotal();
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

    const whyIcons = [GraduationCap, Users, Sparkles, Ticket];

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t.title} <span className="text-gradient">{t.titleHighlight}</span></h1>
                    <p>{t.subtitle}</p>
                </div>
            </header>

            <section className="section" id="ticket-sponsor-why">
                <div className="container">
                    <div className="section-header">
                        <h2>{t.whyTitle} <span className="text-gradient">{t.whyHighlight}</span></h2>
                        <p>{t.whyLead}</p>
                    </div>
                    <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {t.whyPoints.map((point, i) => {
                            const Icon = whyIcons[i % whyIcons.length];
                            return (
                                <div key={point.title} className="card" style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <Icon size="1.5rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                    <div>
                                        <strong>{point.title}</strong>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0, color: 'var(--color-text-secondary)' }}>{point.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section bg-dark" id="ticket-sponsor-form">
                <div className="container">
                    <div className="card sponsor-form-card">
                        <div ref={containerRef} className="sponsor-form-mount" />
                    </div>
                </div>
            </section>

            <section className="section" id="ticket-sponsor-abroad">
                <div className="container">
                    <div className="section-header">
                        <h2>
                            <Send size="1.5rem" style={{ color: 'var(--color-orange)', verticalAlign: '-0.15em', marginRight: '0.4rem' }} />
                            {t.abroadTitle} <span className="text-gradient">{t.abroadHighlight}</span>
                        </h2>
                        <p>{t.abroadLead}</p>
                    </div>
                    <div className="grid grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {t.abroadOptions.map((opt) => (
                            <a
                                key={opt.name}
                                href={remittanceLinks[opt.name]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card"
                                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none', color: 'inherit', height: '100%' }}
                            >
                                {opt.best && (
                                    <span style={{ alignSelf: 'flex-start', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'white', background: 'var(--color-orange)', borderRadius: 'var(--radius-sm)', padding: '0.2rem 0.5rem' }}>
                                        {t.abroadRecommended}
                                    </span>
                                )}
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-primary)' }}>
                                    {opt.name}
                                    <ExternalLink size="0.85rem" style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                                </strong>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0, color: 'var(--color-text-secondary)' }}>{opt.note}</p>
                            </a>
                        ))}
                    </div>
                    <p className="text-center" style={{ maxWidth: '760px', margin: 'var(--spacing-lg) auto 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        {t.abroadNote}
                    </p>
                </div>
            </section>
        </>
    );
};

export default TicketSponsor;
