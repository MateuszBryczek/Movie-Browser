import { Search, SearchWrapper, SearchImg } from "./styled";
import search from "./../../../images/search.svg";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../../features/queryParameter";

const SearchBar = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter("query");

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
