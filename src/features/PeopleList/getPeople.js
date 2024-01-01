import config from "../config";

export const getPeople = async (peoplePage) => {
  const { data } = await config.get(`person/popular?page=${peoplePage}`);
  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getSearchedPeople = async (searchValue, peoplePage) => {
  const { data } = await config.get(
      `search/person?query=${searchValue}&page=${peoplePage}`
  );

  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getPersonDetails = async (personId) => {
  try {
    const { data } = await config.get(`person/${personId}`);
    return { ...data };
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const  getMoviesForPerson = async (personId) => {
try {
  const { data } = await config.get(`person/${personId}/movie_credits`);
  return { ...data };
} catch (error) {
  throw new Error(error.response.statusText);
}
};
