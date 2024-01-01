import React from "react";
import { Header } from "../../../common/Header";
import PeopleCard from "../../PeopleList/PeopleCard/PeopleCard";
import { PeopleTile } from "../../PeopleList/styled";
import { useSelector } from "react-redux";
import { selectCast } from "../../MovieList/movieSlice";
import { PeopleForMovieTilesWrapper } from "./styled";

const Cast = () => {
  const cast = useSelector(selectCast);

  return (
    <>
      <Header>Cast</Header>
      <PeopleForMovieTilesWrapper>
        {cast && cast.length > 0 ? (
          cast.map(person => (
            <PeopleTile key={person.id + person.character}>
              <PeopleCard
                id={person.id + person.character}
                profile_path={person.profile_path}
                name={person.name}
                personRole={person.character}
              />
            </PeopleTile>
          ))
        ) : (
          <p>No cast members available</p>
        )}
      </PeopleForMovieTilesWrapper>
    </>
  );
};

export default Cast;
