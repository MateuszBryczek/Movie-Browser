import { all } from "redux-saga/effects";
import { watchFetchMovies, watchFetchMovieDetails } from "./features/MovieList/movieSaga";
import { watchFetchPeople, watchFetchPersonDetails } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieDetails(),
    watchFetchPeople(),
    watchFetchPersonDetails(),
  ]);
}