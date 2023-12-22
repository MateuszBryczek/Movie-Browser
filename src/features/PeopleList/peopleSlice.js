import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    error: false,
    searchPeopleValue: "",
    isLoading: false,
    page: 1,
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
    nextPeoplePage: (state) => {
      state.page = state.page + 1;
    },
    previousPeoplePage: (state) => {
      state.page = state.page - 1;
    },
    goToLastPeoplePage: (state) => {
      state.page = state.maxPages;
    },
    goToFirstPeoplePage: (state) => {
      state.page = 1;
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
export const selectPeopleError = (state) => selectPeopleState(state).error;
export const selectSearchPeopleValue = (state) =>
  selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = (state) =>
  selectPeopleState(state).isLoading;
export const selectPeoplepage = (state) => selectPeopleState(state).page;

export default peopleSlice.reducer;
