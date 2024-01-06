import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const createSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetchError: () => ({
        status: "error",
      }),
      fetchSuccess: (state, { payload: { data, pagination } }) => {
        state.status = "success";
        state.data = data;
        state.pagination = pagination;
      },
      fetch: (_, { payload: { query } }) => ({
        status: "loading",
        query,
      }),
      clear: () => initialState,
    },
  });
  const selectResults = (state) => state[name].data;

  //u typa jest results a nie data,
  //a tu chyba powinno byc data, bo w axios to sie nazywa results.data

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectResults,
      selectStatus: (state) => state[name].status,
      selectQuery: (state) => state[name].query,
      selectPagination: (state) => state[name].pagination,
      selectResultsEmpty: (state) => selectResults(state)?.lenght === 0,
    },
  };
};
