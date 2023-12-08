import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    error: false,
    searchValue: "",
    isLoading: false,
  },
  reducers: {
    fetchPeople: (state) => {
      state.isLoading = true;
    },
    fetchPeopleSucces: (state, { payload: people }) => {
      state.people = people.results.slice(0, 24);
      state.isLoading = false;
    },
    fetchPeopleError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
    changeSearchPeopleValue: (state, { payload: searchValue }) => {
      state.isLoading = true;
      state.searchValue = searchValue;
    },
  },
});

export const { fetchPeople, fetchPeopleSucces, fetchPeopleError, changeSearchPeopleValue } =
  peopleSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectError = state => selectPeopleState(state).error;
export const selectSearchValue = state => selectPeopleState(state).searchValue;
export const selectIsLoading = state => selectPeopleState(state).isLoading;
export default peopleSlice.reducer;

export const selectPeopleByQuery = (state, query) => {
  const people = selectPeople(state);

  if (!query || query.trim() === "") {
    return people;
  }

  return people.filter(({ name }) =>
    name.toUpperCase().includes(query.trim().toUpperCase())
  );
};
