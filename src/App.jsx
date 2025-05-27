import React, { useState, useEffect } from 'react';
import { Routes, Route, data } from 'react-router-dom';
import { Sidebar } from './components/Siderbar';
import Doctores from './components/Doctores';
import CrearDoctor from './components/CrearDoctor';
import { Pokemon } from './components/Pokemon';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [doctores, setDoctores] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon/vaporeon')
    .then(response => response.json())
    .then(data => setPokemon(data))
  },[])

  const agregarDoctor = (doctor) => {
    setDoctores([...doctores, doctor]);
  };

  const eliminarDoctor = (index) => {
    setDoctores(doctores.filter((_, i) => i !== index));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10} className="p-4">
          <Routes>
            <Route path="/doctores" element={ <Doctores doctores={doctores} onEliminarDoctor={eliminarDoctor}/>}/>
            <Route path="/crear-doctor" element={<CrearDoctor onAgregarDoctor={agregarDoctor} />}/>
            <Route path="*" element={<Doctores doctores={doctores} onEliminarDoctor={eliminarDoctor}/>}/>
            <Route path='/pokemon' element={<Pokemon pokemon={pokemon}/>}/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
