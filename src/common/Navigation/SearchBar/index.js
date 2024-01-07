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
import { changeSearchMoviesValue, fetchMovies, updateMoviePage } from "../../../features/Slices/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { pageQueryParamName, searchQueryParamName } from "../../../features/queryParamName";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const page = useQueryParameter(pageQueryParamName)

  useEffect(() => {
    location.pathname === "/people"
      ? dispatch(changeSearchPeopleValue(query))
      : dispatch(changeSearchMoviesValue(query));
  }, [dispatch, location.pathname, query]);

  const onInputChange = ({ target }) => {

    replaceQueryParameter({ key: searchQueryParamName, value: target.value });
    if (location.pathname !== "/people" && location.pathname !== "/movie") {
      location.pathname.slice(0, 15) === "/people/details"
        ? history.push(`/people?query=${target.value}`)
        : history.push(`/movie?query=${target.value}`);
    }
  };

  return (
    <SearchWrapper>
      <SearchImg src={search} alt="" />
      <Search
        placeholder={
          location.pathname === "/people" ||
          location.pathname.slice(0, 15) === "/people/details"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
