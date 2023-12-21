import { takeEvery, takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople, getPersonDetails } from "./getPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSucces,
  selectSearchPeopleValue,
  fetchPersonDetails,
  fetchPersonDetailsSucces,
  fetchPersonDetailsError,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload: peopleId }) {
  const searchValue = yield select(selectSearchPeopleValue);
  try {
    yield delay(2000);
    if (!searchValue) {
      const people = yield call(getPeople, peopleId);
      yield put(fetchPeopleSucces(people));
    } else {
      const people = yield call(getSearchedPeople, searchValue, peopleId);
      yield put(fetchPeopleSucces(people));
    }
  } catch (error) {
    yield put(fetchPeopleError(error));
  }
}

function* fetchPersonDetailsHandler({ payload: personId }) {
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