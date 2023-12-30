import { popularPeopleURL } from "../config";
import axios from "axios";
import { apiKey } from "../config";
import { basicUrl } from "../config";
import config from "../config";

export const getPeople = async (peoplePage) => {
  const { data } = await axios.get(`${popularPeopleURL}` + `${peoplePage}`);
  if (!data.ok) {
    new Error(data.statusText);
  }

  return await { ...data };
};

export const getSearchedPeople = async (searchValue, peoplePage) => {
  const { data } = await axios.get(
    `${basicUrl}` +
      `search/person?query=${searchValue}&page=${peoplePage}` +
      `&api_key=${apiKey}`
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
