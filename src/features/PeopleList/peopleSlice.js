import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    personDetails: [],
    error: false,
    searchPeopleValue: "",
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
    changeSearchPeopleValue: (state, { payload: searchPeopleValue }) => {
      state.isLoading = true;
      state.searchPeopleValue = searchPeopleValue;
    },
    fetchPersonDetails: (state) => {
      state.isLoading = true;
    },
    fetchPersonDetailsSucces: (state, { payload: personDetails }) => {
      state.personDetails = personDetails;
      state.isLoading = false;
    },
    fetchPersonDetailsError: (state, { payload: error }) => {
      state.error = true;
      console.error(error);
    },
  },
});

export const { 
  fetchPeople,
   fetchPeopleSucces, 
   fetchPeopleError, 
   changeSearchPeopleValue,
   fetchPersonDetails,
   fetchPersonDetailsSucces,
   fetchPersonDetailsError,
  } = peopleSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleError = state => selectPeopleState(state).error;
export const selectSearchPeopleValue = state => selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = state => selectPeopleState(state).isLoading;
export const selectPersonDetails = (state) => state.people;
export const selectPersonById = (state, id) => selectPeopleState(state).people.find(person => person.id.toString() === id.toString());
export default peopleSlice.reducer;