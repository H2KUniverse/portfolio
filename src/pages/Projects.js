import car1Image from '../images/car1.jpg'; // Import the image at the top of your file
import { FaGithub, FaCogs, FaAddressBook, FaAirbnb } from 'react-icons/fa'; // Import Github icon from React Icons

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

  export default Projects;