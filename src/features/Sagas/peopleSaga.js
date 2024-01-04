import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople, getPersonDetails, getMoviesForPerson } from "../getAPI/getPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSucces,
  selectSearchPeopleValue,
  selectPeoplePage,
  fetchPersonDetails,
  fetchPersonDetailsSucces,
  fetchPersonDetailsError,
  selectPersonId,
  fetchMoviesForPerson,
} from "../Slices/peopleSlice";

function* fetchPeopleHandler() {
  const searchValue = yield select(selectSearchPeopleValue);
  const peoplePage = yield select(selectPeoplePage);
  try {
    yield delay(1000);
    if (!searchValue) {
      const people = yield call(getPeople, peoplePage);
      yield put(fetchPeopleSucces(people));
    } else {
      const people = yield call(getSearchedPeople, searchValue, peoplePage);
      yield put(fetchPeopleSucces(people));
    }
  } catch (error) {
    yield put(fetchPeopleError(error));
  }
}

export function* fetchPersonDetailsHandler() {
  const personId = yield select(selectPersonId);
  try {
    yield delay(1000);
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
  yield takeLatest(fetchPersonDetails.type, fetchMoviesForPersonHandler);
}