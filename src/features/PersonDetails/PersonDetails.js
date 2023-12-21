import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonDetails, selectPeopleIsLoading, selectPersonById } from "../PeopleList/peopleSlice";
import { useEffect } from "react";
import PersonDetailsCard from "./PersonDetailsCard/PersonDetailsCard";
import Container from "../../common/Container";
import IconSpiner from "../../common/IconSpinner";


const PersonDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(selectPeopleIsLoading);

    const selectedPerson = useSelector(state => selectPersonById(state, id));

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [id, dispatch]);

    if (isLoading) {
        return <IconSpiner />;
      }

    return (
        <Container>
            <PersonDetailsCard 
                profile_path={selectedPerson.profile_path}
                name={selectedPerson.name}
            />
        </Container>
    );

};

export default PersonDetails;