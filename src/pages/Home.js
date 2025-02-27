import React from 'react';
import '../App.css'; // Custom CSS for the Home page (styles)

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Universe</h1>
          <p>Innovating and building for a better tomorrow with clean, scalable code.</p>
          <a href="#about" className="cta-btn">Learn More</a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with a love for creating innovative web and app solutions.
            With years of experience, I believe in delivering top-notch, user-centric solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-content">
          <h2>Key Skills</h2>
          <div className="skills-list">
            <div className="skill-card">
              <h3>Web Development</h3>
              <p>Expert in building modern, responsive web applications with HTML, CSS, JS, and React.</p>
            </div>
            <div className="skill-card">
              <h3>Cloud Solutions</h3>
              <p>Developing scalable cloud-based solutions using Azure and AWS for real-time applications.</p>
            </div>
            <div className="skill-card">
              <h3>Backend Development</h3>
              <p>Building secure, performant backend services with Node.js, Express, and databases like MySQL and MongoDB.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-content">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project A</h3>
              <p>An innovative app for tracking personal growth and goals.</p>
            </div>
            <div className="project-card">
              <h3>Project B</h3>
              <p>A web platform for connecting professionals in the tech industry.</p>
            </div>
            <div className="project-card">
              <h3>Project C</h3>
              <p>A cloud-native solution to optimize business processes with AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>If you'd like to collaborate, have any questions, or want to chat, feel free to reach out!</p>
          <a href="mailto:yourname@example.com" className="cta-btn">Contact Me</a>
        </div>
      </section>
    </div>
  );
};


// Export the Home component
export default Home;