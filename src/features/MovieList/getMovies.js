import config from "../config";

export const getMovies = async () => {
  const { data } = await config.get("movie/popular");

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};
