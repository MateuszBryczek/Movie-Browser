import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: [],
    error: false,
    searchMoviesValue: "",
    isLoading: true,
    cast: [],
    crew: [],
    movieId: false,
  },
  reducers: {
    fetchMovies: state => {
      state.isLoading = true;
    },
    fetchMoviesSucces: (state, { payload: movies }) => {
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
    fetchPeopleForMovie: (state, { payload: peopleForMovie }) => {
      state.cast = peopleForMovie.cast;
      state.crew = peopleForMovie.crew;
      state.isLoading = true;
    },
    updateMovieId: (state, { payload: id }) => {
      state.movieId = id;
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
  fetchPeopleForMovie,
  updateMovieId,
} = movieSlice.actions;
const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectMoviesError = state => selectMoviesState(state).error;
export const selectSearchMoviesValue = state =>
  selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = state =>
  selectMoviesState(state).isLoading;
export const selectMovieDetails = state =>
  selectMoviesState(state).movieDetails;
export const selectMovieId = state => selectMoviesState(state).movieId;
export const selectCrew = state => selectMoviesState(state).crew;
export const selectCast = state => selectMoviesState(state).cast;

export default movieSlice.reducer;