import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { agenda, DAYS, sessionTitle } from '../src/data/agenda.js';
import { sponsorsByTier, sponsorsList } from '../src/data/sponsorsList.js';
import { partnerCommunities } from '../src/data/partners.js';
import { sponsorshipDeckUrl } from '../src/data/sponsors.js';
import {
    attendeeTotal,
    dayBadge,
    headlineStats,
    sessionFormats,
    sessionLanguages,
    sessionTopics,
    speakerCountries,
} from '../src/data/reportStats.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const outDir = join(publicDir, 'reports');
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const work = mkdtempSync(join(tmpdir(), 'pycon-report-'));

const asset = (path) => pathToFileURL(join(publicDir, path)).href;
const photo = (day, n) => pathToFileURL(join(work, `${day}-${String(n).padStart(2, '0')}.jpg`)).href;
const extraPhoto = (name) => pathToFileURL(join(work, `${name}.jpg`)).href;

// ponytail: Chrome embeds WebP uncompressed in PDFs, so photos go in as JPEG via macOS `sips`; swap for another converter off macOS.
const convertPhotos = () => {
    const dir = join(publicDir, 'images/report');
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.webp'))) {
        execFileSync('sips', ['-Z', file.startsWith('gallery-') ? '600' : '1200', '-s', 'format', 'jpeg', '-s', 'formatOptions', '70', join(dir, file), '--out', join(work, file.replace(/\.webp$/, '.jpg'))], { stdio: 'ignore' });
    }
};

const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const bars = (title, rows) => {
    const max = Math.max(...rows.map((r) => r.count));
    return `
        <div class="panel">
            <h3>${esc(title)}</h3>
            ${rows.map((r) => `
                <div class="bar">
                    <div class="bar-label"><span>${esc(r.label)}</span><strong>${r.count}</strong></div>
                    <div class="bar-track"><div class="bar-fill" style="width:${(r.count / max) * 100}%"></div></div>
                </div>`).join('')}
        </div>`;
};

const page = (body, { n, cls = '', footer }) => `
    <section class="page ${cls}">
        ${body}
        ${footer ? `<footer class="page-footer"><span>${esc(footer)}</span><span>${String(n).padStart(2, '0')}</span></footer>` : ''}
    </section>`;

const sectionTitle = (num, title, highlight) => `
    <div class="kicker">${String(num).padStart(2, '0')}</div>
    <h2>${esc(title)} <span class="gradient">${esc(highlight)}</span></h2>`;

