import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/navbar';
import DoctorNavbar from './components/DoctorNavbar';
import Footer from './components/footer'; 

import Home from './pages/home';
import Consult from './pages/consult';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Profile from './pages/profile';
import DoctorDashboard from './pages/doctorDashboard';

const AppContent = ({ loggedIn, setLoggedIn }) => {
  const location = useLocation();
  const path = location.pathname;

  const isLoginPage = path === '/login';
  const isDoctorPage = path.startsWith('/doctor');

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {/* Show NavBar only when not login or doctor */}
      {!isLoginPage && !isDoctorPage && <NavBar loggedIn={loggedIn} />}
      {/* {isDoctorPage && <DoctorNavbar />} */}

      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/profile" element={<Profile onLogout={handleLogout} />} />

          {/* Doctor-only route */}
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        </Routes>
      </div>

      {/* Show footer only when not on doctor pages or login */}
      {!isLoginPage && !isDoctorPage && <Footer />}
    </>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Router>
  );
};

export default App;
