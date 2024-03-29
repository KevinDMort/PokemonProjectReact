import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTeam } from './store/slices/TeamBuildingSlice';
import { deletePokemonFromTeam } from './store/slices/TeamBuildingSlice';
function PokemonTeam() {
  const team = useSelector(state => state.teamBuild.team);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');

  const handlePokemonSelect = (pokemon) => {
    dispatch({ type: 'teamBuild/setSelectedPokemon', payload: pokemon });
  };

  const renderTeamSlots = () => {
    return team.map((teamMember, index) => (
      <div key={index} className="team-slot" onClick={() => handlePokemonSelect(teamMember.pokemon)}>
        {teamMember.pokemon ? (
          <div className="pokemon-details">
            <div className="cross-icon" onClick={() => handleRemovePokemon(index)}></div>
            <img src={teamMember.pokemon.sprites.front_default} alt={teamMember.pokemon.name} />
          </div>
        ) : (
          <span className="empty-slot">Empty</span>
        )}
      </div>
    ));
  };
  const handleRemovePokemon = (index) => {
    console.log("Removing Pokémon at index:", index);
    dispatch(deletePokemonFromTeam(index));
  };
  
  const handleAddTeam = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTeamName(''); // Reset team name input
  };

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleTeamNameSubmit = () => {
    dispatch(addTeam({ teamName, creatorName: 'Current User' }));
    setIsModalOpen(false);
    setTeamName(''); // Reset team name input
  };

  return (
    <div className="pokemon-team">
      <h3>My Pokémon Team</h3>
      <button onClick={handleAddTeam}>Create Team</button>
      <div className="team-container">{renderTeamSlots()}</div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter Team Name</h2>
            <input type="text" value={teamName} onChange={handleTeamNameChange} />
            <button onClick={handleTeamNameSubmit}>OK</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonTeam;
