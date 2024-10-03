import React from 'react';
import Lottie from 'react-lottie'; // Importing Lottie for animation
import MemberCard from "../components/MemberCard";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import '../styles/team.css'; // Importing the new CSS file

const Team = () => {
  



  const executiveMembers = {
    advisor: {
      name: "Dr. Vlad Veksler",
      position: "Faculty Advisor",
      information:
        "Assistant Professor of Computer Science at Caldwell University, focusing on AI and Human-Computer Interaction.",
      imgSrc: "./Dr. Veksler.png",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
  
    one: {
      name: "Anish Pandey",
      position: "President",
      information:
        "Driving force behind the annual Robotics Competition and development of the Caldwell Makerspace.",
      imgSrc: "./anish.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    two: {
      name: "Shovan Raut",
      position: "Vice-President",
      information:
        "Research Assistant at CogAI, passionate about robotics and machine learning.",
      imgSrc: "./shovan.jpg",
      linkedinLink: "https://www.linkedin.com/in/shovan-raut-81537b18a/",
      githubLink: "https://github.com/Shovan554",
      resumeLink: "/path/to/shovan_resume.pdf", // Replace with the actual resume link
      portfolio: "https://shovanraut.vercel.app", // Your portfolio
    },
    three: {
      name: "Saugat Subedi",
      position: "Public Relations Officer",
      information:
        "Passionate about robotics and acts as a bridge between students and administration.",
      imgSrc: "./SAUGAT_SUBEDI.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    four: {
      name: "Saugat Timilsina",
      position: "Projects Manager",
      information:
        "Interested in machine learning and robotics, working to expand knowledge to other STEM students.",
      imgSrc: "./Saugat Timilsina.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    five: {
      name: "Dikshya Giri",
      position: "Chief of Logistics and Resources",
      information:
        "Co-founder and Chief of Logistics and Resources, merging technology and art.",
      imgSrc: "./Dikshya.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    six: {
      name: "Dibas Dauliya",
      position: "IT",
      information:
        "Vice President of Marketing and Communications in the SGA and Research Assistant at icQR/CogAI.",
      imgSrc: "./Dibas.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    seven: {
      name: "Narayan Khanal",
      position: "IT Specialist",
      information:
        "Aspiring web developer and software engineer, passionate about interactive websites.",
      imgSrc: "./narayan.jpg",
      linkedinLink: "https://www.linkedin.com/in/narayankhanal/",
      githubLink: "https://github.com/Nkhanal2002",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    eight: {
      name: "Krenjila Sharma",
      position: "Secretary",
      information:
        "Lab Manager and Research Assistant with a passion for Data Science and fostering innovation.",
      imgSrc: "./krenjila.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
    nine: {
      name: "Yubika Acharya",
      position: "Treasurer",
      information:
        "Majoring in Computer Science and Financial Economics, combining passion for robotics and financial management.",
      imgSrc: "./Yubika.jpg",
      linkedinLink: "https://linkedin.com",
      githubLink: "https://github.com",
      resumeLink: null, // No resume for now
      portfolio: null, // No portfolio for now
    },
  };



  const teamMembers = Object.values(executiveMembers).filter(
    (member) => member !== executiveMembers.advisor
  );



  return (
    <main className="team-container">
      {/* Meet the Team Title */}
      <div className="team-header">
    
        <h1 className="team-title">
          Meet the <span className="team-highlight">Team</span>
          
        </h1>
      </div>

      {/* Faculty Advisor Card with animation on the right */}
      <div className="advisor-animation-container">
        {/* Faculty Card */}
        <div className="advisor-card">
          <MemberCard
            name={executiveMembers.advisor.name}
            position={executiveMembers.advisor.position}
            information={executiveMembers.advisor.information}
            imgSrc={executiveMembers.advisor.imgSrc}
            linkedinLink={executiveMembers.advisor.linkedinLink}
            githubLink={executiveMembers.advisor.githubLink}
            resumeLink={executiveMembers.advisor.resumeLink}
            portfolio={executiveMembers.advisor.portfolio}
          />
        </div>

        {/* Animation on the right */}
        
      </div>

      {/* Team Member Cards */}
      <div className="members-card">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            position={member.position}
            information={member.information}
            imgSrc={member.imgSrc}
            linkedinLink={member.linkedinLink}
            githubLink={member.githubLink}
            resumeLink={member.resumeLink}
            portfolio={member.portfolio}
          />
        ))}
      </div>
    </main>
  );
};

export default Team;