import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearDoctor = ({ onAgregarDoctor }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pais, setPais] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [genero, setGenero] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && apellido && documento && email && telefono && ciudad && direccion && pais && departamento) {
      onAgregarDoctor({ nombre, apellido, documento, email, telefono, ciudad, direccion, pais, departamento, genero });
      setNombre('');
      setApellido('');
      setDocumento('');
      setEmail('');
      setTelefono('');
      setCiudad('');
      setDireccion('');
      setPais('');
      setDepartamento('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='card p-4'>
      <h1 className='text-center'>Formulario doctor</h1>
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
      <Form.Group>
      <Form.Group>
        <Form.Label>Pais</Form.Label>
        <Form.Control type="text" value={pais} onChange={e => setPais(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Departamento / Provincia</Form.Label>
        <Form.Control type="text" value={departamento} onChange={e => setDepartamento(e.target.value)} required />
      </Form.Group>
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="text" value={ciudad} onChange={e => setCiudad(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" value={direccion} onChange={e => setDireccion(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Genero</Form.Label>
        <Form.Select value={genero} onChange={e => setGenero(e.target.value)}>
          <option value="Maculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="No binario">No binario</option>
        </Form.Select>
      </Form.Group>
      
      <Button type="submit" className="mt-2">Agregar Doctor</Button>
    </Form>
  );
};

export default CrearDoctor;