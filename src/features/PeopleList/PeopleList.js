import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeopleError,
  selectPeople,
  selectSearchPeopleValue,
  selectPeopleIsLoading,
  updatePeoplePage,
  selectTotalPeoplePages,
} from "../Slices/peopleSlice";
import PeopleCard from "./PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper, PeopleHeader } from "./styled";
import IconSpiner from "../../common/IconSpinner";
import Pagination from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameter";
import { pageQueryParamName, searchQueryParamName } from "../queryParamName";
import NoResults from "../../common/noResults";
import ErrorPage from "../../common/ErrorPage";

const PeopleList = () => {
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);
  const query = useQueryParameter(searchQueryParamName);
  const people = useSelector(selectPeople);
  const error = useSelector(selectPeopleError);
  const dispatch = useDispatch();
  const replaceQueryParameter = useReplaceQueryParameter();

  const page = useQueryParameter(pageQueryParamName);
  const totalPages = useSelector(selectTotalPeoplePages);

  useEffect(() => {
    dispatch(updatePeoplePage(page));

    replaceQueryParameter({
      key: pageQueryParamName,
      value: page > totalPages || page < 1 ? 1 : page,
    });

    dispatch(fetchPeople());
  }, [dispatch, searchValue, page, totalPages]);

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
