import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeople,
  selectError,
  selectPeopleByQuery,
} from "./peopleSlice";
import PeopleCard from "./PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper } from "./styled";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";

const PeopleList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const people = useSelector(state => selectPeopleByQuery(state, query));
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};

export default PeopleList;
