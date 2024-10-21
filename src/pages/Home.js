import React from 'react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import logo from '../assets/logo.png'; // Import your logo
import homeAnimation from '../assets/animations/homeAnimation.json'; // Import your JSON animation
import '../styles/home.css'; // Ensure your CSS file is correctly imported
import UpcomingEvents from '../components/UpcomingEvents'; // Import UpcomingEvents component
import PastEvents from '../components/PastEvents'; // Import PastEvents component

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Dummy data for events
  const upcomingEvents = [
    { name: 'Ideathon and Data Campaign', location: 'CougarDen', date: '2024-11-09', registerLink: '/register/1', description: 'bla bla bllka' },
  ];

  const pastEvents = [
    { 
      name: 'Robo Soccer', 
      date: '2023-08-15', 
      galleryLink: '/gallery/robo-soccer', 
      description: 'A thrilling soccer match played by robots, designed by our club members.' 
    },
  ];

  // Intersection Observer for triggering animations
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });
  const { ref: upcomingRef, inView: upcomingInView } = useInView({ triggerOnce: true });
  const { ref: pastRef, inView: pastInView } = useInView({ triggerOnce: true });

  return (
    <div>
      {/* First container for top part with logo and animation */}
      <div className="home-container">
        <div ref={leftRef} className={`home-left ${leftInView ? 'slide-in-left' : ''}`}>
          <div className="home-title-container">
            <div className="home-title-text">
              <h1 className="home-title-bold">Caldwell</h1>
              <h1 className="home-title-light">Robotics</h1>
            </div>
          </div>
          <p className="home-description">
            Welcome to the Caldwell Robotics Club. Explore, learn, and create with our exciting robotics projects and events!
          </p>
          <a href="/register" className="home-register-link">Register Now</a>
        </div>
        <div ref={rightRef} className={`home-right ${rightInView ? 'slide-in-right' : ''}`}>
          <Lottie options={defaultOptions} height={500} width={900} /> {/* Adjust size if necessary */}
        </div>
      </div>

      {/* Upcoming Events */}
      <div ref={upcomingRef} className={`events-container ${upcomingInView ? 'slide-in-up' : ''}`}>
        <h2 className="section-title">Upcoming Events</h2>
        <UpcomingEvents events={upcomingEvents} />
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Past Events */}
      <div ref={pastRef} className={`events-container ${pastInView ? 'slide-in-up' : ''}`}>
        <h2 className="section-title">Past Events</h2>
        <PastEvents events={pastEvents} />
      </div>
    </div>
  );
};

export default Home;