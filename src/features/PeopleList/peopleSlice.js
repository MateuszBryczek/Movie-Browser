import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        error: false,
    },
    reducers: {
        fetchPeople: () => {},
            fetchPeopleSucces: (state, { payload: people }) => {
                state.people = people.results.slice(0, 24);
            },
            fetchPeopleError: (state, { payload: error }) => {
                state.error = true;
                console.error(error);
        },
    },
});

export const { fetchPeople, fetchPeopleSucces, fetchPeopleError } = peopleSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectError = state => selectPeopleState(state).error;
export default peopleSlice.reducer;