import React from "react";

const HealthSafety = () => {
  return (
    <>
      <header className="page-header">
        <div className="container text-center">
          <h1>
            Health and Safety <span className="text-gradient">Guidelines</span>
          </h1>
          <p>PyCon Cameroon 2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container legal-content">
          <p>
            PyCon Cameroon 2026 will be held as a live, in-person event in
            Yaoundé, Cameroon. Your health and safety are important to us. We
            want PyCon Cameroon to be an event that everyone feels safe
            attending. PyCon Cameroon will follow applicable national and local
            health and safety laws, adapting our plans accordingly and sharing
            updates with all attendees.
          </p>

          <h2>MASK POLICY</h2>
          <p>
            We are asking you to wear a mask during your time at PyCon Cameroon.
            That includes talks, the expo hall, hallways, and sprints.
          </p>
          <p>Exceptions are:</p>
          <ul>
            <li>Outdoor spaces</li>
            <li>Indoors while actively consuming food or beverages</li>
            <li>Speakers while presenting</li>
            <li>
              While necessary for communicating with someone who is hearing
              impaired when the ability to see the mouth is essential for
              communication
            </li>
            <li>Very briefly to take photos</li>
          </ul>
          <p>
            Masks must be worn over the nose and mouth and must be made of a
            tight-knit, non-permeable material. N95 or equivalent masks such as
            KN95 or K95 are recommended. Alternatives to face coverings such as
            face shields, loose gaiters, scarves, bandanas, and face coverings
            with ventilation are not permitted to be used as masks. Although we
            encourage you to bring your own masks that you find comfortable,
            there will also be free masks available for attendees during each
            day of PyCon Cameroon, as supplies permit.
          </p>
          <p>
            Attendees who are repeatedly unwilling to comply with the mask
            requirements will be asked to leave and are not eligible for a
            refund.
          </p>

          <h2>VACCINATIONS</h2>
          <p>
            We encourage PyCon Cameroon attendees to stay up to date with the
            vaccinations that are available to them where they live. We know
            that attendees are coming from different regions and countries, and
            the availability of vaccines may vary. We encourage you to do your
            best.
          </p>
          <p>
            We expect people to stay home if they may be contagious. If you are
            feeling sick or exhibiting symptoms of COVID-19, or test positive
            for COVID-19, prior to the start of the conference or on any day of
            the conference, please contact us at{" "}
            <a
              href="mailto:organizers@pyconcameroon.org"
              style={{ color: "var(--color-orange)" }}
            >
              organizers@pyconcameroon.org
            </a>{" "}
            and our health and safety team will advise accordingly.
          </p>

          <h2>VISA INFORMATION</h2>
          <p>
            Cameroon visa requirements vary depending on your nationality.
            Citizens of ECOWAS member states and several other African countries
            may enter Cameroon without a visa or obtain a visa on arrival.
            Citizens of most other countries will need to obtain a visa from a
            Cameroonian Embassy or Consulate prior to travel.
          </p>
          <p>
            Please check your specific country's requirements well in advance
            and contact us if you require a support letter for your visa
            application. You should also ensure you have any required
            vaccination certificates (such as yellow fever) before travelling to
            Cameroon.
          </p>

          <h2>AIRPORT AND TRAVEL</h2>
          <p>
            All international travel will arrive through Nsimalen International
            Airport, Yaoundé. Various airlines provide services to Yaoundé. Some
            hotels offer pick-up services and we encourage participants with
            such options to use them. Taxis and ride-hailing services are also
            available.
          </p>

          <h2>ADVICE FOR INTERNATIONAL VISITORS</h2>
          <p>
            Please read this information carefully. Some of it is crucial and it
            will help you have a better travel experience.
          </p>
          <ul>
            <li>
              <strong>Visa:</strong> You may need a visa to enter Cameroon.
              Check this well in advance, as failing to do so may result in
              denied entry or being unable to board your flight. Contact us if
              you have any questions.
            </li>
            <li>
              <strong>Yellow Fever Certificate:</strong> A valid yellow fever
              vaccination certificate is required to enter Cameroon. Please
              ensure you have this before travelling — do not leave it until the
              last minute.
            </li>
            <li>
              <strong>Other vaccinations:</strong> Optional but recommended
              vaccinations include Hepatitis A, Tetanus, and Typhoid.
            </li>
            <li>
              <strong>Malaria precautions:</strong> Malaria precautions are
              strongly advised. Seek medical advice on whether you should be
              taking anti-malarial medication before and during your visit.
            </li>
          </ul>

          <h2>HEALTHY HABITS</h2>
          <p>
            Hand sanitizing stations will be placed throughout PyCon Cameroon
            venues to encourage frequent hand sanitization.
          </p>
          <p>
            We will issue best practices for attendees that include avoiding
            close-contact greetings where possible and how exhibitors can best
            manage product demonstrations.
          </p>

          <h2>DISCLAIMER</h2>
          <p>
            PyCon Cameroon takes these Health and Safety Guidelines very
            seriously and will enforce a 3-strike rule. Anyone who violates
            these guidelines on three separate occasions — such as continuing to
            not wear a proper mask or disregarding safe distancing — is subject
            to removal from the conference. Anyone who provides false
            vaccination verification will not be admitted to PyCon Cameroon.
          </p>

          <p>
            PyCon Cameroon 2026 is organised by a team of volunteers on behalf
            of the Python community in Cameroon.
          </p>
          <p>
            Contact us:{" "}
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
