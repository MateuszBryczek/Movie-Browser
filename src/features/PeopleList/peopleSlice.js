import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    error: false,
    searchPeopleValue: "",
    isLoading: false,
  },
  reducers: {
    fetchPeople: (state) => {
      state.isLoading = true;
    },
    fetchPeopleSucces: (state, { payload: people }) => {
      state.people = people;
      state.isLoading = false;
    },
    fetchPeopleError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
    changeSearchPeopleValue: (state, { payload: searchPeopleValue }) => {
      state.isLoading = true;
      state.searchPeopleValue = searchPeopleValue;
    },
  },
});

export const { fetchPeople, fetchPeopleSucces, fetchPeopleError, changeSearchPeopleValue } =
  peopleSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleError = state => selectPeopleState(state).error;
export const selectSearchPeopleValue = state => selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = state => selectPeopleState(state).isLoading;
export default peopleSlice.reducer;