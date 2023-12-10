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

const PeopleList = () => {
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);
  const query = useQueryParameter(searchQueryParamName)

  const people = useSelector(selectPeople);
  const error = useSelector(selectPeopleError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, searchValue]);

  return (
    <>
      <Container>
      <Header>
          {searchValue
            ? `Search results for "${query}" ${
                isLoading ? "" : `(${people.total_results})`
              }`
            : "Popular people"}
        </Header>
        {isLoading ? (
          <IconSpiner />
        ) : (
          <>
            <TilesWrapper>
              {people.results?.map((people, index) => (
                <PeopleTile key={index}>
                  <PeopleCard {...people} />
                </PeopleTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleList;
