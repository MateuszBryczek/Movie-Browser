import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    error: false,
    searchMoviesValue: "",
    isLoading: false,
  },
  reducers: {
    fetchMovies: state => {
      state.isLoading = true;
    },
    fetchMoviesSucces: (state, { payload: movies }) => {
      console.log(movies);
      state.movies = movies;
      state.isLoading = false;
    },
    fetchMoviesError: (state, { payload: error }) => {
      state.error = true;
      state.isLoading = false;
      console.error(error);
    },
    changeSearchMoviesValue: (state, { payload: searchMoviesValue }) => {
      state.isLoading = true;
      state.searchMoviesValue = searchMoviesValue;
      console.log(state.searchMoviesValue);
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  changeSearchMoviesValue,
} = movieSlice.actions;
const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesError = state => selectMoviesState(state).error;
export const selectSearchMoviesValue = state =>
  selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = state =>
  selectMoviesState(state).isLoading;
export default movieSlice.reducer;
