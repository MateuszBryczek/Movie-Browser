import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import {
  fetchMovies,
  fetchMoviesSucces,
  fetchMoviesError,
  selectSearchMoviesValue,
  selectMoviePage,
  setMaxMoviePages,
} from "./movieSlice";
import { getMovies, getSearchedMovies } from "./getMovies";

function* fetchMoviesHandler({ payload: movieId }) {
  const searchValue = yield select(selectSearchMoviesValue);
  const page = yield select(selectMoviePage);
  try {
    yield delay(2000);
    if (!searchValue) {
      const movie = yield call(getMovies, page, movieId);
      yield put(fetchMoviesSucces(movie));
    } else {
      const movie = yield call(
        getSearchedMovies,
        searchValue,
        page,
        movieId
      );
      yield put(fetchMoviesSucces(movie));
    }
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
