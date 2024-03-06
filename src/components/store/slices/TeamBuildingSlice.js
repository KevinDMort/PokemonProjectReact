import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPokemon: null,
    detailedPokemon: null,
    selectedMove: null,
    team: Array(6).fill(null),
    pokemonList: [],
    searchTerm: '',
    filteredPokemonList: [],
    detailedMove: null,
  };

  export const TeamBuildSlice = createSlice({
    name: 'teamBuild',
    initialState,
    
    reducers: {
      addPokemonToTeam: (state, action) => {
        const newPokemon = action.payload;
        const emptySlotIndex = state.team.findIndex(pokemon => pokemon === null);
        if (emptySlotIndex !== -1) {
            state.team[emptySlotIndex] = newPokemon;
        } else {
            console.log('Team is already at max size'); 
        }
      },
      removePokemonFromTeam: (state, action) => {
            state.team = state.team.filter(pokemon => pokemon !== action.payload);
      },
      setPokemonList: (state, action) => {
          state.pokemonList = action.payload;
      },
      setSearchTerm: (state, action) => {
          state.searchTerm = action.payload;
      },
      setFilteredPokemonList: (state, action) => {
          state.filteredPokemonList = action.payload;
      },
      setSelectedPokemon: (state, action) => {  
        state.selectedPokemon = action.payload;
      },
      setSelectedMove: (state, action) => {  
        state.selectedMove = action.payload;
      },
      setDetailedMove: (state, action) => {
        state.detailedMove = action.payload; 
      },
      setDetailedPokemon: (state, action) => {
        state.detailedPokemon = action.payload;
      }
    }
  });
export const { addPokemonToTeam, removePokemonFromTeam, setPokemonList, setSearchTerm, setFilteredPokemonList, setSelectedPokemon, setSelectedMove,setDetailedMove, setDetailedPokemon} = TeamBuildSlice.actions;
export default TeamBuildSlice.reducer;

