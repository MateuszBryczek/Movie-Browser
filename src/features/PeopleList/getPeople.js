import config from "../config";
import { popularPeopleURL } from "../config";
import axios from "axios";

export const getPeople = async (peoplePage) => {
  const { data } = await axios.get(`${popularPeopleURL}` + `${peoplePage}`);
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
