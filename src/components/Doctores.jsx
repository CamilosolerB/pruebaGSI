import React, { useState } from 'react';
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs";
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
            <h1 className='text-center'>Doctores registrados</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>CIudad</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {doctores.map((doctor, idx) => (
                        <tr key={idx}>
                            <td>{doctor.documento}</td>
                            <td>{doctor.nombre}</td>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.telefono}</td>
                            <td>{doctor.ciudad}</td>
                            <td>{doctor.direccion}</td>
                            <td>
                                <BsFillEyeFill onClick={() => handleShow(doctor)}/>
                                <BsFillTrashFill onClick={() => onEliminarDoctor(idx)}/>
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
                                <strong>Documento:</strong> {doctorSeleccionado.documento}
                            </p>
                            <p>
                                <strong>Nombre:</strong> {doctorSeleccionado.nombre}
                            </p>
                            <p>
                                <strong>Apellido:</strong> {doctorSeleccionado.apellido}
                            </p>
                            <p>
                                <strong>Correo-e:</strong> {doctorSeleccionado.email}
                            </p>
                            <p>
                                <strong>Telefono:</strong> {doctorSeleccionado.telefono}
                            </p>
                            <p>
                                <strong>Genero:</strong> {doctorSeleccionado.genero}
                            </p>
                            <hr />
                            <h3>Locacion</h3>
                            <p>
                                <strong>Pais:</strong> {doctorSeleccionado.pais}
                            </p>
                            <p>
                                <strong>Departamento:</strong> {doctorSeleccionado.departamento}
                            </p>
                            <p>
                                <strong>Ciudad:</strong> {doctorSeleccionado.ciudad}
                            </p>
                            <p>
                                <strong>Direccion:</strong> {doctorSeleccionado.direccion}
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