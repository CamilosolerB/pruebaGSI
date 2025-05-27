import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap'; 

export const Ordenar = ({ moves }) => {
    const [buscar, setBuscar] = useState('');
    const [movimientos, setMovimientos] = useState([]);
    const [orden, setOrden] = useState('A-Z');

    useEffect(() => {
        let filteredMoves = moves.filter(moveData =>
            moveData.move.name.toLowerCase().includes(buscar.toLowerCase())
        );

        if (orden === 'A-Z') {
            filteredMoves.sort((a, b) => a.move.name.localeCompare(b.move.name));
        } else if (orden === 'Z-A') {
            filteredMoves.sort((a, b) => b.move.name.localeCompare(a.move.name));
        }
        setMovimientos(filteredMoves);
    }, [moves, buscar, orden]);

    const handleOrdenChange = (e) => {
        setOrden(e.target.value);
    };

    return (
        <Container className="my-4">
            <h2 className="text-center mb-3">Lista de Movimientos</h2>
            <FormControl type="text" placeholder="Buscar movimiento" value={buscar} onChange={(e) => setBuscar(e.target.value)}/>
            <Form.Select className="mb-3" value={orden} onChange={handleOrdenChange}>
                <option value="A-Z">Ordenar de A-Z</option>
                <option value="Z-A">Ordenar de Z-A</option>
            </Form.Select>
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
                <p className="text-center">No se encontraron movimientos que coincidan.</p>
            )}
        </Container>
    );
};