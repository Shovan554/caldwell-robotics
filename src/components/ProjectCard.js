import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/projectCard.css'; // Importing the ProjectCard CSS

const ProjectCard = ({ name, description, team, githubLink, projectLink, imgSrc }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      

      {/* Project Details Section */}
      <div className="project-details">
        {projectLink ? (
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-name">
            {name}
          </a>
        ) : (
          <h2 className="project-name">{name}</h2>
        )}
        <div className="project-image-container">
        <img src={imgSrc} alt={name} className="project-image" />
      </div>
        <p className="project-description">{description}</p>

        <div className="project-team">
          <h3 className="project-team-title">Contributors:</h3>
          <ul>
            {team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        {githubLink && (
          <div className="github-link">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} /> View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;