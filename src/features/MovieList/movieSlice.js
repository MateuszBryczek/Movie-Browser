import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    error: false,
    searchMoviesValue: "",
    isLoading: false,
    page: 1,
    maxPages: 500,
  },
  reducers: {
    fetchMovies: (state) => {
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
      state.page = 1;
    },
    nextMoviePage: (state) => {
      state.page = state.page + 1;
    },
    previousMoviePage: (state) => {
      state.page = state.page - 1;
    },
    goToLastMoviePage: (state) => {
      state.page = state.maxPages;
    },
    goToFirstMoviePage: (state) => {
      state.page = 1;
    },
    setMaxMoviePages: (state, { payload: maxPages }) => {
      if (state.maxPages !== maxPages) {
        state.page = 1;
      }
      state.maxPages = maxPages;
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
  setMaxMoviePages
} = movieSlice.actions;
const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesError = (state) => selectMoviesState(state).error;
export const selectSearchMoviesValue = (state) =>
  selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = (state) =>
  selectMoviesState(state).isLoading;
export const selectMoviePage = (state) => selectMoviesState(state).page;
export const selectMaxMoviePages = (state) => selectMoviesState(state).maxPages;
export default movieSlice.reducer;
