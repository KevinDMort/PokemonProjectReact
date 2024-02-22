import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPokemon, setSelectedMove, addPokemonToTeam } from './TeamBuildingSlice';

function PokemonDetails() {
    const MAX_TEAM_SIZE = 6;
    const team = useSelector(state => state.teamBuild.team);
    const selectedPokemon = useSelector(state => state.teamBuild.selectedPokemon);
    const selectedMove = useSelector(state => state.teamBuild.selectedMove);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                if (selectedPokemon) {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
                    dispatch(setSelectedPokemon(response.data));
                }
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemonDetails();
    }, [selectedPokemon, dispatch]);

    const handleAddToTeamClick = () => {
            dispatch(addPokemonToTeam(selectedPokemon));
    };
    

    const handleMoveChange = (event) => {
        const selectedMoveName = event.target.value;
        const sMove = selectedPokemon.moves.find(move => move.move.name === selectedMoveName);
        dispatch(setSelectedMove(sMove)); // Dispatch action to update selected move
    };

    if (!selectedPokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <h3>Types:</h3>
            <ul>
                {selectedPokemon.types.map((type, index) => (
                    <li key={index} className={`type-${type.type.name}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>
            <h3>Select a Move:</h3>
            <select onChange={handleMoveChange}>
                <option value="">Select a move</option>
                {selectedPokemon.moves.map((move, index) => (
                    <option key={index} value={move.move.name}>{move.move.name}</option>
                ))}
            </select>
            <h3>Base Experience: {selectedPokemon.base_experience}</h3>
            <h3>Height: {selectedPokemon.height}</h3>
            <h3>Weight: {selectedPokemon.weight}</h3>
            <button onClick={handleAddToTeamClick}>Add to Team</button>
        </div>
    );
}

export default PokemonDetails;
