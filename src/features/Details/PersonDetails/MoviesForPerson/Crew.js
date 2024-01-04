import { Header } from "../../../../common/Header";
import { useSelector } from "react-redux";
import MovieCard from "../../../MovieList/MovieCard/MovieCard";
import { MovieTile } from "../../../MovieList/styled";
import { selectCrew } from "../../../Slices/peopleSlice";
import { MoviesForPeopleTilesWrapper } from "./styled";

const Crew = () => {
  const crew = useSelector(selectCrew);

  return (
    <>
      <Header>{`Movies - crew (${crew ? crew.length : 0})`}</Header>
      <MoviesForPeopleTilesWrapper>
        {crew && crew.length > 0 ? (
          crew.map(movie => (
            <MovieTile key={movie.id + movie.job}>
              <MovieCard
                id={movie.id + movie.job}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                job={movie.job}
              />
            </MovieTile>
          ))
        ) : (
          <p>No movie crew available</p>
        )}
      </MoviesForPeopleTilesWrapper>
    </>
  );
};

export default Crew;
