import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    error: false,
  },
  reducers: {
    fetchMovies: () => {},
    fetchMoviesSucces: (state, { payload: movies }) => {
      state.movies = movies.results.slice(0, 8);
    },
    fetchMoviesError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
  },
});


export const { fetchMovies, fetchMoviesSucces, fetchMoviesError } =
  movieSlice.actions;
const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectError = state => selectMoviesState(state).error;
export default movieSlice.reducer;

export const selectMovieByQuery = (state, query) => {
  const movies = selectMovies(state);

  if (!query || query.trim() === "") {
    return movies;
  }

  return movies.filter(({ original_title }) =>
    original_title.toUpperCase().includes(query.trim().toUpperCase())
  );
};
