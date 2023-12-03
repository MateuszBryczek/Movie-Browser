import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    error: false,
  },
  reducers: {
    fetchMoviesX: () => {},
    fetchMoviesSucces: (state, { payload: movies }) => {
      state.movies = movies.results.slice(0, 8);
    },
    fetchMoviesError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
  },
});

export const { fetchMoviesX, fetchMoviesSucces, fetchMoviesError } =
  movieSlice.actions;
const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectError = state => selectMoviesState(state).Error;
export default movieSlice.reducer;
