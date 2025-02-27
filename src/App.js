import React, { useState } from 'react';
import { FaGithub, FaCogs, FaAddressBook, FaAirbnb, FaAndroid } from 'react-icons/fa'; // Import Github icon from React Icons
import car1Image from '../src/images/car1.jpg'; // Import the image at the top of your file


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
        <div className="logo">Innovative Full-Stack Developer</div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation('home')}>Universe</li> {/* Changed Home to Universe */}
            <li onClick={() => handleNavigation('about')}>Learn more</li> {/* Changed About to Learn more */}
            <li onClick={() => handleNavigation('skills')}>Work experience</li> {/* Changed Skills to Work experience */}
            <li onClick={() => handleNavigation('projects')}>Projects</li>
            <li onClick={() => handleNavigation('contact')}>Get in touch</li> {/* Changed Contact to Get in touch */}
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
      </div>
    </div>
  );
}

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

const About = () => {
  const [inputCode, setInputCode] = useState('');
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleExecuteCode = () => {
    setOutput(''); // Clear output before running new code
  
    try {
      // Temporarily override console.log to capture its output
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        setOutput((prevOutput) => prevOutput + args.join(' ') + '\n');
      };
  
      // Execute the predefined code directly based on the activeTab
      const currentExample = codeExamples[activeTab];
      // eslint-disable-next-line no-eval
      eval(currentExample.code); // Safely use eval for predefined code
  
      // Restore the original console.log
      console.log = originalConsoleLog;
  
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };
  
  
  
  
  // Predefined code examples for the tabs
  const codeExamples = [
    {
      title: 'Say Hello',
      code: `console.log('Hello, World!');`,
    },
    {
      title: 'Random Number',
      code: `console.log('Random number between 1 and 100:', Math.floor(Math.random() * 100) + 1);`,
    },
    {
      title: 'Array Reverse',
      code: `const arr = [1, 2, 3, 4, 5]; console.log('Reversed array:', arr.reverse());`,
    },
    {
      title: 'Factorial',
      code: `function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); } console.log('Factorial of 5:', factorial(5));`,
    },
    {
      title: 'Sum of Squares',
      code: `const nums = [1, 2, 3, 4]; const sum = nums.reduce((acc, num) => acc + num * num, 0); console.log('Sum of squares:', sum);`,
    },
    {
      title: 'FizzBuzz',
      code: `for (let i = 1; i <= 15; i++) { console.log(i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i); }`,
    },
    {
      title: 'Palindrome Check',
      code: `function isPalindrome(str) { return str === str.split('').reverse().join(''); } console.log('Is "racecar" a palindrome?', isPalindrome('racecar'));`,
    },
    {
      title: 'Random Joke',
      code: `const jokes = ['Why don’t skeletons fight each other? They don’t have the guts.', 'I told my wife she was drawing her eyebrows too high. She looked surprised.']; console.log(jokes[Math.floor(Math.random() * jokes.length)]);`,
    },
    {
      title: 'Array Shuffle',
      code: `const shuffle = (array) => array.sort(() => Math.random() - 0.5); const arr = [1, 2, 3, 4, 5]; console.log('Shuffled array:', shuffle(arr));`,
    },
    {
      title: 'Count Down Timer',
      code: `let count = 10; const interval = setInterval(() => { if (count > 0) { console.log(count--); } else { clearInterval(interval); console.log('Time's up!'); } }, 1000);`,
    },
  ];
  
  // Switch to the selected code example
  const handleTabClick = (index) => {
    setActiveTab(index);
    setInputCode(codeExamples[index].code);
  };
  
  return (
    <section className="about">
      <h2>Learn More</h2>
      <p>
        I am a passionate Full-Stack Developer with a love for creating innovative solutions...
      </p>
  
      {/* Tabs for code examples */}
      <div className="tabs">
        {codeExamples.map((example, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {example.title}
          </div>
        ))}
      </div>
  
      {/* Console */}
      <div className="console">
        <div className="console-header">Console</div>
        <textarea
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className="console-input"
          placeholder="Write JS code here..."
        ></textarea>
        <div onClick={handleExecuteCode} className="console-btn">Run Code</div>
  
        <div className="console-output">
          <pre>{output}</pre>
        </div>
      </div>
    </section>
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

const Projects = () => {
  // Example project data
  const projects = [
    {
      image: car1Image,
      headline: 'Project 1',
      description: 'This is a description of Project 1.',
      dateCreated: 'January 2023',
      githubLink: 'https://github.com/yourusername/project1',
      icon: FaCogs, // Using React icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 2',
      description: 'This is a description of Project 2.',
      dateCreated: 'February 2023',
      githubLink: 'https://github.com/yourusername/project2',
      icon: FaAddressBook, // Using HTML5 icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 3',
      description: 'This is a description of Project 3.',
      dateCreated: 'March 2023',
      githubLink: 'https://github.com/yourusername/project3',
      icon: FaAirbnb, // Using C# icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 4',
      description: 'This is a description of Project 4.',
      dateCreated: 'April 2023',
      githubLink: 'https://github.com/yourusername/project4',
      icon: FaCogs, // Using React icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 1',
      description: 'This is a description of Project 1.',
      dateCreated: 'January 2023',
      githubLink: 'https://github.com/yourusername/project1',
      icon: FaCogs, // Using React icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 2',
      description: 'This is a description of Project 2.',
      dateCreated: 'February 2023',
      githubLink: 'https://github.com/yourusername/project2',
      icon: FaAddressBook, // Using HTML5 icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 3',
      description: 'This is a description of Project 3.',
      dateCreated: 'March 2023',
      githubLink: 'https://github.com/yourusername/project3',
      icon: FaAirbnb, // Using C# icon from Font Awesome
    },
    {
      image: car1Image,
      headline: 'Project 4',
      description: 'This is a description of Project 4.',
      dateCreated: 'April 2023',
      githubLink: 'https://github.com/yourusername/project4',
      icon: FaCogs, // Using React icon from Font Awesome
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2 className="h2projects">Projects</h2>
      <p>Here are a few of the projects I've worked on...</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Top-left Custom Icon */}
            <div className="top-left-github">
              <project.icon className="project-icon" />
            </div>
            <img src={project.image} alt={project.headline} className="project-image" />
            <h3>{project.headline}</h3>
            <p>{project.description}</p>
            <span>{project.dateCreated}</span>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="contact">
    <h2>Get in touch</h2> {/* Updated to Get in touch */}
    <p>Feel free to reach out to me at my email: example@domain.com</p>
  </section>
);

export default App;
