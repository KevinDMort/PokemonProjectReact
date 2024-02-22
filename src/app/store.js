import { configureStore } from '@reduxjs/toolkit';
import teamBuildReducer from '../components/TeamBuildingSlice'; // Import your slice

const store = configureStore({
  reducer: {
    teamBuild: teamBuildReducer, // Add your slice reducer to the store
    // Add other reducers if you have them
  },
});

export default store;
