import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import UnityGame from './pages/UnityGame'; // Import the UnityGame component
import logo from '../src/images/logo.png'; // Import the logo at the top of your file¨
import Projects from './pages/Projects';


import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img className="imgLogo" src={logo} alt="Innovative Full-Stack Developer" />
        </div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation('home')} className={activeSection === 'home' ? 'active' : ''}>Universe</li>
            <li onClick={() => handleNavigation('about')} className={activeSection === 'about' ? 'active' : ''}>Learn more</li>
            <li onClick={() => handleNavigation('skills')} className={activeSection === 'skills' ? 'active' : ''}>Work experience</li>
            <li onClick={() => handleNavigation('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
            <li onClick={() => handleNavigation('contact')} className={activeSection === 'contact' ? 'active' : ''}>Get in touch</li>
            <li onClick={() => handleNavigation('unityGame')} className={activeSection === 'unityGame' ? 'active' : ''}>UnityGame</li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'unityGame' && <UnityGame />}
      </div>
    </div>
  );
}

const Skills = () => (
  <section className="skills">
    <h2>Work experience</h2> {/* Updated to Work experience */}
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Azure</li>
      <li>SQL, MongoDB</li>
    </ul>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Get in touch</h2> {/* Updated to Get in touch */}
    <p>Feel free to reach out to me at my email: example@domain.com</p>
  </section>
);

export default App;
