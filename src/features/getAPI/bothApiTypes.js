import axios from "axios";

import { buildQueryString } from "../../common/buildQueryString";
const apiKey = "5436c11ec3f3706d8f349dbc68c7265e";
const basicUrl = "https://api.themoviedb.org/3/";

export const fetchFromAPI = async ({ path, parameters }) => {
  const defaultParameters = {
    api_key: apiKey,
  };

  const allParameters = {
    ...defaultParameters,
    ...(parameters || {}),
  };
  const { data } = await axios.get(
    `${basicUrl}${path}?${buildQueryString(allParameters)}`
  );

  if (!Response.ok) {
    new Error(data.statusText);
  }
  return await { ...data };
};
