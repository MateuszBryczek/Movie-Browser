import { Search, SearchWrapper, SearchImg } from "./styled";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import search from "./../../../images/search.svg";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../../features/queryParameter";
import { changeSearchPeopleValue } from "../../../features/Slices/peopleSlice";
import { changeSearchMoviesValue } from "../../../features/Slices/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import searchQueryParamName from "../../../features/searchQueryParamName";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    location.pathname === "/peoplelist"
      ? dispatch(changeSearchPeopleValue(query))
      : dispatch(changeSearchMoviesValue(query));
  }, [dispatch, location, query]);

  const oninputChange = ({ target }) => {
    replaceQueryParameter({ key: searchQueryParamName, value: target });
    if (
      location.pathname !== "/peoplelist" &&
      location.pathname !== "/movieList"
    ) {
      location.pathname.slice(0, 14) === "/personDetails"
        ? history.push(`/peoplelist?query=${target.value}`)
        : history.push(`/movieList?query=${target.value}`);
    }
  };

  return (
    <SearchWrapper>
      <SearchImg src={search} alt="" />
      <Search
        placeholder={
          location.pathname === "/peoplelist" ||
          location.pathname.slice(0, 14) === "/personDetails"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={query || ""}
        onChange={oninputChange}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
