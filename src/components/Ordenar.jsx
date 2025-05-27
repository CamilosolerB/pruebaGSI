import React, { useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap'; 

export const Ordenar = ({ moves }) => {
    const [buscar, setBuscar] = useState('');

    const movimientos = moves.filter(moveData =>
        moveData.move.name.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <Container className="my-4">
            <h2 className="text-center mb-3">Lista de Movimientos</h2>
            <Form className="mb-3">
                <FormControl type="text" placeholder="Buscar movimiento" value={buscar} onChange={(e) => setBuscar(e.target.value)}
                />
            </Form>
            {movimientos.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nombre del Movimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimientos.map((moveData) => (
                            <tr key={moveData.move.name}>
                                <td>{moveData.move.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className="text-center">No se encontraron movimientos que coincidan con "{buscar}".</p>
            )}
        </Container>
    );
};