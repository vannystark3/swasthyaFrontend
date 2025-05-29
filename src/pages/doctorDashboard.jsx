import React, { useState } from 'react';
import DoctorNavbar from '../components/DoctorNavbar';
import './doctorDashboard.css';

const DoctorDashboard = () => {
  const [consultations] = useState([
    {
      patient_name: "Aditya Sharma",
      age: 29,
      date: "2025-05-29",
      time: "10:30 AM",
      concern: "Fever & headache",
    },
    {
      patient_name: "Riya Singh",
      age: 35,
      date: "2025-05-29",
      time: "11:15 AM",
      concern: "Back pain",
    },
    {
      patient_name: "Mohit Verma",
      age: 42,
      date: "2025-05-29",
      time: "12:00 PM",
      concern: "Routine checkup",
    },
  ]);

  return (
    <div className="doctor-dashboard">
      <DoctorNavbar />
      <div className="dashboard-content">
        <h1>Welcome, Doctor</h1>

        <div className="card-container">
          <div className="info-card">
            <h3>Today's Appointments</h3>
            <p>{consultations.length} patients scheduled</p>
          </div>
          <div className="info-card">
            <h3>Pending Reports</h3>
            <p>3 reports to review</p>
          </div>
          <div className="info-card">
            <h3>New Messages</h3>
            <p>3 unread messages</p>
          </div>
        </div>

        <div className="consultations-section">
          <h2>Consultations</h2>
          <table className="consultation-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((item, index) => (
                <tr key={index}>
                  <td>{item.patient_name}</td>
                  <td>{item.age}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
