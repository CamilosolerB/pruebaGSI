import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearDoctor = ({ onAgregarDoctor }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && apellido && documento && email && telefono) {
      onAgregarDoctor({ nombre, apellido, documento, email, telefono });
      setNombre('');
      setApellido('');
      setDocumento('');
      setEmail('');
      setTelefono('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Documento</Form.Label>
        <Form.Control type="text"value={documento} onChange={e => setDocumento(e.target.value)} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"value={nombre} onChange={e => setNombre(e.target.value)} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" value={apellido} onChange={e => setApellido(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} required />
      </Form.Group>
      <Button type="submit" className="mt-2">Agregar Doctor</Button>
    </Form>
  );
};

export default CrearDoctor;