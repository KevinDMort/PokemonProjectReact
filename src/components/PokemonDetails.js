import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMove, addPokemonToTeam, setDetailedPokemon} from './TeamBuildingSlice';

function PokemonDetails() {
    const selectedPokemon = useSelector(state => state.teamBuild.selectedPokemon);
    const detailedPokemon = useSelector(state => state.teamBuild.detailedPokemon);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                if (selectedPokemon) {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
                    dispatch(setDetailedPokemon(response.data));
                }
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemonDetails();
    }, [selectedPokemon, dispatch]);

    const handleAddToTeamClick = () => {
        dispatch(addPokemonToTeam(detailedPokemon));
    };
    

    const handleMoveChange = (event) => {
        const selectedMoveName = event.target.value;
        const sMove = detailedPokemon.moves.find(move => move.move.name === selectedMoveName);
        dispatch(setSelectedMove(sMove)); // Dispatch action to update selected move
    };

    if (!detailedPokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{detailedPokemon.name}</h2>
            <img src={detailedPokemon.sprites.front_default} alt={detailedPokemon.name} />
            <h3>Types:</h3>
            <ul>
                {detailedPokemon.types.map((type, index) => (
                    <li key={index} className={`type-${type.type.name}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>
            <h3>Select a Move:</h3>
            <select onChange={handleMoveChange}>
                <option value="">Select a move</option>
                {detailedPokemon.moves.map((move, index) => (
                    <option key={index} value={move.move.name}>{move.move.name}</option>
                ))}
            </select>
            <h3>Base Experience: {detailedPokemon.base_experience}</h3>
            <h3>Height: {detailedPokemon.height}</h3>
            <h3>Weight: {detailedPokemon.weight}</h3>
            <button onClick={handleAddToTeamClick}>Add to Team</button>
        </div>
    );
}

export default PokemonDetails;
