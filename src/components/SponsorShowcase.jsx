import React from 'react';
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

// Shared logo-tile layout for the "bronze" and "community" tiers.
const LogoTile = ({ sponsor, tier, lang }) => {
    const Tag = sponsor.website ? 'a' : 'div';
    const linkProps = sponsor.website
        ? { href: sponsor.website, target: '_blank', rel: 'noopener noreferrer' }
        : {};
    const description = getDescription(sponsor, lang);

    return (
        <Tag className={`card sponsor-showcase-tile ${tier} animate-on-scroll slide-up`} {...linkProps}>
            <div className="sponsor-showcase-tile-logo">
                <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
            </div>
            <span className="sponsor-showcase-tile-name">{sponsor.name}</span>
            {description && (
                <span className="sponsor-showcase-tile-desc">{description}</span>
            )}
        </Tag>
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
                                    <LogoTile key={sponsor.id} sponsor={sponsor} tier="bronze" lang={i18n.language} />
                                ))}
                            </div>
                        )}

                        {tier === 'community' && (
                            <div className="grid grid-4 stagger">
                                {tierSponsors.map((sponsor) => (
                                    <LogoTile key={sponsor.id} sponsor={sponsor} tier="community" lang={i18n.language} />
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
