import React, { useState, useEffect } from 'react';
import App from './App';
import PokemonDetails from './PokemonDetails';
import MoveDetails from './MoveDetails';
import PokemonTeam from './PokemonTeam';

function AppContainer() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedMove, setSelectedMove] = useState(null); 

    const handlePokemonSelect = (pokemon) => {
        setSelectedPokemon(pokemon);
        setSelectedMove(null); 
    };

    const handleMoveSelect = (move) => {
        setSelectedMove(move);
    };

    return (
        <div className="app-container-wrapper">
        <div className="app-container">
            <div className="pokemon-list">
                <App onPokemonSelect={handlePokemonSelect} />
            </div>
            <div className="pokemon-details-container">
                {selectedPokemon && (
                    <div className="pokemon-details">
                        <PokemonDetails name={selectedPokemon} types={selectedPokemon.types} onMoveSelect={handleMoveSelect} /> 
                    </div>
                )}
            </div>
            <div className="move-details-container"> 
                {selectedMove && (
                    <div className="move-details"> 
                        <MoveDetails move={selectedMove} /> 
                    </div>
                )}
            </div>
        
            </div>
            <div className="pokemon-team-container"> 
                <PokemonTeam />
            </div>
        </div>
    );
}

export default AppContainer;
