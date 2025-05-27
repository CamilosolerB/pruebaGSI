import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <Nav className="flex-column bg-dark vh-100 " >
    <h3 className='text-light text-center'>Sidebar</h3>
    <Nav.Item>
      <Link to="/doctores" className="nav-link text-light">Doctores</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/crear-doctor" className="nav-link text-light">Crear Doctor</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/pokemon" className="nav-link text-light">Vaporeon</Link>
    </Nav.Item>
  </Nav>
);