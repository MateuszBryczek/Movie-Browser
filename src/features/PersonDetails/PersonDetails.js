import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonDetails, selectPersonDetails } from "../PeopleList/peopleSlice";
import { useEffect } from "react";
import PersonDetailsCard from "./PersonDetailsCard/PersonDetailsCard";
import Container from "../../common/Container";


const PersonDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const selectedPerson = useSelector(selectPersonDetails)

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [id, dispatch]);

    return (
        <Container>
            <PersonDetailsCard selectedPerson={selectedPerson.personDetails} />
        </Container>
    );

};

export default PersonDetails;