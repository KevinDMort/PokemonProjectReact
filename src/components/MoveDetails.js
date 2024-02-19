import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoveDetails({ move }) {
    const [moveDetails, setMoveDetails] = useState(null);
    useEffect(() => {
        const fetchMoveDetails = async () => {
            try {
                const response = await axios.get(move.move.url);
                setMoveDetails(response.data);
            } catch (error) {
                console.error('Error fetching move details:', error);
            }
        };

        fetchMoveDetails();
    }, [move]);
    
    if (!moveDetails) {
        return <div>Loading move details...</div>;
    }

    return (
        <div className="move-details">
            <h2>Move Details</h2>
            <h3>{move.move.name}</h3>
            <p>Accuracy: {moveDetails.accuracy}</p>
            <p>Damage Class: {moveDetails.damage_class.name}</p>
            <p>Type: <span className={`type-${moveDetails.type.name}`}>{moveDetails.type.name}</span></p>
            <p>Power: {moveDetails.power}</p>
            <p>PP: {moveDetails.pp}</p>
            <p> {moveDetails.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text}</p>
        </div>
    );
}

export default MoveDetails;
