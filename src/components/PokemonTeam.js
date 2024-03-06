import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PokemonTeam() {
  const team = useSelector(state => state.teamBuild.team);
  const dispatch = useDispatch();

  const handlePokemonSelect = (pokemon) => {
    dispatch({ type: 'teamBuild/setSelectedPokemon', payload: pokemon });
  };

  const renderTeamSlots = () => {
    return team.map((teamMember, index) => (
      <div key={index} className="team-slot" onClick={() => handlePokemonSelect(teamMember.pokemon)}>
        {teamMember.pokemon ? (
          <img src={teamMember.pokemon.sprites.front_default} alt={teamMember.pokemon.name}  />
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
