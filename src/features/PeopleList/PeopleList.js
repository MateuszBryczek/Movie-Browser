import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeopleError,
  selectPeople,
  selectSearchPeopleValue,
  selectPeopleIsLoading,
  selectPeoplePage,
} from "../Slices/peopleSlice";
import PeopleCard from "./PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper, PeopleHeader } from "./styled";
import IconSpiner from "../../common/IconSpinner";
import Pagination from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useQueryParameter } from "../queryParameter";
import { searchQueryParamName } from "../queryParamName";
import NoResults from "../../common/noResults";
import ErrorPage from "../../common/ErrorPage";

const PeopleList = () => {
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);
  const query = useQueryParameter(searchQueryParamName);
  const people = useSelector(selectPeople);
  const error = useSelector(selectPeopleError);
  const peoplePage = useSelector(selectPeoplePage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, searchValue, peoplePage]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : isLoading ? (
          <>
            <PeopleHeader>
              {searchValue ? `Search results for "${query}"` : "Popular people"}
            </PeopleHeader>
            <IconSpiner />
          </>
        ) : people.total_results ? (
          <>
            <PeopleHeader>
              {searchValue
                ? `Search results for "${query}" (${people.total_results})`
                : "Popular people"}
            </PeopleHeader>
            <TilesWrapper>
              {people.results?.map(person => (
                <PeopleTile key={person.id}>
                  <PeopleCard {...person} />
                </PeopleTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        ) : (
          <>
            <PeopleHeader>{`Sorry, there are no results for "${query}"`}</PeopleHeader>
            <NoResults />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
