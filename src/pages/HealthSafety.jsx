import React from "react";
import { useTranslation } from "react-i18next";

const HealthSafety = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="page-header">
        <div className="container text-center">
          <h1>
            {t("healthSafety.title")}{" "}
            <span className="text-gradient">
              {t("healthSafety.titleHighlight")}
            </span>
          </h1>
          <p>{t("healthSafety.subtitle")}</p>
        </div>
      </header>

      <section className="section">
        <div className="container legal-content">
          <p>{t("healthSafety.intro")}</p>

          <h2>{t("healthSafety.maskTitle")}</h2>
          <p>{t("healthSafety.maskP1")}</p>
          <p>{t("healthSafety.maskExceptions")}</p>
          <ul>
            {t("healthSafety.maskExceptionItems", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("healthSafety.maskRequirements")}</p>
          <p>{t("healthSafety.maskEnforcement")}</p>

          <h2>{t("healthSafety.vaccTitle")}</h2>
          <p>{t("healthSafety.vaccP1")}</p>
          <p>
            {t("healthSafety.vaccP2").split("organizers@pyconcameroon.org")[0]}
            <a
              href="mailto:organizers@pyconcameroon.org"
              style={{ color: "var(--color-orange)" }}
            >
              organizers@pyconcameroon.org
            </a>
            {t("healthSafety.vaccP2").split("organizers@pyconcameroon.org")[1]}
          </p>

          <h2>{t("healthSafety.visaTitle")}</h2>
          <p>{t("healthSafety.visaP1")}</p>
          <p>{t("healthSafety.visaP2")}</p>

          <h2>{t("healthSafety.airportTitle")}</h2>
          <p>{t("healthSafety.airportText")}</p>

          <h2>{t("healthSafety.adviceTitle")}</h2>
          <p>{t("healthSafety.adviceIntro")}</p>
          <ul>
            {t("healthSafety.adviceItems", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              )
            )}
          </ul>

          <h2>{t("healthSafety.habitsTitle")}</h2>
          <p>{t("healthSafety.habitsP1")}</p>
          <p>{t("healthSafety.habitsP2")}</p>

          <h2>{t("healthSafety.disclaimerTitle")}</h2>
          <p>{t("healthSafety.disclaimerText")}</p>

          <p>{t("healthSafety.organizedBy")}</p>
          <p>
            {t("healthSafety.contactUs")}{" "}
            <a
              href="mailto:organizers@pythoncameroon.org"
              style={{ color: "var(--color-orange)" }}
            >
              organizers@pythoncameroon.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default HealthSafety;
