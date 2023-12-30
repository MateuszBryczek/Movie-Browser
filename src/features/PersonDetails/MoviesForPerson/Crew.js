import { Header } from "../../../common/Header";
import { useSelector } from "react-redux";
import MovieCard from "../../MovieList/MovieCard/MovieCard";
import { MovieTile, TilesWrapper } from "../../MovieList/styled";
import { selectCrew } from "../../PeopleList/peopleSlice";

const Crew = () => {
  const crew = useSelector(selectCrew);

  return (
    <>
      <Header>{`Movies - crew (${crew ? crew.length : 0})`}</Header>
      <TilesWrapper>
        {crew && crew.length > 0 ? (
          crew.map(movie => (
            <MovieTile key={movie.id}>
              <MovieCard
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
              />
            </MovieTile>
          ))
        ) : (
          <p>No movie crew available</p>
        )}
      </TilesWrapper>
    </>
  );
};

export default Crew;
