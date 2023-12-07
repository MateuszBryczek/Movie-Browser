import config from "../../config";

export const getGenre = async () => {
    const { data } = await config.get("genre/movie/list");
  
    if (!data.ok) {
      new Error(data.statusText);
    }
  
    return await { ...data };
  };