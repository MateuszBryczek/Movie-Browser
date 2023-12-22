import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    error: false,
    searchPeopleValue: "",
    isLoading: false,
    peoplePage: 1,
    maxPages: 500,
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
    increment: (state) => {
      state.peoplePage = state.peoplePage + 1;
    },
    decrement: (state) => {
      state.peoplePage = state.peoplePage - 1;
    },
    goToLastPage: (state) => {
      state.peoplePage = state.maxPages;
    },
    goToFirstPage: (state) => {
      state.peoplePage = 1;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSucces,
  fetchPeopleError,
  changeSearchPeopleValue,
  increment,
  decrement,
  goToLastPage,
  goToFirstPage,
} = peopleSlice.actions;
const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeopleError = (state) => selectPeopleState(state).error;
export const selectSearchPeopleValue = (state) =>
  selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = (state) =>
  selectPeopleState(state).isLoading;
  export const selectPeoplePage = (state) => selectPeopleState(state).peoplePage;

export default peopleSlice.reducer;
