import React, { useState, useEffect } from 'react';
import PokemonSearch from './PokemonSearch';
import PokemonDetails from './PokemonDetails';
import MoveDetails from './MoveDetails';
import PokemonTeam from './PokemonTeam';

function AppContainer() {

    return (
        <div className="app-container-wrapper">
            <div className="app-container">
                <div className="pokemon-list">
                    <PokemonSearch/>
                </div>
                <div className="pokemon-details-container">
                        <div className="pokemon-details">
                            <PokemonDetails/>
                        </div>
                </div>
                <div className="move-details-container">
                        <div className="move-details">
                            <MoveDetails/>
                        </div>
                </div>
            </div>
            <div className="pokemon-team-container">
                <PokemonTeam/>
            </div>
        </div>
    );
}

export default AppContainer;