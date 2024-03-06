import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PokemonTeam() {
  const team = useSelector(state => state.teamBuild.team);
  const dispatch = useDispatch();

  const handlePokemonSelect = (pokemon) => {
    dispatch({ type: 'teamBuild/selectedPokemon', payload: pokemon });
  };

  const renderTeamSlots = () => {
    return team.map((pokemon, index) => (
      <div key={index} className="team-slot" onClick={() => handlePokemonSelect(pokemon)}>
        {pokemon ? (
          <img src={pokemon.sprites.front_default} alt={pokemon.name}  />
        ) : (
          <span className="empty-slot">Empty</span>
        )}
      </div>
    ));
  };

  return (
    <div className="pokemon-team">
      <h3>My Pokémon Team</h3>
      <div className="team-container">{renderTeamSlots()}</div>
    </div>
  );
}

export default PokemonTeam;
