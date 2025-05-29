import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onLogout }) => {
  const navigate = useNavigate();

  const user = {
    name: "Aditya",
    email: "adi@example.com",
    phone: "+91 9936321120",
    dob: "1990-01-15",
    gender: "Male",
    address: "Mohali, Punjab"
  };

  const fields = [
    { label: "Name", value: user.name },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Date of Birth", value: new Date(user.dob).toLocaleDateString() },
    { label: "Gender", value: user.gender },
    { label: "Address", value: user.address },
  ];

  const handleLogout = () => {
    onLogout();        // loggedIn = false kar diya
    navigate('/login'); // login page pe redirect kar diya
  };

  return (
    <div style={{
      minHeight: 'calc(90vh - 60px)',
      backgroundColor: '#f9f9f9',
      paddingTop: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingBottom: '10px',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        padding: '10px 40px',
        maxWidth: '700px',
        width: '90%',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 700, fontSize: '2.5rem' }}>
          User Profile
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          rowGap: '25px',
          columnGap: '40px',
        }}>
          {fields.map(({ label, value }, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontWeight: '600', marginBottom: '6px', fontSize: '1rem', color: '#555' }}>
                {label}
              </label>
              <span style={{ fontSize: '1.1rem', color: '#111' }}>{value}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleLogout} 
          style={{
            marginTop: '40px',
            alignSelf: 'center',
            padding: '12px 40px',
            fontSize: '1.1rem',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d9363e'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff4d4f'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
