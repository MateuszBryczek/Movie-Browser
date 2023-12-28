import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople, getPersonDetails, getMoviesForPerson } from "./getPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSucces,
  selectSearchPeopleValue,
  fetchPersonDetails,
  fetchPersonDetailsSucces,
  fetchPersonDetailsError,
  selectPersonId,
  fetchMoviesForPerson,
} from "./peopleSlice";

function* fetchPeopleHandler() {
  const searchValue = yield select(selectSearchPeopleValue);
  try {
    yield delay(2000);
    if (!searchValue) {
      const people = yield call(getPeople);
      yield put(fetchPeopleSucces(people));
    } else {
      const people = yield call(getSearchedPeople, searchValue);
      yield put(fetchPeopleSucces(people));
    }
  } catch (error) {
    yield put(fetchPeopleError(error));
  }
}

export function* fetchPersonDetailsHandler() {
  const personId = yield select(selectPersonId);
  try {
    yield delay(500);
    const personDetails = yield call(getPersonDetails, personId);
    yield put(fetchPersonDetailsSucces(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError(error));
  }
}
export function* fetchMoviesForPersonHandler() {
    const personId = yield select(selectPersonId);
    try {
      yield delay(500);
      const moviesForPerson = yield call(getMoviesForPerson, personId);
      yield put(fetchMoviesForPerson(moviesForPerson));
    } catch (error) {
      yield put(fetchPersonDetailsError(error));
    }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield takeLatest(fetchMoviesForPerson.type, fetchMoviesForPersonHandler);
}