import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeopleError,
  selectPeopleByQuery,
  selectSearchPeopleValue,
  selectPeopleIsLoading,
} from "./peopleSlice";
import PeopleCard from "./PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper } from "./styled";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";

const PeopleList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);

  const people = useSelector(state => selectPeopleByQuery(state, query));
  const error = useSelector(selectPeopleError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, searchValue]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <TilesWrapper>
          {error
            ? Array.from({ length: 24 }).map((_, index) => (
                <PeopleTile key={index}></PeopleTile>
              ))
            : people.map((people, index) => (
                <PeopleTile key={index}>
                  <PeopleCard {...people} />
                </PeopleTile>
              ))}
        </TilesWrapper>
      )}
    </>
  );
};

export default PeopleList;
