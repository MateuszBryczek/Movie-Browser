import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    error: false,
    searchPeopleValue: "",
    isLoading: false,
    peoplePage: 1,
    total_pages: 1,
  },
  reducers: {
    fetchPeople: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    fetchPeopleSucces: (state, { payload: people }) => {
      state.people = people;
      state.isLoading = false;
    },
    fetchPeopleError: (state, { payload: error }) => {
      state.error = true;
      state.isLoading = false;
      console.error(error);
    },
    changeSearchPeopleValue: (state, { payload: searchPeopleValue }) => {
      state.isLoading = true;
      state.searchPeopleValue = searchPeopleValue;
    },
    nextPeoplePage: (state) => {
      state.peoplePage = state.peoplePage + 1;
    },
    previousPeoplePage: (state) => {
      state.peoplePage = state.peoplePage - 1;
    },
    goToLastPeoplePage: (state) => {
      state.peoplePage = state.people.total_pages;
    },
    goToFirstPeoplePage: (state) => {
      state.peoplePage = 1;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSucces,
  fetchPeopleError,
  changeSearchPeopleValue,
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  goToLastPeoplePage,
} = peopleSlice.actions;
const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectTotalPeoplePages = (state) =>
  selectPeople(state).total_pages;
export const selectPeopleError = (state) => selectPeopleState(state).error;
export const selectSearchPeopleValue = (state) =>
  selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = (state) =>
  selectPeopleState(state).isLoading;
export const selectPeoplePage = (state) => selectPeopleState(state).peoplePage;

export default peopleSlice.reducer;
