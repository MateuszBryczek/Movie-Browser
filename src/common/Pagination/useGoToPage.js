import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { buildQueryString } from "../buildQueryString";

export const useGoToPage = () => {
  const location = useLocation();
  const history = useHistory();

  return (page) => {
    history.push({
      pathname: location.pathname,
      search: buildQueryString(
        { page: page === 1 ? undefined : page },
        location.search
      ),
    });
  };
};
