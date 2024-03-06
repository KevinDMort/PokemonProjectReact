import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PokemonDetails() {
    const selectedPokemon = useSelector(state => state.teamBuild.selectedPokemon);
    const detailedPokemon = useSelector(state => state.teamBuild.detailedPokemon);
    const dispatch = useDispatch();
    
    useEffect(() => {dispatch({ type: 'teamBuild/setDetailedPokemon', payload: selectedPokemon }); }, [selectedPokemon]);

    const handleAddToTeamClick = () => {
        dispatch({type: 'teamBuild/addPokemonToTeam', payload: detailedPokemon});
    };
    

    const handleMoveChange = (event) => {
        const selectedMoveName = event.target.value;
        const sMove = detailedPokemon.pokemon.moves.find(move => move.move.name === selectedMoveName);
        dispatch({ type: 'teamBuild/setSelectedMove', payload: sMove });
    };
    if (!detailedPokemon.pokemon) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{detailedPokemon.pokemon.name}</h2>
            <img src={detailedPokemon.pokemon.sprites.front_default} alt={detailedPokemon.pokemon.name} />
            <h3>Types:</h3>
            <ul>
                {detailedPokemon.pokemon.types.map((type, index) => (
                    <li key={index} className={`type-${type.type.name}`}>
                        {type.type.name}
                    </li>
                ))}
            </ul>
            <h3>Select a Move:</h3>
            <select onChange={handleMoveChange} >
                <option value="">Select a move</option>
                {detailedPokemon.pokemon.moves.map((move, index) => (
                    <option key={index} value={move.move.name}>{move.move.name}</option>
                ))} 
            </select>
            <h3>Base Experience: {detailedPokemon.pokemon.base_experience}</h3>
            <h3>Height: {detailedPokemon.pokemon.height}</h3>
            <h3>Weight: {detailedPokemon.pokemon.weight}</h3>
            <button onClick={handleAddToTeamClick}>Add to Team</button>
        </div>
    );
}

export default PokemonDetails;
