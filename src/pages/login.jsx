import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = ({ setLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const response = await fetch('https://swasthyabackend.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password, role })
    });

    const data = await response.json();

    if (response.ok) {
      setLoggedIn({ type: role, id: data.id });
      if (role === 'patient') {
        navigate('/');
      } else {
        navigate('/doctorDashboard');
      }
    } else {
      setError(data.message || 'Login failed');
    }
  } catch (err) {
    console.error(err);
    setError('Something went wrong. Please try again.');
  }
};


  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <div className="role-selector">
          <button 
            className={role === 'patient' ? 'active' : ''} 
            onClick={() => setRole('patient')}
          >
            Login as Patient
          </button>
          <button 
            className={role === 'doctor' ? 'active' : ''} 
            onClick={() => setRole('doctor')}
          >
            Login as Doctor
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
