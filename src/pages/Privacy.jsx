import React from 'react';

const Privacy = () => {
    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>Privacy <span className="text-gradient">Policy</span></h1>
                    <p>How we handle your data</p>
                </div>
            </header>

            {/* Content */}
            <section className="section">
                <div className="container legal-content">
                    <p>Last updated: January 2026</p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us when you register for the conference, submit a
                        proposal, or subscribe to our newsletter. This includes your name, email address, job title, and
                        company.</p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Process your registration and payments.</li>
                        <li>Send you updates and information about the conference.</li>
                        <li>Coordinate speaker schedules and travel.</li>
                        <li>Improve our event based on your feedback.</li>
                    </ul>

                    <h2>3. Information Sharing</h2>
                    <p>We do not sell your personal information. We may share your information with trusted third-party service
                        providers who assist us in operating our website and conducting the conference, so long as those parties
                        agree to keep this information confidential.</p>

                    <h2>4. Cookies</h2>
                    <p>Our website uses cookies to enhance your experience. You can choose to disable cookies through your
                        browser settings, but this may affect the functionality of the site.</p>

                    <h2>5. Data Security</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information. However,
                        no method of transmission over the Internet is 100% secure.</p>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these
                        rights, please contact us.</p>

                    <h2>7. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:organizers@pythoncameroon.org"
                        style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a>.</p>
                </div>
            </section>
        </>
    );
};

export default Privacy;
