import config from "../config";

export const getPeople = async () => {
    const { data } = await config.get("person/popular");

        if (!data.ok) {
            new Error(data.statusText);
        }

    return await {...data};
};

export const getSearchedPeople = async searchValue => {
    const { data } = await config.get(`search/person?query=${searchValue}`);
  
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