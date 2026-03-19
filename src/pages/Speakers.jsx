import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Speakers = () => {
    useScrollAnimation();

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>Call for <span className="text-gradient">Speakers</span></h1>
                    <p>Share your expertise and inspire the Python community in Cameroon</p>
                </div>
            </header>

            {/* Call for Speakers Banner */}
            <section className="section bg-dark" id="call-for-speakers">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="card-icon" style={{ margin: '0 auto var(--spacing-md)' }}>
                            <img src="/images/general/Unknown.webp" alt="Speak" />
                        </div>
                        <h2>We're Excited to Have You!</h2>
                        <p style={{ fontSize: '1.25rem', margin: 'var(--spacing-md) 0' }}>
                            Whether you're a first-time speaker or a seasoned presenter, we want to hear from you!
                            If you have an interesting Python topic, project, or experience to share,
                            submit your proposal and we'll review it with care.
                        </p>

                        <div className="alert alert-success" style={{ textAlign: 'left', margin: 'var(--spacing-lg) 0' }}>
                            <strong>📢 Call for Proposals will be OPEN this March 01 2026!</strong><br />
                            We're inviting speakers of all experience levels and backgrounds to contribute
                            to our conference program. Don't be shy – your unique perspective matters!
                        </div>

                        <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-primary btn-lg">Submit Your Proposal</a>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Proposal Guidelines */}
            <section className="section" id="guidelines">
                <div className="container">
                    <div className="section-header">
                        <h2>Proposal <span className="text-gradient">Guidelines</span></h2>
                        <p>Everything you need to know to submit a successful proposal</p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p>
                            We are very excited to invite everyone to PyCon Cameroon 2026! We are seeking
                            speakers of all experience levels and backgrounds to contribute to our conference
                            program. If you use Python professionally, as a hobbyist, or are just excited
                            about Python or programming and open source communities, we'd love to hear from you.
                        </p>

                        <p>
                            Please take the time to read the information below to help you submit an informed
                            and successful proposal.
                        </p>

                        {/* Timeline */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            📅 Timeline
                        </h3>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-date">March 30th, 2026</div>
                                <div className="timeline-content">
                                    <h4>CFP and Call for Sponsors Opens</h4>
                                    <p>Start submitting your talk and workshop proposals via Sessionize.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-date">May 15th, 2026, 11:59 PM WAT</div>
                                <div className="timeline-content">
                                    <h4>CFP Closes</h4>
                                    <p>Last day to submit your proposals. Don't wait until the last minute!</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-date">May 30th, 2026</div>
                                <div className="timeline-content">
                                    <h4>Announcement of Speakers</h4>
                                    <p>Selected speakers will be announced. All submitters will receive notifications.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-date">June 15th, 2026</div>
                                <div className="timeline-content">
                                    <h4>Schedule Published</h4>
                                    <p>The full conference schedule is posted on the PyCon Cameroon website.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-date">September 17th-19th, 2026</div>
                                <div className="timeline-content">
                                    <h4>PyCon Cameroon 2026</h4>
                                    <p>The main event in Yaoundé, Cameroon!</p>
                                </div>
                            </div>
                        </div>

                        {/* Session Types */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            🎯 Session Types
                        </h3>

                        <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>Regular Talks (30 min)</h4>
                                <p className="card-text">
                                    Standard conference talks covering Python topics, case studies,
                                    best practices, and technical deep-dives.
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>Lightning Talks (5 min)</h4>
                                <p className="card-text">
                                    Short, focused presentations on a single topic, idea, or project.
                                    Great for first-time speakers!
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>Workshops (3 hours)</h4>
                                <p className="card-text">
                                    Hands-on tutorials where attendees learn by doing. Includes
                                    coding exercises and practical projects.
                                </p>
                            </div>

                            <div className="card">
                                <h4 style={{ color: 'var(--color-orange)' }}>Panel Discussions</h4>
                                <p className="card-text">
                                    Moderated discussions with multiple experts on trending Python
                                    topics and industry trends.
                                </p>
                            </div>
                        </div>

                        {/* UbuCon Track */}
                        <div className="alert alert-success" style={{ marginTop: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                <img
                                    src="/images/partners/canonical-cm.webp"
                                    alt="UbuCon"
                                    style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }}
                                />
                                <strong style={{ fontSize: '1.1rem' }}>UbuCon Cameroon Track (New!)</strong>
                            </div>
                            <p style={{ marginBottom: 0 }}>
                                In partnership with UbuCon Cameroon, we are accepting proposals for our dedicated
                                Ubuntu &amp; open source track. Topics include Ubuntu development, Linux system
                                administration, open source contributions, cloud infrastructure, and Python in
                                the Ubuntu ecosystem. Select "UbuCon Track" when submitting on Sessionize.
                            </p>
                        </div>

                        {/* Important Notes */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            ⚠️ Important Notes
                        </h3>

                        <div className="alert alert-warning">
                            <strong>AI-Generated Content Policy</strong><br />
                            Proposal submissions that are solely or largely written by AI tools (such as ChatGPT,
                            Claude, etc.) will not be accepted. Your proposal should reflect your own thoughts
                            and expertise.
                        </div>

                        <div className="alert alert-info">
                            <strong>Proposal Limit</strong><br />
                            <ul style={{ marginTop: 'var(--spacing-xs)' }}>
                                <li>• Each individual may submit a maximum of <strong>two proposals</strong></li>
                                <li>• Each proposal may include a maximum of <strong>two speakers</strong></li>
                                <li>• Co-speaking counts toward your submission limit</li>
                            </ul>
                        </div>

                        <div className="alert alert-danger">
                            <strong>Recording Notice</strong><br />
                            All PyCon Cameroon talks and workshops will be recorded and released on our
                            YouTube channel to help with Python education across Africa. By submitting,
                            you agree to be recorded.
                        </div>

                        <div className="alert alert-warning">
                            <strong>Speaker Support</strong><br />
                            Please note that PyCon Cameroon is currently unable to provide financial
                            assistance (travel, accommodation, etc.) to speakers. All selected speakers
                            will receive a <strong>free conference ticket</strong> for the full event.
                        </div>

                        {/* Code of Conduct */}
                        <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                            📜 Code of Conduct
                        </h3>

                        <p>
                            All speakers are expected to have read and adhere to the conference
                            <a href="#" style={{ color: 'var(--color-orange)' }}> Code of Conduct</a>.
                            Slide contents and spoken material should be appropriate for a professional
                            audience including people of many different backgrounds.
                        </p>

                        <p>
                            Sexual language and imagery are not appropriate, and neither is language or
                            imagery that denigrates or demeans people based on race, gender, religion,
                            sexual orientation, physical appearance, disability, or any other dimension
                            of diversity.
                        </p>

                        <div className="text-center mt-lg">
                            <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-primary btn-lg">Submit on Sessionize</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Speakers Section */}
            <section className="section bg-dark" id="featured-speakers">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured <span className="text-gradient">Speakers</span></h2>
                        <p>Meet some of our confirmed speakers for PyCon Cameroon 2026</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                        <div className="card-icon" style={{ margin: '0 auto var(--spacing-md)' }}>
                            <img src="/images/general/aa8b76bc47ebdea99b84fa3a26a94ade.webp" alt="Rocket" />
                        </div>
                        <h3>Coming Soon!</h3>
                        <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                            Our speaker lineup is currently being finalized. Check back soon to see
                            the amazing speakers joining us at PyCon Cameroon 2026!
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Speak Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why <span className="text-gradient">Speak</span> at PyCon Cameroon?</h2>
                    </div>

                    <div className="grid grid-3 stagger">
                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/97568bbec02a103e305ee0d2bbaa6106.webp" alt="Travel" />
                            </div>
                            <h4>Reach a New Audience</h4>
                            <p className="card-text">
                                Share your knowledge with the growing Python community in Cameroon
                                and Central Africa.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Video" />
                            </div>
                            <h4>Recorded & Shared</h4>
                            <p className="card-text">
                                Your talk will be recorded and shared on YouTube, reaching even more
                                developers worldwide.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/3b576d7a5b2e395a5741d81d07bdcfc8.webp" alt="Ticket" />
                            </div>
                            <h4>Free Conference Pass</h4>
                            <p className="card-text">
                                Selected speakers receive a complimentary conference pass for
                                both days of PyCon Cameroon.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/patterns/African.webp" alt="Networking" />
                            </div>
                            <h4>Networking</h4>
                            <p className="card-text">
                                Connect with fellow speakers, industry leaders, and passionate
                                developers from across Africa.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/38d4f8046c74231baf303ee9c7a340bf.webp" alt="Networking" />
                            </div>
                            <h4>Build Your Brand</h4>
                            <p className="card-text">
                                Establish yourself as an expert in your field and boost your
                                professional profile.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up text-center">
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-sm)' }}>
                                <img src="/images/general/ac5ca270fe9d4f7c17c5b2bf97337208.webp" alt="Ideas" />
                            </div>
                            <h4>Give Back</h4>
                            <p className="card-text">
                                Help grow the Python community and inspire the next generation
                                of African developers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-green) 0%, var(--color-teal) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>Ready to Share Your Knowledge?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        We can't wait to see your proposal. Submit before May 31st, 2026!
                    </p>
                    <a href="https://sessionize.com/pycon-camerooon-2026" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-green)' }}>
                        Submit Your Proposal Now
                    </a>
                </div>
            </section>
        </>
    );
};

export default Speakers;
