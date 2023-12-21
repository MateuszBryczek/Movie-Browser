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
} from "./movieSlice";
import { getMoviesDetails, getMovies, getSearchedMovies, getPeopleForMovie } from "./getMovies";

export function* fetchMoviesHandler({ payload: movieId }) {
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

export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield delay(500);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(fetchMovieDetailsSucces(movieDetails));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
};

export function* fetchPeopleForMovieHandler({ payload: movieId }) {
  try {
    yield delay(500);
    const peopleForMovie = yield call(getPeopleForMovie, movieId);
    console.log("People For Movie:", peopleForMovie);
    yield put(fetchPeopleForMovie(peopleForMovie));
  } catch (error) {
    yield put(fetchMoviesError(error))
  }
};

export function* movieSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchPeopleForMovieHandler);
};