import config from "../config";
import { buildQueryString } from "../../common/buildQueryString";

const popularMoviePath = `movie/popular?`
//użyć buildQueryString({page:${pageskadpowinnabyc}}) 
//wywalić page=ze sklejanki


export const getMovies = async moviePage => {
  const { data } = await config.get(`${popularMoviePath}page=${moviePage}`);
  if (!data.ok) {
    new Error(data.statusText);
  }
  return await { ...data };
};

//https://api.themoviedb.org/3/search/movie?query=troll&page=1&api_key=5436c11ec3f3706d8f349dbc68c7265e
export const getSearchedMovies = async (searchValue, moviePage) => {
  const { data } = await config.get(
    `search/movie?query=${searchValue}&page=${moviePage}`
  );

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getMoviesDetails = async movieId => {
  try {
    const { data } = await config.get(`movie/${movieId}`);
    return { ...data };
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const getPeopleForMovie = async movieId => {
  try {
    const { data } = await config.get(`movie/${movieId}/credits`);
    return { ...data };
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};
