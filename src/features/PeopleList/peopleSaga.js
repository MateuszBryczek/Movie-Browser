import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople, getPersonDetails } from "./getPeople";
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
} from "./peopleSlice";

function* fetchPeopleHandler() {
  const searchValue = yield select(selectSearchPeopleValue);
  const peoplePage = yield select(selectPeoplePage);
  try {
    yield delay(2000);
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

function* fetchPersonDetailsHandler() {
  const personId = yield select(selectPersonId);
  try {
    yield delay(500);
    const personDetails = yield call(getPersonDetails, personId);
    yield put(fetchPersonDetailsSucces(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError(error));
  }
};

export function* watchFetchPeople() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};
export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
};