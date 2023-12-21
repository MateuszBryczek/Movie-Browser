import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeopleError,
  selectPeople,
  selectSearchPeopleValue,
  selectPeopleIsLoading,
} from "./peopleSlice";
import PeopleCard from "./PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper } from "./styled";
import IconSpiner from "../../common/IconSpinner";
import Pagination from "../../common/Pagination";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
import NoResults from "../../common/noResults";
import ErrorPage from "../../common/ErrorPage";

const PeopleList = () => {
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);
  const query = useQueryParameter(searchQueryParamName);

  const people = useSelector(selectPeople);
  const error = useSelector(selectPeopleError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, searchValue]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : isLoading ? (
          <>
            <Header>
              {searchValue ? `Search results for "${query}"` : "Popular people"}
            </Header>
            <IconSpiner />
          </>
        ) : people.total_results ? (
          <>
            <Header>
              {searchValue
                ? `Search results for "${query}" (${people.total_results})`
                : "Popular people"}
            </Header>
            <TilesWrapper>
              {people.results?.map((person) => (
                <PeopleTile key={person.id}>
                  <PeopleCard {...person} />
                </PeopleTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        ) : (
          <>
            <Header>{`Sorry, there are no results for "${query}"`}</Header>
            <NoResults />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
