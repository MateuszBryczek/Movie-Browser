import React from "react";
import Header from "../../../common/Header";
import PeopleCard from "../../PeopleList/PeopleCard/PeopleCard";
import { PeopleTile, TilesWrapper } from "../../PeopleList/styled";
import { useSelector } from "react-redux";
import { selectCast } from "../../MovieList/movieSlice";

const Cast = () => {
  const cast = useSelector(selectCast);

  return (
    <>
      <Header>Cast</Header>
      <TilesWrapper>
        {cast && cast.length > 0 ? (
          cast.map(person => (
            <PeopleTile key={person.id}>
              <PeopleCard
                id={person.id}
                profile_path={person.profile_path}
                name={person.name}
                personRole={person.character}
              />
            </PeopleTile>
          ))
        ) : (
          <p>No cast members available</p>
        )}
      </TilesWrapper>
    </>
  );
};

export default Cast;
