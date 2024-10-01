import React from 'react';
import '../styles/upcomingEvent.css'; // Ensure your upcomingEvent.css is imported

const UpcomingEvents = ({ events }) => {
  return (
    <div className="upcoming-events-grid">
      {events.map((event, index) => (
        <div key={index} className="upcoming-event-card">
          <h3 className="upcoming-event-name">{event.name}</h3>
          <div className="upcoming-event-info">
            <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
            <span>{event.location}</span>
          </div>
          <div className="upcoming-event-info">
            <i className="fas fa-clock"></i> {/* Time icon */}
            <span>{event.date}</span>
          </div>
          <a href={event.registerLink} className="upcoming-event-register-link">
            Register Now
          </a>
          {/* Short description for the event */}
          <p className="upcoming-event-description">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;