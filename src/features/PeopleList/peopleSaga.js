import { takeEvery, call, put, select, delay } from "@redux-saga/core/effects";
import { getPeople, getSearchedPeople } from "./getPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSucces,
  selectSearchPeopleValue,
  selectPeoplePage,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload: peopleId }) {
  const searchValue = yield select(selectSearchPeopleValue);
  const peoplePage = yield select(selectPeoplePage);
  try {
    yield delay(2000);
    if (!searchValue) {
      const people = yield call(getPeople, peoplePage, peopleId);
      yield put(fetchPeopleSucces(people));
    } else {
      const people = yield call(getSearchedPeople, searchValue,peoplePage, peopleId );
      yield put(fetchPeopleSucces(people));
    }
  } catch (error) {
    yield put(fetchPeopleError(error));
  }
}

export function* watchFetchPeople() {
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
}
