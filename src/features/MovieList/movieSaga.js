import { takeEvery, call, put } from "@redux-saga/core/effects";
import { fetchMovies, fetchMoviesSucces, fetchMoviesError } from "./movieSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler({ payload: movieId }) {
  try {
    const movie = yield call(getMovies, movieId);
    yield put(fetchMoviesSucces(movie));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* watchFetchMovies() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
