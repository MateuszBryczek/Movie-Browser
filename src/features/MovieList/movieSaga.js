import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  selectSearchMoviesValue,
  fetchMovieDetails,
  fetchMovieDetailsSucces,
  fetchMovieDetailsError,
} from "./movieSlice";
import { getMovieDetails, getMovies, getSearchedMovies } from "./getMovies";

function* fetchMoviesHandler({ payload: movieId }) {
  const searchValue = yield select(selectSearchMoviesValue);
  try {
    yield delay(2000);
    if (!searchValue) {
      const movie = yield call(getMovies, movieId);
      yield put(fetchMoviesSucces(movie));
    } else {
      const movie = yield call(getSearchedMovies, searchValue, movieId);
      yield put(fetchMoviesSucces(movie));
    }
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield delay(500);
    const movieDetails = yield call(getMovieDetails, movieId);
    yield put(fetchMovieDetailsSucces(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError(error));
  }
};

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};

export function* watchfetchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler)
};