import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movies: [],
    error: false,
    isLoading: false,
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.isLoading = true;
    },
    fetchMovieDetailsSuccess: (state, { payload }) => {
      state.movies = payload;
      state.isLoading = false;
      state.error = false;
    },
    fetchMovieDetailsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = true;
      console.error(payload);
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetails = (state) => state.movieDetails.movies;
export const selectIsLoading = (state) => state.movieDetails.isLoading;
export const selectError = (state) => state.movieDetails.error;

export default movieDetailsSlice.reducer;