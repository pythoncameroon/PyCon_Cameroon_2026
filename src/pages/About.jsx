import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import LazyImage from '../components/LazyImage';

const About = () => {
    useScrollAnimation();

    const teamData = [
        {
            name: "Steve Yonkeu",
            role: "Lead Python Cameroon",
            image: "/Images/Steve.JPG",
            linkedin: "https://www.linkedin.com/in/yokwejuste",
            website: "https://yokwejuste.me",
            color: "orange",
            gradient: "yellow"
        },
        {
            name: "Edmond Makolle",
            role: "Co-Lead, Mentorship / Learning Coordinator",
            image: "/Images/Edmond Makole.jpeg",
            linkedin: "https://www.linkedin.com/in/edmondmakolle",
            color: "green",
            gradient: "teal"
        },
        {
            name: "Ange Demanou",
            role: "Social Media Manager",
            image: "/Images/Ange Demanou.jpeg",
            linkedin: "https://www.linkedin.com/in/ange-demanou-367466340",
            color: "blue",
            gradient: "teal"
        },
        {
            name: "Djoko Christian",
            role: "Open Source Coordinator",
            image: "/Images/Djoko.jpeg",
            linkedin: "https://www.linkedin.com/in/djoko-christian",
            color: "red",
            gradient: "orange"
        },
        {
            name: "Abuambou Evodia",
            role: "Project Coordinator",
            image: "/Images/Abuambou Evodia.jpeg",
            linkedin: "https://www.linkedin.com/in/abuambou-evodia-ruth-6b1b51270",
            color: "gold",
            gradient: "orange"
        },
        {
            name: "Essi Junior",
            role: "UI/UX and Graphic Designer",
            image: "/Images/Essi.jpeg",
            linkedin: "https://www.linkedin.com/in/essijunior/",
            color: "teal",
            gradient: "green"
        }
    ];

    return (
        <>
            {/* Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1>About <span className="text-gradient">PyCon Cameroon</span></h1>
                    <p>Discover who we are and our mission to grow the Python community in Cameroon</p>
                </div>
            </header>

            {/* Python Cameroon User Group Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                                Python Cameroon <span className="text-gradient">User Group</span>
                            </h2>
                            <p>
                                The Python Cameroon User Group is a vibrant community of software developers,
                                data scientists, and tech enthusiasts in Cameroon who are passionate about the
                                Python programming language. We are dedicated to sharing knowledge, fostering
                                innovation, and promoting the adoption of Python across all sectors.
                            </p>
                            <p>
                                Our community meets regularly to discuss various topics related to Python,
                                including web development with Django and Flask, scientific computing,
                                machine learning with TensorFlow and PyTorch, data science with Pandas,
                                automation, DevOps, and much more.
                            </p>
                            <p>
                                We organize speaker sessions, coding workshops, hackathons, and mentorship
                                programs to help members improve their Python skills and build practical
                                applications that solve real-world problems.
                            </p>
                            <div className="mt-md flex gap-sm flex-wrap">
                                <a href="https://chat.whatsapp.com/Ckc80ophGEH0NJFmZAzDMr" className="btn btn-primary">Join Our
                                    Community</a>
                            </div>
                        </div>
                        <div>
                            <LazyImage src="/Images/50b4bb72bcda16fbabf50f8ca87ca412.webp" className="img-limit-height" alt="Community" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* PyCon Cameroon Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Mission</span></h2>
                    </div>

                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <LazyImage src="/Images/5e7ef535d7837d92dc28625166cc2568.webp" alt="PyCon Mission"
                                className="img-limit-height" />
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>PyCon Cameroon</h3>
                            <p>
                                PyCon Cameroon is a community-driven conference that aims to provide a platform
                                for the growth of the Python community in Cameroon and across Central Africa.
                                We believe that diversity and inclusivity are essential for the growth and
                                success of our community.
                            </p>
                            <p>
                                We strive to create a welcoming and inclusive environment for all attendees,
                                regardless of their backgrounds, genders, ages, or identities. Our conference
                                is designed to inspire, educate, and connect developers at every skill level.
                            </p>
                            <p>
                                Bringing together techies from across Africa and the globe, startups, students,
                                researchers, and seasoned professionals, PyCon Cameroon is a unique opportunity
                                to learn, network, and collaborate with like-minded individuals.
                            </p>
                            <p style={{ color: 'var(--color-orange)', fontWeight: 500, fontSize: '1.1rem' }}>
                                We invite you to join us in celebrating the power of Python and its applications
                                in shaping the future of technology in Cameroon and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Values</span></h2>
                    </div>

                    <div className="grid grid-3 stagger">
                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/2e243534d6899d8f474f419e1ac832c9.webp" alt="Platform" />
                            </div>
                            <h3 className="card-title">Building a Welcoming Community</h3>
                            <p className="card-text">
                                We believe that diversity and inclusivity are essential for the growth and
                                success of our community. Everyone is welcome here, regardless of background,
                                experience level, or identity.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/Unknown.webp" alt="Talks" />
                            </div>
                            <h3 className="card-title">Inspiring Talks</h3>
                            <p className="card-text">
                                From beginner tutorials to advanced deep dives, we offer a wide range of talks
                                to cater to the needs of our diverse community. Learn from local and
                                international Python experts.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/African.webp" alt="Workshops" />
                            </div>
                            <h3 className="card-title">Practical Workshops</h3>
                            <p className="card-text">
                                We learn by doing. Our hands-on workshops are designed to help you build
                                real skills that you can apply immediately in your projects and career.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/aa8b76bc47ebdea99b84fa3a26a94ade.webp" alt="Networking" />
                            </div>
                            <h3 className="card-title">Simple and All-Inclusive</h3>
                            <p className="card-text">
                                We want to create a welcoming and inclusive environment for everyone,
                                regardless of their background or experience. No gatekeeping, just community.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <img src="/Images/python-cameroon-logo.png" alt="Inspiration" loading="lazy" />
                            </div>
                            <h3 className="card-title">Innovation & Creativity</h3>
                            <p className="card-text">
                                We encourage creative problem-solving and innovative thinking. PyCon Cameroon
                                is a space where new ideas are born and nurtured.
                            </p>
                        </div>

                        <div className="card animate-on-scroll slide-up">
                            <div className="card-icon">
                                <LazyImage src="/Images/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Growth" />
                            </div>
                            <h3 className="card-title">Growing Together</h3>
                            <p className="card-text">
                                Whether you're mentoring others or learning yourself, we believe in the power
                                of shared growth. Together, we're building the future of Python in Cameroon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section" id="team">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet the <span className="text-gradient">Team</span></h2>
                        <p>
                            The PyCon Cameroon team is made up of a diverse group of individuals with a wide
                            range of experiences and skills. We are committed to providing a supportive and
                            inclusive environment for all attendees, speakers, sponsors, and volunteers.
                        </p>
                    </div>

                    <div className="grid grid-3 stagger">
                        {teamData.map((member, index) => (
                            <div className="card team-card animate-on-scroll slide-up" key={index}>
                                <div className="team-card-img"
                                    style={{
                                        background: member.image ? 'none' : `linear-gradient(135deg, var(--color-${member.color}), var(--color-${member.gradient}))`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '3rem',
                                        padding: 0,
                                        overflow: 'hidden'
                                    }}>
                                    {member.image ? (
                                        <LazyImage src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        '👤'
                                    )}
                                </div>
                                <h4 className="team-card-name">{member.name}</h4>
                                <p className="team-card-role">{member.role}</p>
                                <div className="team-card-social">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    {member.website && (
                                        <a href={member.website} target="_blank" rel="noopener noreferrer" title="Website">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-lg">
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                            Interested in joining the organizing team? We're always looking for passionate volunteers!
                        </p>
                        <a href="mailto:team@pycon.cm" className="btn btn-primary">Join Our Team</a>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Code of Conduct */}
            <section className="section bg-dark" id="code-of-conduct">
                <div className="container">
                    <div className="section-header">
                        <h2>Code of <span className="text-gradient">Conduct</span></h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="alert alert-info">
                            <strong>Our Commitment</strong><br />
                            PyCon Cameroon is dedicated to providing a harassment-free conference experience
                            for everyone, regardless of gender, gender identity and expression, age, sexual
                            orientation, disability, physical appearance, body size, race, ethnicity, religion
                            (or lack thereof), or technology choices.
                        </div>

                        <p>
                            We do not tolerate harassment of conference participants in any form. Sexual
                            language and imagery is not appropriate for any conference venue, including talks,
                            workshops, parties, Twitter, and other online media.
                        </p>

                        <p>
                            Conference participants violating these rules may be sanctioned or expelled from
                            the conference without a refund at the discretion of the conference organizers.
                        </p>

                        <div className="mt-md">
                            <Link to="/code-of-conduct" className="btn btn-secondary">Read Full Code of Conduct</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
