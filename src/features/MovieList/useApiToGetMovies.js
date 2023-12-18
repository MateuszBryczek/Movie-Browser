import config from "../config";
import { popularMoviesURL } from "../config";
import { apiKey } from "../config";
import { basicUrl } from "../config";
import {page} from "../../common/Pagination/index";
import axios from "axios";
// const popularMovieUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5436c11ec3f3706d8f349dbc68c7265e&page=`;
export const useApiToGetMovies = async () => {


  const { data } = await axios.get(`${popularMoviesURL}`+`&page=1`);

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getSearchedMovies = async searchValue => {
  const { data } = await config.get(`search/movie?query=${searchValue}`);

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};
