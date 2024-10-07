import React from 'react';
import Lottie from 'react-lottie';
import PastEvents from '../components/PastEvents'; // Make sure the path is correct
import UpcomingEvents from '../components/UpcomingEvents'; // Make sure the path is correct
import calendarAnimation from '../assets/animations/calendar.json'; // Import the calendar animation JSON
import '../styles/events.css'; // Import the CSS for styling

const Events = () => {
  // Dummy data for the events
  const upcomingEvents = [
    {
      name: 'AI Ideathon',
      location: 'CougarDen',
      date: '2024-11-09',
      registerLink: '/register/ai-ideathon',
      description: 'A thrilling event for AI enthusiasts to showcase their ideas.',
    },
    {
        name: 'Hackathon',
        location: 'CougarDen',
        date: '2024-12-01',
        registerLink: '/register/hackathon',
        description: 'bla bla bla',
      },
  ];

  const pastEvents = [
    {
      name: 'Robo Soccer 2023',
      date: '2023-08-15',
      galleryLink: '/gallery/robo-soccer',
      description: 'A thrilling soccer match played by robots, designed by our club members.',
    },
  ];

  // Lottie options for the calendar animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calendarAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="events-page">
      <h1 className="events-title">EVENTS</h1> {/* Bold and centered */}

      {/* Calendar Animation */}
      <div className="calendar-animation">
        <Lottie options={defaultOptions} height={100} width={100} /> {/* Adjust the size if necessary */}
      </div>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <h2 className="section-header">Upcoming Events</h2> {/* Centered */}
        <UpcomingEvents events={upcomingEvents} />
      </section>

      {/* Divider */}
      <div className="events-divider"></div>

      {/* Past Events Section */}
      <section className="past-events-section">
        <h2 className="section-header">Past Events</h2> {/* Centered */}
        <PastEvents events={pastEvents} />
      </section>
    </div>
  );
};

export default Events;
