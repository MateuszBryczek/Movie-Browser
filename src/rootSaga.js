import { all } from "redux-saga/effects";
import { movieSaga } from "./features/Sagas/movieSaga";
import { peopleSaga } from "./features/Sagas/peopleSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
  ]);
}