const build = (lang) => {
    const i18n = JSON.parse(readFileSync(join(root, `src/i18n/${lang}.json`), 'utf8'));
    const r = i18n.report;
    const footer = r.pdf.footer;
    const contents = [
        r.pdf.foreword,
        r.pdf.byNumbers,
        `${r.programTitle} ${r.programHighlight}`,
        `${r.daysTitle} ${r.daysHighlight}`,
        `${r.sponsorsTitle} ${r.sponsorsHighlight}`,
        `${r.pdf.galleryTitle} ${r.pdf.galleryHighlight}`,
        `${r.aidTitle} ${r.aidHighlight}`,
        `${r.partnersTitle} ${r.partnersHighlight}`,
    ];

    const cover = page(`
        <div class="cover-photo" style="background-image:url('${extraPhoto('cover')}')"></div>
        <div class="cover-shade"></div>
        <div class="cover-top">
            <img src="${asset('images/branding/python-cameroon-logo.webp')}" alt="" class="cover-logo">
            <span>${esc(r.pdf.website)}</span>
        </div>
        <div class="cover-body">
            <div class="cover-kicker">${esc(r.pdf.kicker)}</div>
            <h1>PyCon <span class="amp">&amp;</span> UbuCon<br><span class="gradient">Cameroon 2026</span></h1>
            <p class="cover-meta">${esc(r.meta)}</p>
        </div>
        <div class="toghu"></div>`, { n: 1, cls: 'cover' });

    const foreword = page(`
        <div class="two-col">
            <div>
                <div class="kicker">${esc(r.pdf.contents)}</div>
                <ol class="toc">
                    ${contents.map((c, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(c)}</li>`).join('')}
                </ol>
                <img class="foreword-photo" src="${photo('day1', 7)}" alt="">
            </div>
            <div>
                ${sectionTitle(1, r.summaryTitle, r.summaryHighlight)}
                <p class="lead">${esc(r.summaryP1)}</p>
                <p>${esc(r.summaryP2)}</p>
                <p>${esc(r.summaryP3)}</p>
            </div>
        </div>
        <div class="strip fill">
            <img src="${photo('day2', 7)}" alt=""><img src="${extraPhoto('speaker')}" alt=""><img src="${photo('day3', 9)}" alt="">
            <img src="${extraPhoto('extra-1')}" alt=""><img src="${extraPhoto('extra-2')}" alt=""><img src="${extraPhoto('extra-3')}" alt="">
        </div>`, { n: 2, footer });

    const numbers = page(`
        ${sectionTitle(2, r.pdf.byNumbers, '')}
        <div class="hero-stat">
            <div class="hero-number gradient">${attendeeTotal}</div>
            <div>
                <div class="hero-label">${esc(r.stats.attendees)}</div>
                <p class="muted">${esc(r.audienceSubtitle)}</p>
            </div>
        </div>
        <div class="tiles">
            ${headlineStats.filter((s) => s.key !== 'attendees').map((s) => `
                <div class="tile"><div class="tile-number">${s.value}</div><div class="tile-label">${esc(r.stats[s.key])}</div></div>`).join('')}
        </div>
        <div class="two-col fill">
            ${bars(r.speakersByCountry, speakerCountries.map(([country, count]) => ({ label: country ? r.countryNames?.[country] ?? country : r.countryNotListed, count })))}
            <img class="panel-photo" src="${photo('day2', 9)}" alt="">
        </div>`, { n: 3, footer });

    const programme = page(`
        ${sectionTitle(3, r.programTitle, r.programHighlight)}
        <p class="muted">${esc(r.programSubtitle)}</p>
        <div class="three-col">
            ${bars(r.formatsTitle, sessionFormats.map(([type, count]) => ({ label: r.formats[type], count })))}
            ${bars(r.languagesTitle, sessionLanguages.map(([key, count]) => ({ label: r.languages[key], count })))}
            ${bars(r.topicsTitle, sessionTopics.slice(0, 6).map(([label, count]) => ({ label: r.topicNames?.[label] ?? label, count })))}
        </div>
        <div class="strip tall">
            ${[['day3', 8], ['day1', 8], ['day2', 8], ['day1', 9]].map(([day, n]) => `<img src="${photo(day, n)}" alt="">`).join('')}
        </div>`, { n: 4, footer });

    const days = DAYS.map((day, i) => {
        const d = r[day.key];
        const keys = agenda[day.key].filter((s) => s.id && (s.type === 'keynote' || s.type === 'panel'));
        return page(`
            ${i === 0 ? sectionTitle(4, r.daysTitle, r.daysHighlight) : ''}
            <div class="day-head">
                <span class="badge">${esc(dayBadge(day, r.dayWord, lang))}</span>
                <h3 class="day-title">${esc(d.title)}</h3>
            </div>
            <p>${esc(d.text)}</p>
            <p class="keys"><strong>${esc(r.keySessions)}:</strong> ${keys.map((s) => `${esc(sessionTitle(s, lang))} <span class="muted">(${esc(s.speaker)})</span>`).join(' · ')}</p>
            <div class="collage">
                ${[1, 2, 3, 4, 5, 6].map((n) => `<figure class="${n === 1 ? 'big' : ''}"><img src="${photo(day.key, n)}" alt=""><figcaption>${esc(d.photos[n - 1])}</figcaption></figure>`).join('')}
            </div>`, { n: 5 + i, footer });
    });

    const tierBlocks = sponsorsByTier(sponsorsList).map(({ tier, sponsors }) => `
        <div class="tier">
            <div class="tier-label">${esc(i18n.sponsors.tierLabels[tier])}</div>
            <div class="logos ${tier}">
                ${sponsors.map((s) => `<div class="logo"><img src="${asset(s.logo.slice(1))}" alt=""><span>${esc(s.name)}</span></div>`).join('')}
            </div>
        </div>`).join('');

    const sponsors = page(`
        ${sectionTitle(5, r.sponsorsTitle, r.sponsorsHighlight)}
        <p class="lead">${esc(r.sponsorsSubtitle)}</p>
        <div class="visibility">
            ${r.visibility.map((v) => `<div class="vis"><h4>${esc(v.title)}</h4><p>${esc(v.text)}</p></div>`).join('')}
        </div>
        <h3 class="sub">${esc(r.pdf.sponsorTiers)}</h3>
        ${tierBlocks}`, { n: 8, footer });

    const gallery = page(`
        ${sectionTitle(6, r.pdf.galleryTitle, r.pdf.galleryHighlight)}
        <div class="gallery">
            ${Array.from({ length: 24 }, (_, i) => `<img src="${extraPhoto(`gallery-${String(i + 1).padStart(2, '0')}`)}" alt="">`).join('')}
        </div>`, { n: 9, footer });

    const closing = page(`
        ${sectionTitle(7, r.aidTitle, r.aidHighlight)}
        <p class="muted">${esc(r.aidSubtitle)}</p>
        <div class="visibility aid">
            ${r.aid.map((v) => `<div class="vis"><h4>${esc(v.title)}</h4><p>${esc(v.text)}</p></div>`).join('')}
        </div>
        ${sectionTitle(8, r.partnersTitle, r.partnersHighlight)}
        <p class="muted">${esc(r.partnersSubtitle)}</p>
        <div class="partners">
            ${partnerCommunities.map((p) => `<div class="partner"><img src="${asset(p.image.slice(1))}" alt=""><span>${esc(p.name)}</span></div>`).join('')}
        </div>
        <div class="thanks">
            <h2>${esc(r.thanksTitle)} <span class="gradient">${esc(r.thanksHighlight)}</span></h2>
            <p>${esc(r.thanksText)}</p>
            <div class="contact">
                <span class="muted">Email</span><strong>organizers@pythoncameroon.org</strong>
                <span class="muted">Web</span><strong>${esc(r.pdf.website)}</strong>
                <span class="muted">${esc(r.sponsorDeck)}</span><strong>${esc(sponsorshipDeckUrl.replace(/^https?:\/\//, ''))}</strong>
            </div>
            <p class="closing-line gradient">${esc(r.pdf.closingTitle)}</p>
        </div>
        <div class="toghu bottom"></div>`, { n: 10, cls: 'last' });

    return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(r.pdf.edition)} · ${esc(r.pdf.kicker)}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Carter+One&family=Montserrat:wght@400;500;600;700&display=block">
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
    --black: #0d0d0d; --dark: #1a1a1a; --dark-alt: #242424; --border: rgba(224, 122, 36, 0.25);
    --orange: #e07a24; --yellow: #f5c518; --green: #2d8f4e; --red: #c9302c;
    --text: #ffffff; --text-2: rgba(255, 255, 255, 0.82); --muted: rgba(255, 255, 255, 0.6);
}
html, body { background: var(--black); }
body { font-family: 'Montserrat', sans-serif; color: var(--text-2); font-size: 10pt; line-height: 1.55; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3, h4, .hero-number, .tile-number, .kicker, .badge, .tier-label { font-family: 'Carter One', display; color: var(--text); font-weight: 400; }
.gradient { color: var(--orange); }
.muted { color: var(--muted); }
p + p { margin-top: 3mm; }
.page { position: relative; display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 18mm 16mm 22mm; overflow: hidden; page-break-after: always; background: var(--black); }
.page::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3mm; background: linear-gradient(90deg, var(--orange), var(--yellow)); }
.page-footer { position: absolute; left: 16mm; right: 16mm; bottom: 9mm; display: flex; justify-content: space-between; font-size: 7.5pt; color: var(--muted); border-top: 0.3mm solid var(--border); padding-top: 2.5mm; letter-spacing: 0.04em; }
.page-footer span:last-child { color: var(--orange); font-weight: 700; }
.kicker { color: var(--orange); font-size: 11pt; letter-spacing: 0.08em; margin-bottom: 1mm; }
h2 { font-size: 26pt; line-height: 1.1; margin-bottom: 5mm; }
h3 { font-size: 13pt; margin-bottom: 3mm; }
.lead { font-size: 11pt; color: var(--text); }
.toghu { position: absolute; left: 0; right: 0; height: 16mm; background: url('${asset('images/patterns/Toghu.webp')}') repeat-x center / auto 100%; }

.cover { padding: 0; }
.cover::before { display: none; }
.cover-photo { position: absolute; inset: 0; background-size: cover; background-position: center 30%; }
.cover-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.15) 30%, rgba(13,13,13,0.85) 62%, #0d0d0d 82%); }
.cover-top { position: absolute; top: 14mm; left: 16mm; right: 16mm; display: flex; justify-content: space-between; align-items: center; color: var(--text); font-weight: 600; letter-spacing: 0.06em; font-size: 9pt; }
.cover-logo { width: 22mm; height: 22mm; object-fit: contain; }
.cover-body { position: absolute; left: 16mm; right: 16mm; bottom: 34mm; }
.cover-kicker { display: inline-block; padding: 1.5mm 4mm; background: var(--orange); color: #fff; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; font-size: 9pt; margin-bottom: 5mm; }
.cover h1 { font-size: 46pt; line-height: 1.02; }
.cover .amp { color: var(--orange); }
.cover-meta { margin-top: 5mm; font-size: 11pt; color: var(--text-2); }
.cover .toghu { bottom: 0; }

.two-col { display: grid; grid-template-columns: 1fr 1.35fr; gap: 10mm; align-items: start; }
.two-col.fill { flex: 1; min-height: 0; align-items: stretch; }
.two-col.fill .panel-photo { height: 100%; }
.three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5mm; margin-top: 6mm; }
.toc { list-style: none; margin: 3mm 0 8mm; }
.toc li { display: flex; gap: 4mm; padding: 2.6mm 0; border-bottom: 0.3mm solid var(--border); color: var(--text); font-weight: 600; }
.toc span { color: var(--orange); font-family: 'Carter One', display; }
.foreword-photo { width: 100%; height: 62mm; object-fit: cover; object-position: center top; border-radius: 2mm; }
.strip { margin-top: auto; padding-top: 6mm; display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
.strip img { width: 100%; height: 48mm; object-fit: cover; object-position: center top; border-radius: 2mm; }
.gallery { flex: 1; min-height: 0; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(6, 1fr); gap: 2mm; margin-top: 2mm; }
.gallery img { width: 100%; height: 100%; min-height: 0; object-fit: cover; object-position: center top; border-radius: 1.5mm; }
.strip.fill { flex: 1; min-height: 0; grid-template-rows: 1fr 1fr; }
.strip.fill img { height: 100%; }
.strip.tall { flex: 1; min-height: 0; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
.strip.tall img { height: 100%; }

.hero-stat { display: flex; align-items: center; gap: 8mm; padding: 6mm 8mm; margin-bottom: 6mm; background: var(--dark); border: 0.3mm solid var(--border); border-left: 2mm solid var(--orange); border-radius: 2mm; }
.hero-number { font-size: 72pt; line-height: 1; }
.hero-label { font-family: 'Carter One', display; font-size: 20pt; color: var(--text); margin-bottom: 1mm; }
.tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-bottom: 7mm; }
.tile { background: var(--dark); border: 0.3mm solid var(--border); border-radius: 2mm; padding: 5mm; }
.tile-number { font-size: 28pt; color: var(--orange); line-height: 1.1; }
.tile-label { color: var(--muted); font-size: 9pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.panel { background: var(--dark); border: 0.3mm solid var(--border); border-radius: 2mm; padding: 5mm; }
.panel-photo { width: 100%; height: 100%; min-height: 70mm; object-fit: cover; object-position: center top; border-radius: 2mm; }
.bar + .bar { margin-top: 2.6mm; }
.bar-label { display: flex; justify-content: space-between; font-size: 8.5pt; margin-bottom: 1mm; }
.bar-label strong { color: var(--text); }
.bar-track { height: 2mm; background: var(--dark-alt); border-radius: 1mm; overflow: hidden; }
.bar-fill { height: 100%; background: var(--orange); border-radius: 1mm; }

.day-head { display: flex; align-items: center; gap: 4mm; margin-bottom: 3mm; }
.badge { background: var(--orange); color: #fff; border-radius: 10mm; padding: 1mm 4mm; font-size: 9pt; }
.day-title { font-size: 18pt; margin: 0; }
.keys { font-size: 8.8pt; margin-top: 3mm; }
.keys strong { color: var(--orange); }
.collage { flex: 1; min-height: 0; margin-top: 6mm; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 3mm; }
.collage figure { position: relative; overflow: hidden; border-radius: 2mm; }
.collage figure.big { grid-column: span 2; grid-row: span 2; }
.collage img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
.collage figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 6mm 3mm 2mm; font-size: 7.5pt; color: #fff; background: linear-gradient(transparent, rgba(0,0,0,0.85)); }

.visibility { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; margin: 5mm 0 6mm; }
.vis { background: var(--dark); border-top: 1mm solid var(--orange); border-radius: 2mm; padding: 3.5mm; }
.vis h4 { font-size: 10pt; line-height: 1.2; margin-bottom: 1.5mm; }
.vis p { font-size: 7.8pt; line-height: 1.45; }
.sub { margin-bottom: 4mm; }
.tier { display: grid; grid-template-columns: 32mm 1fr; gap: 4mm; align-items: center; padding: 2.5mm 0; border-top: 0.3mm solid var(--border); }
.tier-label { color: var(--orange); font-size: 11pt; }
.logos { display: flex; flex-wrap: wrap; gap: 3mm; }
.logo { width: 27mm; display: flex; flex-direction: column; align-items: center; gap: 1.2mm; font-size: 7pt; font-weight: 600; text-align: center; }
.logo img { width: 27mm; height: 13mm; object-fit: contain; background: #fff; border-radius: 2mm; padding: 2.5mm; }
.logos.diamond .logo { width: 56mm; }
.logos.diamond .logo img { width: 56mm; height: 22mm; }

.partners { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; margin: 4mm 0 6mm; }
.visibility.aid { grid-template-columns: repeat(3, 1fr); margin: 4mm 0 7mm; }
.aid .vis { border-top-color: var(--green); }
.partner { display: flex; flex-direction: column; align-items: center; gap: 2mm; text-align: center; font-size: 8pt; font-weight: 600; background: var(--dark); border: 0.3mm solid var(--border); border-radius: 2mm; padding: 3mm 2mm; }
.partner img { width: 15mm; height: 15mm; object-fit: contain; border-radius: 3mm; }
.thanks { background: linear-gradient(135deg, rgba(224,122,36,0.18), rgba(201,48,44,0.18)); border: 0.3mm solid var(--border); border-radius: 3mm; padding: 8mm; }
.thanks h2 { margin-bottom: 3mm; }
.contact { display: grid; grid-template-columns: max-content 1fr; gap: 2.5mm 6mm; align-items: baseline; margin: 6mm 0; padding: 4mm 0; border-top: 0.3mm solid var(--border); border-bottom: 0.3mm solid var(--border); font-size: 8.5pt; }
.contact strong { color: var(--text); font-size: 10pt; white-space: nowrap; }
.closing-line { font-family: 'Carter One', display; font-size: 16pt; }
.last .toghu.bottom { bottom: 0; }
.page.last { padding-bottom: 28mm; }
.last h2 { font-size: 20pt; margin-bottom: 3mm; }
.last .thanks { padding: 6mm 7mm; }
.last .contact { margin: 4mm 0; }
</style>
</head>
<body>
${[cover, foreword, numbers, programme, ...days, sponsors, gallery, closing].join('\n')}
</body>
</html>`;
};

mkdirSync(outDir, { recursive: true });
try {
    convertPhotos();
    for (const lang of ['en', 'fr']) {
        const html = join(work, `report-${lang}.html`);
        const pdf = join(outDir, `pycon-cameroon-2026-report-${lang}.pdf`);
        writeFileSync(html, build(lang));
        execFileSync(chrome, [
            '--headless=new',
            '--disable-gpu',
            '--no-pdf-header-footer',
            '--allow-file-access-from-files',
            '--virtual-time-budget=20000',
            `--print-to-pdf=${pdf}`,
            pathToFileURL(html).href,
        ], { stdio: 'inherit' });
        console.log(`Wrote ${pdf}`);
    }
} finally {
    rmSync(work, { recursive: true, force: true });
}
