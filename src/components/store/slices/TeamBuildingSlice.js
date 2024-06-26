import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonList, fetchSelectedPokemon } from '../thunks/thunks';


const initialState = {
    selectedPokemon: null,
    detailedPokemon: { pokemon: null, moves: Array(4).fill(null) },
    selectedMove: null,
    team: Array(6).fill({ pokemon: null, moves: Array(4).fill(null) }),
    teams: [],
    pokemonList: [],
    searchTerm: '',
    filteredPokemonList: [],
    detailedMove: null,
  };

  export const TeamBuildSlice = createSlice({
    name: 'teamBuild',
    initialState,
    
    reducers: {
      deletePokemonFromTeam: (state, action) => {
        console.log("deletePokemonFromTeam reducer called with payload:", action.payload);
        const index = action.payload;
          state.team = state.team.map((teamMember, i) => {
            if (i === index) {
              return { pokemon: null, moves: Array(4).fill(null) };
            }
            return teamMember;
          });
      },
      addTeam: (state, action) => {
      const { teamName, creatorName } = action.payload; 
      const team = state.team; 
      state.teams.push({ team, teamName, creatorName }); 
      },
      
      removeMoveFromDetailedPokemon: (state, action) => {
        const { moveIndex } = action.payload;
        state.detailedPokemon.moves.splice(moveIndex, 1);
        state.detailedPokemon.moves[moveIndex] = null;
    },
      addMoveToDetailedPokemon: (state, action) => {
        const { move } = action.payload;
        const emptyMoveIndex = state.detailedPokemon.moves.findIndex(m => m === null);
        if (emptyMoveIndex !== -1) {
            state.detailedPokemon.moves[emptyMoveIndex] = move;
        } else {
            console.log('Moves are already at max size'); 
        }
    },
      addMoveToPokemon: (state, action) => {
        const { pokemonIndex, move } = action.payload;
        state.team[pokemonIndex].moves.push(move);
    },
    removeMoveFromPokemon: (state, action) => {
        const { pokemonIndex, moveIndex } = action.payload;
        state.team[pokemonIndex].moves.splice(moveIndex, 1);
    },
    addPokemonToTeam: (state, action) => {
      const newPokemon = action.payload.pokemon;
      const moves = action.payload.moves;
      const emptySlotIndex = state.team.findIndex(pokemon => pokemon.pokemon === null);
      if (emptySlotIndex !== -1) {
          state.team[emptySlotIndex] = {
              pokemon: newPokemon,
              moves: moves.slice(0, 4) // Take the first 4 moves from the moves array
          };
      } else {
          console.log('Team is already at max size'); 
      }
  }
  ,
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
        state.detailedPokemon = {
          pokemon: action.payload,
          moves: [],
      };
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPokemonList.fulfilled, (state, action) => {
          state.pokemonList = action.payload;
        })
        .addCase(fetchSelectedPokemon.fulfilled, (state, action) => {
          state.selectedPokemon = action.payload;
        });
    },
  });
export const { deletePokemonFromTeam, addTeam, addMoveToDetailedPokemon, removeMoveFromDetailedPokemon, addPokemonToTeam, removePokemonFromTeam, setPokemonList, setSearchTerm, setFilteredPokemonList, setSelectedPokemon, setSelectedMove,setDetailedMove, setDetailedPokemon} = TeamBuildSlice.actions;
export default TeamBuildSlice.reducer;

