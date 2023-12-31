import { Header } from "../../../common/Header";
import { PeopleTile, TilesWrapper } from "../../PeopleList/styled";
import PeopleCard from "../../PeopleList/PeopleCard/PeopleCard";
import { useSelector } from "react-redux";
import { selectCrew } from "../../MovieList/movieSlice";

const Crew = () => {
  const crew = useSelector(selectCrew);

  return (
    <>
      <Header>Crew</Header>
      <TilesWrapper>
        {crew && crew.length > 0 ? (
          crew.map(person => (
            <PeopleTile key={person.id + person.job}>
              <PeopleCard
                id={person.id + person.job}
                profile_path={person.profile_path}
                name={person.name}
                personRole={person.job}
              />
            </PeopleTile>
          ))
        ) : (
          <p>No crew members available</p>
        )}
      </TilesWrapper>
    </>
  );
};

export default Crew;
