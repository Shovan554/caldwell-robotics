import React from 'react';
import '../styles/pastEvent.css'; // Make sure your pastEvent.css is imported

const PastEvents = ({ events }) => {
  return (
    <div className="past-events-grid">
      {events.map((event, index) => (
        <div key={index} className="past-event-card">
          <h3 className="past-event-name">{event.name}</h3>
          <div className="past-event-info">
            <i className="fas fa-clock"></i> {/* Time icon */}
            <span>{event.date}</span>
          </div>
          <a href={event.galleryLink} className="past-event-gallery-link">
            View Gallery
          </a>
          {/* Short description for the event */}
          <p className="past-event-description">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PastEvents;