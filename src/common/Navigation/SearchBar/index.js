import { Search, SearchWrapper, SearchImg } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import search from "./../../../images/search.svg";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../../features/queryParameter";
import { changeSearchPeopleValue } from "../../../features/PeopleList/peopleSlice";
import {
  changeSearchMoviesValue,
  fetchMovies,
} from "../../../features/MovieList/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import searchQueryParamName from "../../../features/searchQueryParamName";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/peoplelist"
      ? dispatch(changeSearchPeopleValue(query))
      : dispatch(changeSearchMoviesValue(query))
  }, [dispatch, location, query]);

  const oninputChange = ({ target }) => {
    replaceQueryParameter({ key: searchQueryParamName, value: target });
  };

  return (
    <SearchWrapper>
      <SearchImg src={search} alt="" />
      <Search
        placeholder={
          location.pathname === "/peoplelist"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={query || ""}
        onChange={oninputChange}
        disabled={location.pathname !== "/peoplelist" && location.pathname !== "/movielist" ? true : false}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
