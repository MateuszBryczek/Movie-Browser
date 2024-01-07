import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { pageQueryParamName, searchQueryParamName } from "./queryParamName";

export const useQueryParameter = key => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value?.toString().trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
      if (key === searchQueryParamName) {
        searchParams.set(pageQueryParamName, 1);
      }
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return replaceQueryParameter;
};
