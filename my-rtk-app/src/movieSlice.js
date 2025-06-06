import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  movies: [
    {
      id: 1,
      name: "The Shawshank Redemption",
    },
    {
      id: 2,
      name: "The Green Mile",
    },
  ],
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // the params state and action are passed automatically
    addMovie: (state, action) => {
      const newMovie = {
        id: uuid(),
        name: action.payload,
      };
      state.movies.push(newMovie); //LOOKS like mutating code
      // but actually Immer is part of the toolchain here
      // and registers a draft state first, then an updated state
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});
export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer; // another awful abstraction to my mind
