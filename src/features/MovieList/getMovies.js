import config from "../config";

export const getMovies = async () => {
  const { data } = await config.get("movie/popular");

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

export const getMovieDetails = async (movieId) => {
    const { data } = await config.get(`movie/${movieId}`);
    
    if (!data.ok) {
      throw new Error(data.statusText);
    }
  
    return await { ...data };
  };