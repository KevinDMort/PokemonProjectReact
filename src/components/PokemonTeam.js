import React from 'react';

function PokemonTeam({ team, onPokemonSelect}) {
  const renderTeamSlots = () => {
    return team.map((pokemon, index) => (
      <div key={index} className="team-slot" onClick={() => onPokemonSelect(pokemon)}>
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
