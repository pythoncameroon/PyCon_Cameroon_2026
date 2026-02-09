import React from 'react';

const Terms = () => {
    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>Terms and <span className="text-gradient">Conditions</span></h1>
                    <p>Please read these terms carefully before registering</p>
                </div>
            </header>

            {/* Content */}
            <section className="section">
                <div className="container legal-content">
                    <p>Last updated: January 2026</p>

                    <h2>1. Introduction</h2>
                    <p>Welcome to PyCon Cameroon 2026. By registering for or attending our conference, you agree to comply with
                        and be bound by the following terms and conditions.</p>

                    <h2>2. Registration and Payment</h2>
                    <ul>
                        <li>All registrations must be paid in full prior to the event.</li>
                        <li>Tickets are transferable until August 1, 2026, upon written request.</li>
                        <li>We reserve the right to cancel any registration that does not comply with our policies.</li>
                    </ul>

                    <h2>3. Cancellation and Refunds</h2>
                    <p>Cancellations received by July 15, 2026, will receive a refund less a processing fee. No refunds will be
                        granted after this date unless for visa denial or serious health reasons, subject to verification.</p>

                    <h2>4. Code of Conduct</h2>
                    <p>All attendees, speakers, sponsors, and volunteers are required to agree with the Code of Conduct.
                        Organizers will enforce this code throughout the event. We expect cooperation from all participants to
                        help ensure a safe environment for everybody.</p>

                    <h2>5. Photography and Media</h2>
                    <p>By attending PyCon Cameroon, you grant permission for the organizers to use photographs and video
                        recordings of you taken during the event for marketing and promotional purposes.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p>PyCon Cameroon organizers will not be liable for any loss, injury, or damage to persons or property
                        during the event. Attendees are responsible for their own personal belongings and safety.</p>

                    <h2>7. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at <a href="mailto:organizers@pythoncameroon.org"
                        style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a>.</p>
                </div>
            </section>
        </>
    );
};

export default Terms;
