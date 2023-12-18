import { takeLatest, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople } from "./getPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSucces,
  selectSearchPeopleValue,
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

export function* watchFetchPeople() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
