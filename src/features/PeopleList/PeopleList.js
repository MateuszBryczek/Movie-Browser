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

const PeopleList = () => {
  const searchValue = useSelector(selectSearchPeopleValue);
  const isLoading = useSelector(selectPeopleIsLoading);

  const people = useSelector(selectPeople);
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
