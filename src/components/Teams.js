import React from 'react';
import { useSelector } from 'react-redux';

function Teams() {
  const teams = useSelector(state => state.teamBuild.teams);

  const renderTeamSlots = (team) => {
    return team.map((teamMember, index) => (
      <div key={index} className="team-slot">
        {teamMember.pokemon ? (
          <img src={teamMember.pokemon.sprites.front_default} alt={teamMember.pokemon.name} />
        ) : (
          <span className="empty-slot">Empty</span>
        )}
      </div>
    ));
  };

  return (
    <div className="teams-container">
      <h1>Teams</h1>
      <div className="teams-list">
        {teams.map((team, index) => (
          <div key={index} className="team">
            <h2>Team Name: {team.teamName}</h2>
            <p>Creator Name: {team.creatorName}</p>
            <div className="team-members">
              {renderTeamSlots(team.team)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
