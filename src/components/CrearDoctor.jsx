import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearDoctor = ({ onAgregarDoctor }) => {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && especialidad) {
      onAgregarDoctor({ nombre, especialidad });
      setNombre('');
      setEspecialidad('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Especialidad</Form.Label>
        <Form.Control
          type="text"
          value={especialidad}
          onChange={e => setEspecialidad(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-2">Agregar Doctor</Button>
    </Form>
  );
};

export default CrearDoctor;