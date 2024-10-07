import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/projectCard.css'; // Importing the ProjectCard CSS

const ProjectCard = ({ name, description, team, githubLink, projectLink }) => {
  return (
    <div className="project-card">
      {/* Project Details Section */}
      <div className="project-details">
        {/* Project Name with Link or plain name if no project link */}
        {projectLink ? (
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-name">
            {name}
          </a>
        ) : (
          <h2 className="project-name">{name}</h2>
        )}

        {/* Project Description */}
        <p className="project-description">{description}</p>

        {/* Worked On By Section */}
        <div className="project-team">
          <h3 className="project-team-title">Contributors:</h3>
          <ul>
            {team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        {/* GitHub Link */}
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
