import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  selectSearchMoviesValue,
  selectMoviePage,
  fetchMovieDetails,
  fetchMovieDetailsSucces,
  fetchMovieDetailsError,
  fetchPeopleForMovie,
  selectMovieId,
} from "../Slices/movieSlice";
import {
  getMoviesDetails,
  getMovies,
  getSearchedMovies,
  getPeopleForMovie,
} from "../getAPI/getMovies";

export function* fetchMoviesHandler() {
  const searchValue = yield select(selectSearchMoviesValue);
  const page = yield select(selectMoviePage);
  try {
    yield delay(1000);
    if (!searchValue) {
      const movie = yield call(getMovies, page);
      yield put(fetchMoviesSucces(movie));
    } else {
      const movie = yield call(
        getSearchedMovies,
        searchValue,
        page,
      
      );
      yield put(fetchMoviesSucces(movie));
    }
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* fetchMovieDetailsHandler() {
  const movieId = yield select(selectMovieId);
  try {
    yield delay(1000);
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