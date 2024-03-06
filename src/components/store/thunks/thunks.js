import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemonList = createAsyncThunk(
  'teamBuild/fetchPokemonList',
  async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      return response.data.results.map(pokemon => pokemon.name);
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSelectedPokemon= createAsyncThunk(
  'teamBuild/fetchSelectedPokemon',
  async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);



