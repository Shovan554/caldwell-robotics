import React from 'react';
import Lottie from 'react-lottie'; // Importing Lottie for animation
import ProjectCard from '../components/ProjectCard';
import '../styles/projectPage.css'; // Importing the ProjectPage CSS
import codingAnimation from '../assets/animations/coding.json'; // Import your JSON animation

const ProjectPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const projects = [
    {
      name: 'Robo Soccer',
      description: 'An Arduino-based robotic soccer competition project.',
      team: ['Entire Team'],
      githubLink: '',
      projectLink: null,
    },
    {
      name: 'Astro Bot',
      description: 'A sensor-equipped robotic car with a self-learning robotic hand, designed to adapt to conditions in space.',
      team: ['Anish Pandey', 'Shovan Raut', 'Dibas Dauliya', 'Dikshya Giri'],
      githubLink: 'https://github.com/dibasdauliya/space-apps-hackathon',
      projectLink: 'https://caldwell-astrobots.vercel.app/',
    },
    
    
  ];

  return (
    <div className="project-page">
      {/* Projects Title Outside Container */}
      <div className="projects-title-container">
        <h1 className="page-title">PROJECTS</h1>
      </div>

      {/* Coding Animation shifted upwards using negative margin */}
      <div className="coding-animation-right">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>

      <div className="project-page-container">
        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              team={project.team}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;