import { createSlice } from "@reduxjs/toolkit";

//total_pages jest w wyniku get 

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    error: false,
    searchMoviesValue: "",
    isLoading: false,
    moviePage: 1,
    maxPages: 500,
    data: [],
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
      state.moviePage = 1;
    },
    nextMoviePage: (state) => {
      state.moviePage = state.moviePage + 1;
    },
    previousMoviePage: (state) => {
      state.moviePage = state.moviePage - 1;
    },
    goToLastMoviePage: (state) => {
      state.moviePage = state.maxPages;
    },
    goToFirstMoviePage: (state) => {
      state.moviePage = 1;
    },
    setMaxMoviePages: (state, { payload: maxPages }) => {
      if (state.maxPages !== maxPages) {
        state.moviePage = 1;
      }
      state.maxPages = maxPages;
    },
    setTotalPages: (state, {payload:data})=>{
      state.data = data;
    }
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
} = movieSlice.actions;
const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesError = (state) => selectMoviesState(state).error;
export const selectSearchMoviesValue = (state) =>
  selectMoviesState(state).searchMoviesValue;
export const selectMoviesIsLoading = (state) =>
  selectMoviesState(state).isLoading;
export const selectMoviePage = (state) => selectMoviesState(state).moviePage;
export const selectMaxMoviePages = (state) => selectMoviesState(state).maxPages;
export const selectDataForTotalMoviePages = (state)=>selectMoviesState(state).data;
export default movieSlice.reducer;
