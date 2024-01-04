import config from "./config";
// import axios from "axios";
// import { apiKey } from "../../config";
// import { basicUrl } from "../../config";
//it's to set after merging with working genras search
export const getGenre = async () => {
  const { data } = await config.get("genre/movie/list");

  if (!data.ok) {
    new Error(data.statusText);
  }
  return await { ...data };
};
