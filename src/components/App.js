import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App({ onPokemonSelect }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    const fetchPokemonList = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
            const pokemonNames = response.data.results.map(pokemon => pokemon.name);
            setPokemonList(pokemonNames);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };

    useEffect(() => {
        fetchPokemonList();
    }, []);

    const handlePokemonClick = async (pokemonName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemonDetails = response.data;
            onPokemonSelect(pokemonDetails);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        // Filter the list of Pokemon based on the search term
        const filtered = pokemonList.filter(pokemon =>
            pokemon.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPokemonList(filtered);
    };

    return (
        <div>
            <h2>Pokemon List</h2>
            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredPokemonList.slice(0,9).map((pokemon, index) => (
                    <li key={index}>
                        <div
                            className="pokemon-name" // Add a class for styling
                            onClick={() => handlePokemonClick(pokemon)}
                        >
                            {pokemon}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
