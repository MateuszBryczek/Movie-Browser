import config from "../config";

export const getMoviesDetails = async (movieId) => {
    const { data } = await config.get("movie/"+`${movieId}`);
  
    if (!data.ok) {
      new Error(data.statusText);
    }
  
    return await { ...data };
  };