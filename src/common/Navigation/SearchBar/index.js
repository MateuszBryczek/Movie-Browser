import { Search, SearchWrapper, SearchImg } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import search from "./../../../images/search.svg";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../../features/queryParameter";
import { changeSearchValue } from "../../../features/MovieList/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter("query");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(changeSearchValue(query));
  }, [dispatch, location, query]);

  const oninputChange = ({ target }) => {
    replaceQueryParameter({ key: "query", value: target });
  };

  return (
    <SearchWrapper>
      <SearchImg src={search} alt="" />
      <Search
        placeholder="Search for movies..."
        value={query || ""}
        onChange={oninputChange}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
