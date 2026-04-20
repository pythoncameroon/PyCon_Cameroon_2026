import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Megaphone, Calendar, Target, AlertTriangle, ScrollText, HelpingHand } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const TIMELINE_MILESTONES = [
    { date: new Date('2026-03-30') },
    { date: new Date('2026-05-15T23:59:00+01:00') },
    { date: new Date('2026-05-30') },
    { date: new Date('2026-06-15') },
    { date: new Date('2026-09-19') },
];

function getCfpStatus(now) {
    const cfpOpen = TIMELINE_MILESTONES[0].date;
    const cfpClose = TIMELINE_MILESTONES[1].date;
    if (now < cfpOpen) return 'upcoming';
    if (now <= cfpClose) return 'open';
    return 'closed';
}

function getTimelineItemStatus(milestone, index, now) {
    const nextMilestone = TIMELINE_MILESTONES[index + 1];
    if (nextMilestone && now >= nextMilestone.date) return 'past';
    if (now >= milestone.date) return 'active';
    return 'upcoming';
}

const Speakers = () => {
    useScrollAnimation();
    const { t } = useTranslation();
    const { l } = useLocalizedPath();

    const now = useMemo(() => new Date(), []);
    const cfpStatus = getCfpStatus(now);

    const translatedMilestones = t('speakers.timelineMilestones', { returnObjects: true });

    const milestones = TIMELINE_MILESTONES.map((m, i) => ({
        ...m,
        label: translatedMilestones[i].label,
        title: translatedMilestones[i].title,
        description: translatedMilestones[i].description,
    }));

    const bannerContent = {
        upcoming: { text: t('speakers.cfpUpcoming', { date: milestones[0].label }) },
        open: { text: t('speakers.cfpOpen') },
        closed: { text: t('speakers.cfpClosed') },
    }[cfpStatus];

    const ctaText = {
        upcoming: t('speakers.ctaUpcoming', { date: milestones[0].label }),
        open: t('speakers.ctaOpen', { date: milestones[1].label }),
        closed: t('speakers.ctaClosed'),
    }[cfpStatus];

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('speakers.title')} <span className="text-gradient">{t('speakers.titleHighlight')}</span></h1>
                    <p>{t('speakers.subtitle')}</p>
                </div>
            </header>

            {/* Call for Speakers Banner */}
            <section className="section bg-dark" id="call-for-speakers">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="card-icon" style={{ margin: '0 auto var(--spacing-md)' }}>
                            <img src="/images/general/Unknown.webp" alt="Speak" loading="lazy" />
                        </div>
                        <h2>{t('speakers.excitedTitle')}</h2>
                        <p style={{ fontSize: '1.25rem', margin: 'var(--spacing-md) 0' }}>
                            {t('speakers.excitedText')}
                        </p>

                        <p style={{ textAlign: 'left', margin: 'var(--spacing-lg) 0' }}>
                            <strong><Megaphone size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} /> {bannerContent.text}</strong><br />
                            {t('speakers.bannerInvite')}
                        </p>

                        {cfpStatus !== 'closed' && (
                            <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t('speakers.submitProposal')}</a>
                        )}

                        <p style={{ marginTop: 'var(--spacing-lg)', fontSize: '1rem' }}>
                            <HelpingHand size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} />
                            {t('speakers.financialAidNote')}{' '}
                            <Link to={l('/financial-aid')} style={{ color: 'var(--color-orange)', fontWeight: 600, textDecoration: 'underline' }}>
                                {t('speakers.financialAidLink')}
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Proposal Guidelines */}
            <section className="section" id="guidelines">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('speakers.guidelinesTitle')} <span className="text-gradient">{t('speakers.guidelinesHighlight')}</span></h2>
                        <p>{t('speakers.guidelinesSubtitle')}</p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p>
                            {t('speakers.guidelinesIntro')}
                        </p>

                        <p>
                            {t('speakers.guidelinesNote')}
                        </p>

                        {/* Timeline */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            <Calendar size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} /> {t('speakers.timeline')}
                        </h3>

                        <div className="timeline">
                            {milestones.map((milestone, index) => {
                                const status = getTimelineItemStatus(milestone, index, now);
                                return (
                                    <div className={`timeline-item timeline-${status}`} key={index}>
                                        <div className="timeline-date">
                                            {milestone.label}
                                            {status === 'active' && <span className="timeline-badge">{t('speakers.now')}</span>}
                                            {status === 'past' && <span className="timeline-badge timeline-badge-done">{t('speakers.done')}</span>}
                                        </div>
                                        <div className="timeline-content">
                                            <h4>{milestone.title}</h4>
                                            <p>{milestone.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Session Types */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            <Target size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} /> {t('speakers.sessionTypes')}
                        </h3>

                        <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>{t('speakers.regularTalks')}</h4>
                                <p className="card-text">
                                    {t('speakers.regularTalksText')}
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>{t('speakers.lightningTalks')}</h4>
                                <p className="card-text">
                                    {t('speakers.lightningTalksText')}
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>{t('speakers.workshopsSessions')}</h4>
                                <p className="card-text">
                                    {t('speakers.workshopsSessionsText')}
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>{t('speakers.panelDiscussions')}</h4>
                                <p className="card-text">
                                    {t('speakers.panelDiscussionsText')}
                                </p>
                            </div>
                        </div>

                        {/* UbuCon Track */}
                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                <img
                                    src="/images/partners/canonical-cm.webp"
                                    alt="UbuCon"
                                    style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }}
                                />
                                <strong style={{ fontSize: '1.1rem' }}>{t('speakers.ubuconTrackNew')}</strong>
                            </div>
                            <p>{t('speakers.ubuconTrackText')}</p>
                        </div>

                        {/* Important Notes */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            <AlertTriangle size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} /> {t('speakers.importantNotes')}
                        </h3>

                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{t('speakers.aiPolicy')}</h4>
                            <p>{t('speakers.aiPolicyText')}</p>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{t('speakers.proposalLimit')}</h4>
                            <ul style={{ paddingLeft: '1.5rem' }}>
                                {t('speakers.proposalLimitItems', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{t('speakers.recordingNotice')}</h4>
                            <p>{t('speakers.recordingNoticeText')}</p>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{t('speakers.speakerSupport')}</h4>
                            <p>{t('speakers.speakerSupportText')}</p>
                        </div>

                        {/* Code of Conduct */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            <ScrollText size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} /> {t('speakers.codeOfConduct')}
                        </h3>

                        <p>
                            {t('speakers.cocP1')}
                        </p>

                        <p>
                            {t('speakers.cocP2')}
                        </p>

                        <div className="text-center mt-lg">
                            <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t('speakers.submitOnSessionize')}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Speakers Section */}
            <section className="section bg-dark" id="featured-speakers">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('speakers.featuredTitle')} <span className="text-gradient">{t('speakers.featuredHighlight')}</span></h2>
                        <p>{t('speakers.featuredSubtitle')}</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                        <div className="card-icon" style={{ margin: '0 auto var(--spacing-md)' }}>
                            <img src="/images/general/aa8b76bc47ebdea99b84fa3a26a94ade.webp" alt="Rocket" loading="lazy" />
                        </div>
                        <h3>{t('speakers.comingSoon')}</h3>
                        <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                            {t('speakers.comingSoonText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Speak Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('speakers.whySpeakTitle')} <span className="text-gradient">{t('speakers.whySpeakHighlight')}</span> {t('speakers.whySpeakSuffix')}</h2>
                    </div>

                    <div className="grid grid-3 stagger">
                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/97568bbec02a103e305ee0d2bbaa6106.webp" alt="Travel" loading="lazy" />
                            </div>
                            <h4>{t('speakers.reachAudience')}</h4>
                            <p className="card-text">
                                {t('speakers.reachAudienceText')}
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Video" loading="lazy" />
                            </div>
                            <h4>{t('speakers.recordedShared')}</h4>
                            <p className="card-text">
                                {t('speakers.recordedSharedText')}
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/3b576d7a5b2e395a5741d81d07bdcfc8.webp" alt="Ticket" loading="lazy" />
                            </div>
                            <h4>{t('speakers.freePass')}</h4>
                            <p className="card-text">
                                {t('speakers.freePassText')}
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/African.webp" alt="Networking" loading="lazy" />
                            </div>
                            <h4>{t('speakers.speakerNetworking')}</h4>
                            <p className="card-text">
                                {t('speakers.speakerNetworkingText')}
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/38d4f8046c74231baf303ee9c7a340bf.webp" alt="Networking" loading="lazy" />
                            </div>
                            <h4>{t('speakers.buildBrand')}</h4>
                            <p className="card-text">
                                {t('speakers.buildBrandText')}
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/ac5ca270fe9d4f7c17c5b2bf97337208.webp" alt="Ideas" loading="lazy" />
                            </div>
                            <h4>{t('speakers.giveBack')}</h4>
                            <p className="card-text">
                                {t('speakers.giveBackText')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-green) 0%, var(--color-teal) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>{t('speakers.readyToShare')}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        {ctaText}
                    </p>
                    {cfpStatus !== 'closed' && (
                        <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-green)' }}>
                            {t('speakers.submitProposalNow')}
                        </a>
                    )}
                </div>
            </section>
        </>
    );
};

export default Speakers;
