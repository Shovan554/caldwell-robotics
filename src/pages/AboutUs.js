import React from 'react';
import Lottie from 'react-lottie';
import peopleAnimation from '../assets/animations/people.json'; // Animation for visual appeal
import '../styles/aboutUs.css'; // Assuming you will create an appropriate CSS file
import Flickity from 'flickity'; //Framework for the slider

const AboutUs = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: peopleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    
    <div className="about-us-page">
    <div className="about-us-container">
      {/* About Us Title */}
      <h1 className="about-us-title">ABOUT US</h1>

      {/* People Animation */}
      <div className="people-animation">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>

      <div class = "main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>

        {/* Mission Section */}
        <div class="carousel-cell">
          <section className="mission-section slider-section-container">
            <h2 className="section-title">Our Mission</h2>
            <p>
              At Caldwell University Robotics Club, we strive to foster a community of passionate innovators
              dedicated to creating unique and impactful robotic solutions. Our mission is to integrate
              cutting-edge technology with imaginative problem-solving to inspire change and shape the future
              of robotics. We empower students to explore, design, and build revolutionary projects that make
              a meaningful difference in the world.
            </p>
          </section>
        </div>
          
        {/* Who We Are Section */}
        <div class="carousel-cell">
          <section className="who-we-are-section slider-section-container">
            <h2 className="section-title">Who We Are</h2>
            <p>
              Founded on April 24, 2024, Caldwell Robotics is a group of robotics enthusiasts committed to
              creating a community where innovation, creativity, and technology converge to solve challenges
              through robotics. With over 25 active members from various disciplines, we continue to grow and
              welcome new members passionate about robotics.
            </p>
          </section>
        </div>
        
        {/* What We Do Section */}
        <div class="carousel-cell">
          <section className="what-we-do-section slider-section-container">
            <h2 className="section-title">What Do We Do?</h2>
            <p>
              At Caldwell Robotics, we inspire and equip students with the skills and knowledge to excel in
              robotics and engineering. We participate in prestigious competitions and hackathons, including
              FIRST Robotics, VEX Robotics, and state-level events. Our workshops and community outreach
              initiatives foster innovation, creativity, and technical expertise, preparing students for
              careers in STEM.
            </p>
          </section>
        </div>

        {/* Connections Section */}
        <div class = "carousel-cell">
          <section className="connections-section slider-section-container">
            <h2 className="section-title">Connections</h2>
            <p>
              We collaborate with STEM Advance, the Department of Business and Computer Science, and the Vice
              President for Academic Affairs to ensure academic rigor and entrepreneurial thinking. As a
              recognized student organization under the Student Government Association (SGA), we receive
              support and funding to host events, participate in competitions, and execute projects.
            </p>
          </section>
        </div>
        
      </div>

      {/* Equipment and Tools Section */}
      <section className="equipment-section">
        <h2 className="section-title">Equipment and Tools</h2>
        <ul>
          <li>3D Printer</li>
          <li>CNC Router</li>
          <li>Hand Tools</li>
          <li>Electronics</li>
        </ul>
      </section>

      {/* Primary Use of Makerspace Section */}
      <section className="makerspace-section">
        <h2 className="section-title">Primary Use of the Makerspace</h2>
        <ul>
          <li>Robotics Club: Engineering projects and robotics competition preparation</li>
          <li>Art Department: 3D art projects and new mediums for artistic expression</li>
          <li>Community STEM Promotion: Hands-on events for local high school students</li>
        </ul>
        <p>
          <a href="/liability-waiver" className="liability-link">
            Fill out the LIABILITY WAIVER FORM before accessing the Maker Space.
          </a>
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <p>
          We are committed to building a vibrant and enduring robotics and engineering community. Our
          goals include:
        </p>
        <ul>
          <li>
            <strong>Advanced Workshops:</strong> Covering AI, machine learning, 3D design, and robot
            construction.
          </li>
          <li>
            <strong>Hands-On Experience:</strong> Equipping students with skills and tasks to build robots
            for competitions.
          </li>
          <li>
            <strong>Industry Collaboration:</strong> Hosting mentorship programs with pioneers in the
            field.
          </li>
          <li>
            <strong>Hackathons:</strong> Organizing intra-college and inter-college hackathons.
          </li>
          <li>
            <strong>Global Competitions:</strong> Competing in international robotics competitions.
          </li>
          <li>
            <strong>University Partnerships:</strong> Partnering with other universities to solve robotics
            challenges.
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
