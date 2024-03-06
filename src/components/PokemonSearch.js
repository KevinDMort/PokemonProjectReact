import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function PokemonSearch() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.teamBuild.pokemonList);
    const searchTerm = useSelector(state => state.teamBuild.searchTerm);
    const filteredPokemonList = useSelector(state => state.teamBuild.filteredPokemonList);

    const fetchPokemonList = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            const pokemonNames = response.data.results.map(pokemon => pokemon.name);
            dispatch({ type: 'teamBuild/setPokemonList', payload: pokemonNames })
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
            dispatch({ type: 'teamBuild/setSelectedPokemon', payload: response.data })
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        dispatch({ type: 'teamBuild/setSearchTerm', payload: value })

        // Filter the list of Pokémon based on the search term
        const filtered = pokemonList.filter(pokemon =>
            pokemon.toLowerCase().includes(value.toLowerCase())
        );
        dispatch({type: 'teamBuild/setFilteredPokemonList', payload: filtered});
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
            {searchTerm && filteredPokemonList.length > 0 && (
                <ul>
                    {filteredPokemonList.slice(0, 9).map((pokemon, index) => (
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
            )}
        </div>
    );
}

export default PokemonSearch;
