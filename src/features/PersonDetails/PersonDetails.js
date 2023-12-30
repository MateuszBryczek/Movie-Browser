import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPersonDetails,
  selectPeopleError,
  selectPeopleIsLoading,
  selectPersonDetails,
  updatePersonId,
  fetchMoviesForPerson,
} from "../PeopleList/peopleSlice";
import { useEffect } from "react";
import PersonDetailsCard from "./PersonDetailsCard/PersonDetailsCard";
import {Container} from "../../common/Container";
import IconSpiner from "../../common/IconSpinner";
import ErrorPage from "../../common/ErrorPage";
import Cast from "./MoviesForPerson/Cast";
import Crew from "./MoviesForPerson/Crew";

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectPeopleIsLoading);
  const error = useSelector(selectPeopleError);
  const selectedPerson = useSelector(selectPersonDetails);

    useEffect(() => {
      dispatch(updatePersonId(id));
      dispatch(fetchPersonDetails(id));
      dispatch(fetchMoviesForPerson(id));
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
        <>
        <PersonDetailsCard
          profile_path={selectedPerson.profile_path}
          name={selectedPerson.name}
          birthday={selectedPerson.birthday}
          place_of_birth={selectedPerson.place_of_birth}
          biography={selectedPerson.biography}
        />
        <Cast />
        <Crew />
        </>
      )}
    </Container>
  );
};

export default PersonDetails;
