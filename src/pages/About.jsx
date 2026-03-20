import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import LazyImage from "../components/LazyImage";
import TeamCard from "../components/TeamCard";
import PartnerCard from "../components/PartnerCard";
import { teamData } from "../data/team";
import { valuesData } from "../data/values";
import { partnerCommunities } from "../data/partners";

const About = () => {
  useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="container text-center">
          <h1>
            About <span className="text-gradient">PyCon Cameroon</span>
          </h1>
          <p>
            Discover who we are and our mission to grow the Python community in
            Cameroon
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
                Python Cameroon{" "}
                <span className="text-gradient">User Group</span>
              </h2>
              <p>
                The Python Cameroon User Group is a vibrant community of
                software developers, data scientists, and tech enthusiasts in
                Cameroon who are passionate about the Python programming
                language. We are dedicated to sharing knowledge, fostering
                innovation, and promoting the adoption of Python across all
                sectors.
              </p>
              <p>
                Our community meets regularly to discuss various topics related
                to Python, including web development with Django and Flask,
                scientific computing, machine learning with TensorFlow and
                PyTorch, data science with Pandas, automation, DevOps, and much
                more.
              </p>
              <p>
                We organize speaker sessions, coding workshops, hackathons, and
                mentorship programs to help members improve their Python skills
                and build practical applications that solve real-world problems.
              </p>
              <div className="mt-md flex gap-sm flex-wrap">
                <a
                  href="https://chat.whatsapp.com/Ckc80ophGEH0NJFmZAzDMr"
                  className="btn btn-primary"
                >
                  Join Our Community
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
              Our <span className="text-gradient">Mission</span>
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
                PyCon Cameroon
              </h3>
              <p>
                PyCon Cameroon is a community-driven conference that aims to
                provide a platform for the growth of the Python community in
                Cameroon and across Central Africa. We believe that diversity
                and inclusivity are essential for the growth and success of our
                community.
              </p>
              <p>
                We strive to create a welcoming and inclusive environment for
                all attendees, regardless of their backgrounds, genders, ages,
                or identities. Our conference is designed to inspire, educate,
                and connect developers at every skill level.
              </p>
              <p>
                Bringing together techies from across Africa and the globe,
                startups, students, researchers, and seasoned professionals,
                PyCon Cameroon is a unique opportunity to learn, network, and
                collaborate with like-minded individuals.
              </p>
              <p
                style={{
                  color: "var(--color-orange)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
              >
                We invite you to join us in celebrating the power of Python and
                its applications in shaping the future of technology in Cameroon
                and beyond.
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
              Our <span className="text-gradient">Values</span>
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
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p>
              The PyCon Cameroon team is made up of a diverse group of
              individuals with a wide range of experiences and skills. We are
              committed to providing a supportive and inclusive environment for
              all attendees, speakers, sponsors, and volunteers.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          <div className="text-center mt-lg">
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--spacing-md)" }}>
              Interested in joining the organizing team? We're always looking
              for passionate volunteers!
            </p>
            <a href="mailto:organizers@pythoncameroon.org" className="btn btn-primary">
              Join Our Team
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
              Partner <span className="text-gradient">Communities</span>
            </h2>
            <p>
              We are proud to collaborate with these amazing communities
              across Africa and beyond.
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
              Code of <span className="text-gradient">Conduct</span>
            </h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="alert alert-info">
              <strong>Our Commitment</strong>
              <br />
              PyCon Cameroon is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices.
            </div>

            <p>
              We do not tolerate harassment of conference participants in any
              form. Sexual language and imagery is not appropriate for any
              conference venue, including talks, workshops, parties, Twitter,
              and other online media.
            </p>

            <p>
              Conference participants violating these rules may be sanctioned or
              expelled from the conference without a refund at the discretion of
              the conference organizers.
            </p>

            <div className="mt-md">
              <Link to="/code-of-conduct" className="btn btn-secondary">
                Read Full Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
