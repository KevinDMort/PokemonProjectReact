import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchSelectedPokemon } from './store/thunks/thunks';

function PokemonSearch() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.teamBuild.pokemonList);
    const searchTerm = useSelector(state => state.teamBuild.searchTerm);
    const filteredPokemonList = useSelector(state => state.teamBuild.filteredPokemonList);

    useEffect(() => {dispatch(fetchPokemonList()); }, []); 

    const handlePokemonClick = async (pokemonName) => {
        dispatch(fetchSelectedPokemon(pokemonName));
    };
    const handleSearchChange = (event) => {
        const { value } = event.target;
        dispatch({ type: 'teamBuild/setSearchTerm', payload: value })
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
