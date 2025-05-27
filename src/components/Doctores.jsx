import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const Doctores = ({ doctores, onEliminarDoctor }) => {
  const [show, setShow] = useState(false);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  const handleShow = (doctor) => {
    setDoctorSeleccionado(doctor);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map((doctor, idx) => (
            <tr key={idx}>
              <td>{doctor.nombre}</td>
              <td>{doctor.especialidad}</td>
              <td>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => handleShow(doctor)}
                >
                  Ver Detalles
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onEliminarDoctor(idx)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {doctorSeleccionado && (
            <>
              <p>
                <strong>Nombre:</strong> {doctorSeleccionado.nombre}
              </p>
              <p>
                <strong>Especialidad:</strong> {doctorSeleccionado.especialidad}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Doctores;