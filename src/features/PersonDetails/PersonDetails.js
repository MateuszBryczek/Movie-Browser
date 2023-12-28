import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPersonDetails,
  selectPeopleError,
  selectPeopleIsLoading,
  selectPersonDetails,
  updatePersonId,
} from "../PeopleList/peopleSlice";
import { useEffect } from "react";
import PersonDetailsCard from "./PersonDetailsCard/PersonDetailsCard";
import Container from "../../common/Container";
import IconSpiner from "../../common/IconSpinner";
import ErrorPage from "../../common/ErrorPage";

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectPeopleIsLoading);
  const error = useSelector(selectPeopleError);
  const selectedPerson = useSelector(selectPersonDetails);

  useEffect(() => {
    dispatch(updatePersonId(id));
    dispatch(fetchPersonDetails(id));
  }, [id, dispatch]);

  return (
    <Container>
      {isLoading ? (
        <>
          <IconSpiner />
        </>
      ) : error ? (
        <ErrorPage />
      ) : (
        <PersonDetailsCard
          profile_path={selectedPerson.profile_path}
          name={selectedPerson.name}
        />
      )}
    </Container>
  );
};

export default PersonDetails;
