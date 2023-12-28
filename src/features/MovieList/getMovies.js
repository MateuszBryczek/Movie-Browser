import config from "../config";
import { popularMoviesURL } from "../config";
import { apiKey } from "../config";
import { basicUrl } from "../config";
import axios from "axios";

export const getMovies = async (moviePage) => {
  const { data } = await axios.get(`${popularMoviesURL}` + `${moviePage}`);

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getSearchedMovies = async (searchValue, moviePage) => {
  const { data } = await config.get(
    `search/movie?query=${searchValue}&page=${moviePage}`
  );

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};
