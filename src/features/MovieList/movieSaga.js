import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  selectSearchMoviesValue,
  fetchMovieDetails,
  fetchMovieDetailsSucces,
  fetchMovieDetailsError,
  fetchPeopleForMovie,
  selectMovieId,
} from "./movieSlice";
import {
  getMoviesDetails,
  getMovies,
  getSearchedMovies,
  getPeopleForMovie,
} from "./getMovies";

export function* fetchMoviesHandler() {
  const searchValue = yield select(selectSearchMoviesValue);
  try {
    yield delay(2000);
    if (!searchValue) {
      const movie = yield call(getMovies);
      yield put(fetchMoviesSucces(movie));
    } else {
      const movie = yield call(getSearchedMovies, searchValue);
      yield put(fetchMoviesSucces(movie));
    }
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* fetchMovieDetailsHandler() {
  const movieId = yield select(selectMovieId);
  try {
    yield delay(500);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(fetchMovieDetailsSucces(movieDetails, movieId));
  } catch (error) {
    yield put(fetchMovieDetailsError(error));
  }
}

export function* fetchPeopleForMovieHandler() {
  const movieId = yield select(selectMovieId);
  try {
    yield delay(500);
    const peopleForMovie = yield call(getPeopleForMovie, movieId);
    yield put(fetchPeopleForMovie(peopleForMovie));
  } catch (error) {
    yield put(fetchMovieDetailsError(error));
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchPeopleForMovieHandler);
}