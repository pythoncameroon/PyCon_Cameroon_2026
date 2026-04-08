import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../hooks/useScrollAnimation";
import LazyImage from "../components/LazyImage";
import TeamCard from "../components/TeamCard";
import PartnerCard from "../components/PartnerCard";
import { teamData } from "../data/team";
import { valuesData } from "../data/values";
import { partnerCommunities } from "../data/partners";

const About = () => {
  useScrollAnimation();
  const { t } = useTranslation();

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="container text-center">
          <h1>
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h1>
          <p>
            {t('about.subtitle')}
          </p>
        </div>
      </header>

      {/* Python Cameroon User Group Section */}
      <section className="section bg-dark">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "var(--spacing-xl)" }}
          >
            <div>
              <h2 style={{ marginBottom: "var(--spacing-md)" }}>
                {t('about.userGroupTitle')}{" "}
                <span className="text-gradient">{t('about.userGroupHighlight')}</span>
              </h2>
              <p>
                {t('about.userGroupP1')}
              </p>
              <p>
                {t('about.userGroupP2')}
              </p>
              <p>
                {t('about.userGroupP3')}
              </p>
              <div className="mt-md flex gap-sm flex-wrap">
                <a
                  href="https://chat.whatsapp.com/Ckc80ophGEH0NJFmZAzDMr"
                  className="btn btn-primary"
                >
                  {t('about.joinCommunity')}
                </a>
              </div>
            </div>
            <div>
              <LazyImage
                src="/images/general/50b4bb72bcda16fbabf50f8ca87ca412.webp"
                className="img-limit-height"
                alt="Community"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="tribal-border"></div>

      {/* PyCon Cameroon Mission Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>
              {t('about.missionTitle')} <span className="text-gradient">{t('about.missionHighlight')}</span>
            </h2>
          </div>

          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "var(--spacing-xl)" }}
          >
            <div>
              <LazyImage
                src="/images/general/5e7ef535d7837d92dc28625166cc2568.webp"
                alt="PyCon Mission"
                className="img-limit-height"
              />
            </div>
            <div>
              <h3 style={{ marginBottom: "var(--spacing-md)" }}>
                {t('about.pyconCameroon')}
              </h3>
              <p>
                {t('about.missionP1')}
              </p>
              <p>
                {t('about.missionP2')}
              </p>
              <p>
                {t('about.missionP3')}
              </p>
              <p
                style={{
                  color: "var(--color-orange)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
              >
                {t('about.missionInvite')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="section-header">
            <h2>
              {t('about.valuesTitle')} <span className="text-gradient">{t('about.valuesHighlight')}</span>
            </h2>
          </div>

          <div className="grid grid-3 stagger">
            {valuesData.map((value, index) => (
              <div className="card animate-on-scroll slide-up" key={index}>
                <div className="card-icon">
                  <LazyImage src={value.image} alt={value.alt} />
                </div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <div className="container">
          <div className="section-header">
            <h2>
              {t('about.teamTitle')} <span className="text-gradient">{t('about.teamHighlight')}</span>
            </h2>
            <p>
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          <div className="text-center mt-lg">
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--spacing-md)" }}>
              {t('about.volunteerText')}
            </p>
            <a href="mailto:organizers@pythoncameroon.org" className="btn btn-primary">
              {t('about.joinTeam')}
            </a>
          </div>
        </div>
      </section>

      <div className="tribal-border"></div>

      {/* Partner Communities */}
      <section className="section bg-dark" id="partners">
        <div className="container">
          <div className="section-header">
            <h2>
              {t('about.partnersTitle')} <span className="text-gradient">{t('about.partnersHighlight')}</span>
            </h2>
            <p>
              {t('about.partnersSubtitle')}
            </p>
          </div>

          <div className="grid grid-4 stagger" style={{ alignItems: 'center', justifyItems: 'center' }}>
            {partnerCommunities.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <div className="tribal-border"></div>

      {/* Code of Conduct */}
      <section className="section bg-dark" id="code-of-conduct">
        <div className="container">
          <div className="section-header">
            <h2>
              {t('about.conductTitle')} <span className="text-gradient">{t('about.conductHighlight')}</span>
            </h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="alert alert-info">
              <strong>{t('about.conductCommitment')}</strong>
              <br />
              {t('about.conductText')}
            </div>

            <p>
              {t('about.conductP1')}
            </p>

            <p>
              {t('about.conductP2')}
            </p>

            <div className="mt-md">
              <Link to="/code-of-conduct" className="btn btn-secondary">
                {t('about.readFullCoC')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
