import { takeEvery, call, put } from "@redux-saga/core/effects";
import { getPeople } from "./getPeople";
import {
    fetchPeople,
    fetchPeopleError,
    fetchPeopleSucces,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload: peopleId }) {
    try {
        const people = yield call( getPeople, peopleId );
            yield put( fetchPeopleSucces(people) );
        } catch (error) {
            yield put( fetchPeopleError(error) );
        }
    };

export function* watchFetchPeople() {
    yield takeEvery(fetchPeople.type, fetchPeopleHandler);
};