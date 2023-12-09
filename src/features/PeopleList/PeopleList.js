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
        <IconSpiner />
      ) : (
        <TilesWrapper>
          {people.map((people, index) => (
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
