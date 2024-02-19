import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonDetails({ name: pokemon, onMoveSelect, types }) {
    
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [selectedMove, setSelectedMove] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                setPokemonDetails(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemonDetails();
    }, [pokemon]);

    const handleMoveChange = (event) => {
        const selectedMoveName = event.target.value;
        const selectedMove = pokemonDetails.moves.find(move => move.move.name === selectedMoveName);
        setSelectedMove(selectedMove);
        onMoveSelect(selectedMove);
    };

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
            <h3>Types:</h3>
            <ul>
                {types.map((type, index) => (
                    <li key={index} className={`type-${type.type.name}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>
            <h3>Select a Move:</h3>
            <select onChange={handleMoveChange}>
                <option value="">Select a move</option>
                {pokemonDetails.moves.map((move, index) => (
                    <option key={index} value={move.move.name}>{move.move.name}</option>
                ))}
            </select>
            <h3>Base Experience: {pokemonDetails.base_experience}</h3>
            <h3>Height: {pokemonDetails.height}</h3>
            <h3>Weight: {pokemonDetails.weight}</h3>
        </div>
    );
}

export default PokemonDetails;
