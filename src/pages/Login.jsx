import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/`, { email, password });
      localStorage.setItem('token', res.data.token);
      setMsg(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
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
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          <div className="mt-3" style={{ marginTop: '15px' }}>
            <span>Don't have an account? </span>
            <Link
              to="/register"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.color = '#0056b3'}
              onMouseOut={(e) => e.target.style.color = '#007bff'}
            >
              Register
            </Link>
          </div>
        </form>
        <p style={{ marginTop: '10px', color: 'red' }}>{msg}</p>
      </div>
    </div>
  );
}

export default Login;
