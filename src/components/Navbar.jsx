import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const CustomNavbar = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="mb-0">
        <Container fluid>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown
                title={user?.name || user?.email || 'User'}
                id="user-nav-dropdown"
                align="end"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#services">Services</NavDropdown.Item>
                <NavDropdown.Item href="#usage">Usage</NavDropdown.Item>
                <NavDropdown.Item href="#activity">Activity</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  🔒 Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Custom Sidebar below navbar */}
      <div
        style={{
          position: 'fixed',
          top: '56px', // height of the navbar
          left: sidebarOpen ? '0' : '-250px',
          width: '250px',
          height: '100%',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #ddd',
          transition: 'left 0.3s ease-in-out',
          zIndex: 1040,
          padding: '1rem'
        }}
      >
        <button
          className="btn btn-sm btn-outline-secondary mb-3"
          onClick={() => setSidebarOpen(false)}
        >
          ✖ Close
        </button>
        <ul className="list-unstyled">
          <li><a href="#services" onClick={() => setSidebarOpen(false)}>🧩 Services</a></li>
          <li><a href="#usage" onClick={() => setSidebarOpen(false)}>📊 Usage</a></li>
          <li><a href="#activity" onClick={() => setSidebarOpen(false)}>📜 Activity</a></li>
          <li><a href="#settings" onClick={() => setSidebarOpen(false)}>⚙️ Settings</a></li>
        </ul>
      </div>
    </>
  );
};

export default CustomNavbar;
