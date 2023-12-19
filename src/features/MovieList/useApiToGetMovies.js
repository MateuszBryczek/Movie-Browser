import config from "../config";
import { popularMoviesURL } from "../config";
import { apiKey } from "../config";
import { basicUrl } from "../config";
import { selectPageState } from "../../common/Pagination/paginationSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

export const useApiToGetMovies = async () => {

  const { page } = useSelector(selectPageState);

  const { data } = await axios.get(`${popularMoviesURL}` + `${page}`);

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getSearchedMovies = async (searchValue) => {
  const { data } = await config.get(`search/movie?query=${searchValue}`);

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};
