import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPokemon: null,
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
      selectedPokemon: (state, action) => {
        state.selectedPokemon = action.payload;
      },
      selectedMove: (state, action) => {
        state.selectedMove = action.payload;
      },
      addPokemonToTeam: (state, action) => {
        const newPokemon = action.payload;
        const emptySlotIndex = state.team.findIndex(pokemon => pokemon === null);
        if (emptySlotIndex !== -1) {
            // If an empty slot is found, fill it with the new Pokemon
            state.team[emptySlotIndex] = newPokemon;
        } else {
            console.log('Team is already at max size'); // Log a message indicating team is full
            // You might want to handle this case differently, e.g., show a notification
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
      setSelectedMoveDetails: (state, action) => {
        state.detailedMove = action.payload; 
    },

    }
  });
export const { selectedPokemon } = TeamBuildSlice.actions;
export const { selectedMove } = TeamBuildSlice.actions;
export const { addPokemonToTeam } = TeamBuildSlice.actions;
export const { removePokemonFromTeam } = TeamBuildSlice.actions;
export const { setPokemonList, setSearchTerm, setFilteredPokemonList, setSelectedPokemon, setSelectedMove,setSelectedMoveDetails } = TeamBuildSlice.actions;
export default TeamBuildSlice.reducer;

