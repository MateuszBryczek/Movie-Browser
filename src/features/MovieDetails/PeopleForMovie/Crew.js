import { Header } from "../../../common/Header";
import { PeopleTile } from "../../PeopleList/styled";
import PeopleCard from "../../PeopleList/PeopleCard/PeopleCard";
import { useSelector } from "react-redux";
import { selectCrew } from "../../MovieList/movieSlice";
import { PeopleForMovieTilesWrapper } from "./styled";

const Crew = () => {
  const crew = useSelector(selectCrew);

  return (
    <>
      <Header>Crew</Header>
      <PeopleForMovieTilesWrapper>
        {crew && crew.length > 0 ? (
          crew.map(person => (
            <PeopleTile key={person.id}>
              <PeopleCard
                id={person.id}
                profile_path={person.profile_path}
                name={person.name}
                personRole={person.job}
              />
            </PeopleTile>
          ))
        ) : (
          <p>No crew members available</p>
        )}
      </PeopleForMovieTilesWrapper>
    </>
  );
};

export default Crew;
