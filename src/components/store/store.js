import { configureStore } from '@reduxjs/toolkit';
import teamBuildReducer from './slices/TeamBuildingSlice'; 
import { fetchPokemonList, fetchSelectedPokemon } from './thunks/thunks';

const store = configureStore({
  reducer: {
    teamBuild: teamBuildReducer,
  },
});

export { fetchPokemonList, fetchSelectedPokemon };
export default store;

