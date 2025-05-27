import { Container } from "react-bootstrap"
import { Ordenar } from "./Ordenar"

export const Pokemon = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <Container>
            <h1 className="text-center">Informacion del pokemon</h1>
            <div className="row">
                <section className="card p-2 col">
                    <p>Nombre : {pokemon.name}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Tipo: {pokemon.types[0].type.name}</p>
                    <h3>Habilidades</h3>
                    {pokemon.abilities.map((habilidad) => (
                        <Container key={habilidad.ability.name}>
                            <li>{habilidad.ability.name}</li>
                        </Container>
                    ))}
                </section>
                <section className="col">
                    <Ordenar moves={pokemon.moves} />
                </section>
            </div>
        </Container>
    )
}