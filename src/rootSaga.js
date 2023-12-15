import { all } from "redux-saga/effects";
import { watchFetchMovies, watchfetchMovieDetails } from "./features/MovieList/movieSaga";
import { watchFetchPeople } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(), 
    watchFetchPeople(),
    watchfetchMovieDetails(),
  ]);
}