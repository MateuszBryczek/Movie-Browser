import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "page",
  initialState: {
    page: 1,
    currentPage: 1,
  },
  reducers: {
    increment: (state) => {
      state.page += 1;
      state.currentPage = state.page;
    },
    decrement: (state) => {
      state.page -= 1;
      state.currentPage = state.page;
    },
    goToLastPage: (state, {}) => {
      state.page = 100;
      state.currentPage = state.page;
    },
    goToFirstPage: (state, {}) => {
      state.page = 1;
      state.currentPage = state.page;
    },
  },
});

export const { increment, decrement, goToFirstPage, goToLastPage } =
  paginationSlice.actions;

export const selectPageState = (state) => state.page;
export const selectPage = (state) => selectPageState(state).page;

export default paginationSlice.reducer;