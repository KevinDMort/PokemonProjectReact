import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setSelectedMoveDetails  } from './TeamBuildingSlice';

function MoveDetails() {
  const selectedMove = useSelector(state => state.teamBuild.selectedMove);
  const detailedMove = useSelector(state => state.teamBuild.detailedMove); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMoveDetails = async () => {
      try {
        if (selectedMove) {
          // Fetch move details only if selectedMove is not null
          const response = await axios.get(selectedMove.move.url);
          // Update the move details in the store
          dispatch(setSelectedMoveDetails(response.data));
        }
      } catch (error) {
        console.error('Error fetching move details:', error);
      }
    };

    // Fetch move details when component mounts or when selectedMove changes
    fetchMoveDetails();
  }, [selectedMove, dispatch]); // Dependency array includes dispatch

  if (!detailedMove) {
    return <div>Loading move details...</div>;
  }
  
  return (
    <div className="move-details">
        <h2>Move Details</h2>
        <h3>{detailedMove.name}</h3>
        <p>Accuracy: {detailedMove.accuracy}</p>
        <p>Damage Class: {detailedMove.damage_class?.name}</p>
        <p>Type: <span className={`type-${detailedMove.type?.name}`}>{detailedMove.type?.name}</span></p>
        <p>Power: {detailedMove.power}</p>
        <p>PP: {detailedMove.pp}</p>
        <p> {detailedMove.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text}</p>
    </div>
);
}

export default MoveDetails;
