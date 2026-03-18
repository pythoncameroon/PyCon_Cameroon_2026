import React from 'react';

const CodeOfConduct = () => {
    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>Code of <span className="text-gradient">Conduct</span></h1>
                    <p>PyCon Cameroon 2026</p>
                </div>
            </header>

            <section className="section">
                <div className="container legal-content">
                    <h2>Our Commitment</h2>
                    <p>PyCon Cameroon is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.</p>
                    <p>We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter, and other online media.</p>
                    <p>Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>

                    <h2>Expected Behavior</h2>
                    <ul>
                        <li>Be considerate, respectful, and collaborative.</li>
                        <li>Refrain from demeaning, discriminatory or harassing behavior and speech.</li>
                        <li>Be mindful of your surroundings and of your fellow participants. Alert conference organizers if you notice a dangerous situation or someone in distress.</li>
                        <li>Participate in an authentic and active way. In doing so, you help to create PyCon Cameroon and make it your own.</li>
                    </ul>

                    <h2>Unacceptable Behavior</h2>
                    <p>Unacceptable behaviors include, but are not limited to:</p>
                    <ul>
                        <li>Intimidating, harassing, abusive, discriminatory, derogatory, or demeaning conduct by any attendees of PyCon Cameroon and related events.</li>
                        <li>Offensive verbal comments related to gender, sexual orientation, race, religion, or disability.</li>
                        <li>Inappropriate use of nudity and/or sexual images in public spaces (including presentation slides).</li>
                        <li>Deliberate intimidation, stalking or following.</li>
                        <li>Harassing photography or recording.</li>
                        <li>Sustained disruption of talks or other events.</li>
                        <li>Inappropriate physical contact.</li>
                        <li>Unwelcome sexual attention.</li>
                    </ul>

                    <h2>Consequences of Unacceptable Behavior</h2>
                    <p>Unacceptable behavior will not be tolerated whether by other attendees, media, speakers, volunteers, organizers, venue staff, sponsors, or exhibitors.</p>
                    <p>Anyone asked to stop unacceptable behavior is expected to comply immediately.</p>
                    <p>If a participant engages in unacceptable behavior, the conference organizers may take any action they deem appropriate, up to and including expulsion from the conference without warning or refund.</p>

                    <h2>What to Do if You Witness or Are Subject to Unacceptable Behavior</h2>
                    <p>If you are subject to unacceptable behavior, notice that someone else is being subject to unacceptable behavior, or have any other concerns, please notify a conference organizer as soon as possible.</p>
                    <p>The PyCon Cameroon team will be available to help participants contact venue security or local law enforcement, to provide escorts, or to otherwise assist those experiencing unacceptable behavior to feel safe for the duration of the conference.</p>

                    <h2>Contact Information</h2>
                    <p>If you need to report any issues, please reach out to us:</p>
                    <p>Email: <a href="mailto:organizers@pythoncameroon.org" style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a></p>
                </div>
            </section>
        </>
    );
};

export default CodeOfConduct;
