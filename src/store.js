import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MovieList/movieSlice";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchMovies } from "./features/MovieList/movieSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchMovies);

export default store;
