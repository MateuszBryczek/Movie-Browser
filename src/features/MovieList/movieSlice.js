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
    moviePage: 1,
    total_pages: 1,
  },
  reducers: {
    fetchMovies: (state) => {
      state.isLoading = true;
    },
    fetchMoviesSucces: (state, { payload: movies }) => {
      state.movies = movies;
      state.isLoading = false;
    },
    fetchTotalPages: (state, { payload: total_pages }) => {
      state.movies.total_pages = total_pages;
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
      state.moviePage = 1;
    },
    fetchMovieDetails: (state) => {
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
      state.moviePage = 1;
    },
    nextMoviePage: (state) => {
      state.moviePage = state.moviePage + 1;
    },
    previousMoviePage: (state) => {
      state.moviePage = state.moviePage - 1;
    },
    goToLastMoviePage: (state) => {
      state.moviePage =
        state.movies.total_pages > 500 ? 500 : state.movies.total_pages;
    },
    goToFirstMoviePage: (state) => {
      state.moviePage = 1;
    },
  },
  
});

export const {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  changeSearchMoviesValue,
  nextMoviePage,
  previousMoviePage,
  goToFirstMoviePage,
  goToLastMoviePage,
  setMaxMoviePages,
  setTotalPages,
  fetchMovieDetails,
  fetchMovieDetailsSucces,
  fetchMovieDetailsError,
  fetchPeopleForMovie,
  updateMovieId,
} = movieSlice.actions;
const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectTotalPages = (state) => selectMovies(state).total_pages;
export const selectMoviesError = (state) => selectMoviesState(state).error;
export const selectSearchMoviesValue = (state) =>
  selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = (state) =>
  selectMoviesState(state).isLoading;
export const selectMoviePage = (state) => selectMoviesState(state).moviePage;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectMovieId = (state) => selectMoviesState(state).movieId;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCast = (state) => selectMoviesState(state).cast;

export default movieSlice.reducer;
