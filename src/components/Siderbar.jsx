import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <Nav className="flex-column bg-dark vh-100 p-3" style={{ minWidth: '200px' }}>
    <Nav.Item>
      <Link to="/doctores" className="nav-link color-light">Doctores</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/crear-doctor" className="nav-link">Crear Doctor</Link>
    </Nav.Item>
  </Nav>
);