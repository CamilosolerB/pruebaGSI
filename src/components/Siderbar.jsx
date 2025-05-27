import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <div className="sidebar-wrapper h-100" style={{minHeight: "100vh"}}>
    <Nav className="flex-column bg-dark h-100 sidebar">
      <h3 className="text-light text-center py-3 border-bottom border-secondary">
        Panel
      </h3>
      <Nav.Item>
        <Link to="/doctores" className="nav-link text-light sidebar-link">Doctores</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/crear-doctor" className="nav-link text-light sidebar-link">Crear Doctor</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/pokemon" className="nav-link text-light sidebar-link">Vaporeon</Link>
      </Nav.Item>
    </Nav>
  </div>
);