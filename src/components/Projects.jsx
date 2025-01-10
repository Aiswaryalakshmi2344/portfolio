import 'react';
import './project.css'; // Import the CSS for styling

const Projects = () => {
  const projects = [
    {
      name: 'Movie Listing Application',
      description:
        'A React.js app that allows users to search for movies, view detailed information, save favorites with localStorage, and navigate through results with pagination. It uses OMDb API for movie data and is designed to be responsive using CSS Flexbox and Grid.',
    },
    {
      name: 'Connect+',
      description:
        'A web application designed to increase student engagement and improve academic performance with interactive learning content.',
    },
    {
      name: 'Vitamin Deficiency Detection App',
      description:
        'A smartphone app using CNN to detect vitamin deficiencies through image processing of body organs, providing non-invasive, affordable solutions.',
    },
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio showcasing skills, projects, and certifications. Built using React and styled with modern CSS.',
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
