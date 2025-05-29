import React from 'react';
import './appointment.css';

const doctors = [
  {
    name: 'Dr. Aditi Mehra',
    specialty: 'Cardiologist',
    experience: '10 years',
    availability: 'Mon - Fri, 10 AM - 4 PM',
  },
  {
    name: 'Dr. Rajeev Kapoor',
    specialty: 'Dermatologist',
    experience: '8 years',
    availability: 'Mon - Sat, 9 AM - 2 PM',
  },
  {
    name: 'Dr. Sana Qureshi',
    specialty: 'Psychiatrist',
    experience: '6 years',
    availability: 'Tue - Sun, 11 AM - 6 PM',
  },
];

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
