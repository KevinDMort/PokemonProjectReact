import { configureStore } from '@reduxjs/toolkit';
import teamBuildReducer from './slices/TeamBuildingSlice'; 
import { fetchPokemonList, fetchSelectedPokemon } from './thunks/thunks';

const store = configureStore({
  reducer: {
    teamBuild: teamBuildReducer, // Add your slice reducer to the store
    // Add other reducers if you have them
  },
});

export { fetchPokemonList, fetchSelectedPokemon };
export default store;

