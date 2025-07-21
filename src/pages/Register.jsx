import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password
      });
      setMsg(res.data.message);
    } catch (error) {
      setMsg(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to bottom right, skyblue, white)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(5px)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        width: '500px',
        textAlign: 'center'
      }}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#d3d3d3',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a9a9a9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#d3d3d3'}
          >
            Register
          </button>
          <div className="mt-3" style={{ marginTop: '15px' }}>
            <span>Already have an account? </span>
            <Link
              to="/"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.color = '#0056b3'}
              onMouseOut={(e) => e.target.style.color = '#007bff'}
            >
              Login
            </Link>
          </div>
        </form>
        <p style={{ marginTop: '10px', color: 'red' }}>{msg}</p>
      </div>
    </div>
  );
}

export default Register;
