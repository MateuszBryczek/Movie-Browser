import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: [],
    error: false,
    searchMoviesValue: "",
    isLoading: false,
  },
  reducers: {
    fetchMovies: state => {
      state.isLoading = true;
    },
    fetchMoviesSucces: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.isLoading = false;
    },
    fetchMoviesError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
    changeSearchMoviesValue: (state, { payload: searchMoviesValue }) => {
      state.isLoading = true;
      state.searchMoviesValue = searchMoviesValue;
    },
    fetchMovieDetails: state => {
      state.isLoading = true;
    },
    fetchMovieDetailsSucces: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.isLoading = false;
    },
    fetchMovieDetailsError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  changeSearchMoviesValue,
  fetchMovieDetails,
  fetchMovieDetailsSucces,
  fetchMovieDetailsError,
} = movieSlice.actions;
const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesError = state => selectMoviesState(state).error;
export const selectSearchMoviesValue = state => selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = state => selectMoviesState(state).isLoading;
export default movieSlice.reducer;