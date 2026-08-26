import React, { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { sponsorsByTier, sponsorsList as defaultSponsorsList } from '../data/sponsorsList';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const getDescription = (sponsor, lang) =>
    sponsor.description?.[lang] ?? sponsor.description?.en ?? '';

const DiamondCard = ({ sponsor, t, lang }) => (
    <div className="card sponsor-showcase-card diamond animate-on-scroll slide-up">
        <div className="sponsor-showcase-logo diamond">
            <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
        </div>
        <div className="sponsor-showcase-body">
            <span className="sponsor-showcase-badge diamond">{t('sponsors.tierBadge.diamond')}</span>
            <h3 className="sponsor-showcase-name">{sponsor.name}</h3>
            <p className="sponsor-showcase-desc">{getDescription(sponsor, lang)}</p>
            {sponsor.website && (
                <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor-showcase-link"
                >
                    {t('sponsors.visitWebsite')} <ArrowUpRight size={16} />
                </a>
            )}
        </div>
    </div>
);

const GoldCard = ({ sponsor, t, lang }) => (
    <div className="card sponsor-showcase-card gold animate-on-scroll slide-up">
        <div className="sponsor-showcase-gold-head">
            <div className="sponsor-showcase-logo gold">
                <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
            </div>
            <div>
                <h3 className="sponsor-showcase-name">{sponsor.name}</h3>
                <span className="sponsor-showcase-badge gold">{t('sponsors.tierBadge.gold')}</span>
            </div>
        </div>
        <p className="sponsor-showcase-desc">{getDescription(sponsor, lang)}</p>
        {sponsor.website && (
            <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-showcase-link"
            >
                {t('sponsors.visitWebsite')} <ArrowUpRight size={16} />
            </a>
        )}
    </div>
);

const SilverCard = ({ sponsor, lang }) => (
    <div className="card sponsor-showcase-card silver animate-on-scroll slide-up">
        <div className="sponsor-showcase-logo silver">
            <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
        </div>
        {sponsor.website ? (
            <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-showcase-name silver-link"
            >
                {sponsor.name}
            </a>
        ) : (
            <h4 className="sponsor-showcase-name">{sponsor.name}</h4>
        )}
        <p className="sponsor-showcase-desc">{getDescription(sponsor, lang)}</p>
    </div>
);

// Shared logo-tile layout for the "bronze", "community", and "deployment" tiers.
// The description lives in a floating popover shown on hover/focus
// (desktop) or tap (touch devices) rather than inline.
const LogoTile = ({ sponsor, tier, lang, t }) => {
    const description = getDescription(sponsor, lang);
    const popoverId = useId();
    const tileRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isBelow, setIsBelow] = useState(false);

    const isTouchDevice = () =>
        typeof window !== 'undefined' && window.matchMedia?.('(hover: none)').matches;

    const updatePlacement = () => {
        const top = tileRef.current?.getBoundingClientRect().top ?? Infinity;
        setIsBelow(top < 300);
    };

    const handleTileClick = (e) => {
        if (e.target.closest('a')) return; // let real links navigate normally
        if (!isTouchDevice()) return;
        updatePlacement();
        setOpen((v) => !v);
    };

    useEffect(() => {
        if (!open) return undefined;

        const handlePointerDown = (e) => {
            if (!tileRef.current?.contains(e.target)) setOpen(false);
        };
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    return (
        <div
            ref={tileRef}
            className={`card sponsor-showcase-tile ${tier} animate-on-scroll slide-up`}
            data-placement={isBelow ? 'below' : 'above'}
            data-open={open ? 'true' : undefined}
            onMouseEnter={updatePlacement}
            onFocus={updatePlacement}
            onClick={handleTileClick}
            tabIndex={sponsor.website ? undefined : 0}
            aria-describedby={description ? popoverId : undefined}
        >
            <div className="sponsor-showcase-tile-logo">
                <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
            </div>
            {sponsor.website ? (
                <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor-showcase-tile-name"
                >
                    {sponsor.name}
                </a>
            ) : (
                <span className="sponsor-showcase-tile-name">{sponsor.name}</span>
            )}
            {description && (
                <div
                    className="sponsor-showcase-popover"
                    id={popoverId}
                    role="group"
                    aria-label={sponsor.name}
                >
                    <div className="sponsor-showcase-popover-head">
                        <div className="sponsor-showcase-popover-logo">
                            <img src={sponsor.logo} alt="" loading="lazy" />
                        </div>
                        <div>
                            <div className="sponsor-showcase-popover-name">{sponsor.name}</div>
                            <span className={`sponsor-showcase-badge ${tier}`}>
                                {t(`sponsors.tierBadge.${tier}`)}
                            </span>
                        </div>
                    </div>
                    <p className="sponsor-showcase-popover-desc">{description}</p>
                    {sponsor.website && (
                        <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sponsor-showcase-popover-link"
                        >
                            {t('sponsors.visitWebsite')} <ArrowUpRight size={14} />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

const SponsorShowcase = ({ sponsors = defaultSponsorsList }) => {
    const { t, i18n } = useTranslation();
    const { l } = useLocalizedPath();
    const groups = sponsorsByTier(sponsors);

    if (groups.length === 0) {
        return (
            <section className="section" id="sponsors">
                <div className="container">
                    <div className="card sponsor-showcase-empty animate-on-scroll slide-up">
                        <h3>{t('sponsors.emptyTitle')}</h3>
                        <p>{t('sponsors.emptyText')}</p>
                        <Link to={l('/sponsor')} className="btn btn-secondary">
                            {t('sponsors.becomeSponsor')}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section" id="sponsors">
            <div className="container">
                {groups.map(({ tier, sponsors: tierSponsors }) => (
                    <div className="sponsor-tier-block" key={tier}>
                        <div className="sponsor-tier-heading">
                            <span className={`sponsor-tier-heading-label ${tier}`}>
                                {t(`sponsors.tierLabels.${tier}`)}
                            </span>
                            <span className="sponsor-tier-heading-line" />
                        </div>

                        {tier === 'diamond' && (
                            <div className="sponsor-showcase-diamond-list">
                                {tierSponsors.map((sponsor) => (
                                    <DiamondCard key={sponsor.id} sponsor={sponsor} t={t} lang={i18n.language} />
                                ))}
                            </div>
                        )}

                        {tier === 'gold' && (
                            <div className="grid grid-2 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <GoldCard key={sponsor.id} sponsor={sponsor} t={t} lang={i18n.language} />
                                ))}
                            </div>
                        )}

                        {tier === 'silver' && (
                            <div className="grid grid-3 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <SilverCard key={sponsor.id} sponsor={sponsor} lang={i18n.language} />
                                ))}
                            </div>
                        )}

                        {tier === 'bronze' && (
                            <div className="grid grid-4 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <LogoTile key={sponsor.id} sponsor={sponsor} tier="bronze" lang={i18n.language} t={t} />
                                ))}
                            </div>
                        )}

                        {tier === 'community' && (
                            <div className="grid grid-4 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <LogoTile key={sponsor.id} sponsor={sponsor} tier="community" lang={i18n.language} t={t} />
                                ))}
                            </div>
                        )}

                        {tier === 'deployment' && (
                            <div className="grid grid-4 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <LogoTile key={sponsor.id} sponsor={sponsor} tier="deployment" lang={i18n.language} t={t} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <div className="text-center mt-lg">
                    <p className="mb-md">{t('sponsors.joinList')}</p>
                    <Link to={l('/sponsor')} className="btn btn-secondary">
                        {t('sponsors.becomeSponsor')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SponsorShowcase;
