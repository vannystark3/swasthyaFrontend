import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="home-text">
          <h1>Your Health, Our Commitment</h1>
          <p>
            At <strong>Swasthya</strong>, we believe that healthcare is a right, not a privilege.
            Our mission is to empower individuals with accessible, efficient, and reliable medical consultation.
            Whether you're looking for advice or assistance, we're here to support you — every step of the way.
          </p>
          <button onClick={() => navigate('/consult')}>
            Get a Consultation
          </button>
        </div>
        <div className="home-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/747/157/non_2x/online-doctor-website-in-computer-with-medical-symbols-on-blue-and-white-background-vector.jpg"
            alt="Healthcare illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
