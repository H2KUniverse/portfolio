import React from 'react';
import '../App.css'; // Custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Universe</h1>
          <p className="hero-description">
            Crafting innovative and scalable solutions for a better tomorrow through clean, efficient code.
          </p>
          <a href="#about" className="cta-btn">
            Learn More
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            I am a passionate Full-Stack Developer with a strong background in web and app development. My approach
            revolves around building intuitive, user-centered solutions that prioritize both functionality and aesthetics.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-content">
          <h2 className="section-title">Key Skills</h2>
          <div className="skills-list">
            <div className="skill-card">
              <h3 className="skill-title">Web Development</h3>
              <p className="skill-description">
                Expertise in creating modern, responsive web applications using HTML, CSS, JavaScript, and React.
              </p>
            </div>
            <div className="skill-card">
              <h3 className="skill-title">Cloud Solutions</h3>
              <p className="skill-description">
                Proficient in building scalable, cloud-based applications with Azure and AWS for real-time data processing.
              </p>
            </div>
            <div className="skill-card">
              <h3 className="skill-title">Backend Development</h3>
              <p className="skill-description">
                Skilled in designing robust and secure backend services with Node.js, Express, and databases like MySQL and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Project A</h3>
              <p className="project-description">
                A cutting-edge app designed to help users track their personal growth and achieve their goals.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Project B</h3>
              <p className="project-description">
                A collaborative platform connecting professionals in the tech industry, promoting networking and knowledge sharing.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Project C</h3>
              <p className="project-description">
                A cloud-native application that leverages AI to optimize business operations and decision-making processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            I would love to connect! If you're interested in collaborating, have any questions, or simply want to chat, feel free to reach out.
          </p>
          <a href="mailto:yourname@example.com" className="cta-btn">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
