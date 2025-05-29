import React from 'react';
import './appointment.css';

const doctors = [
  {
    name: 'Dr. Aditi Mehra',
    specialty: 'Cardiologist',
    experience: '10 years',
    availability: 'Mon - Fri, 10 AM - 4 PM',
    rating: 4.5,
  },
  {
    name: 'Dr. Rajeev Kapoor',
    specialty: 'Dermatologist',
    experience: '8 years',
    availability: 'Mon - Sat, 9 AM - 2 PM',
    rating: 4.2,
  },
  {
    name: 'Dr. Sana Qureshi',
    specialty: 'Psychiatrist',
    experience: '6 years',
    availability: 'Tue - Sun, 11 AM - 6 PM',
    rating: 4.8,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star">★</span>);
  }

  if (halfStar) {
    stars.push(<span key="half" className="star">☆</span>);
  }

  while (stars.length < 5) {
    stars.push(<span key={`empty-${stars.length}`} className="star empty">☆</span>);
  }

  return stars;
};

const Appointments = () => {
  const handleBook = (doctorName) => {
    alert(`Booking initiated for ${doctorName}`);
  };

  return (
    <div className="appointments-page">
      <h1>Book an Appointment</h1>
      <p className="subtext">Browse available doctors and book your consultation.</p>
      <div className="doctor-cards-container">
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <h2>{doc.name}</h2>
            <div className="rating">{renderStars(doc.rating)} <span className="rating-number">({doc.rating})</span></div>
            <p><strong>Specialty:</strong> {doc.specialty}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Availability:</strong> {doc.availability}</p>
            <button onClick={() => handleBook(doc.name)}>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
