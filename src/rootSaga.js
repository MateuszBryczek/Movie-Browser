import { all } from "redux-saga/effects";
import { movieSaga } from "./features/MovieList/movieSaga";
import { watchFetchPeople, watchFetchPersonDetails } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    watchFetchPeople(),
    watchFetchPersonDetails(),
  ]);
}