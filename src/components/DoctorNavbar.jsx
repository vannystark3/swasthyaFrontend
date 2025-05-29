import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DoctorNavbar.css';

const DoctorNavbar = () => {
  const location = useLocation();

  return (
    <nav className="doctor-navbar">
      <div className="doctor-logo">
        <h2>Doctor Panel</h2>
      </div>
      <ul className="doctor-nav-links">
        <li className={location.pathname === '/doctor/dashboard' ? 'active' : ''}>
          <Link to="/doctor/dashboard">Consultations</Link>
        </li>
        <li className={location.pathname === '/doctor/appointments' ? 'active' : ''}>
          <Link to="/doctor/appointments">Appointments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DoctorNavbar;
