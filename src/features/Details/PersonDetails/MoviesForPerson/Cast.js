import { Header } from "../../../../common/Header";
import { useSelector } from "react-redux";
import MovieCard from "../../../MovieList/MovieCard/MovieCard";
import { MovieTile } from "../../../MovieList/styled";
import { selectCast } from "../../../Slices/peopleSlice";
import { MoviesForPeopleTilesWrapper } from "./styled";

const Cast = () => {
  const cast = useSelector(selectCast);

  return (
    <>
      <Header>{`Movies - cast (${cast ? cast.length : 0})`}</Header>
      <MoviesForPeopleTilesWrapper>
        {cast && cast.length > 0 ? (
          cast.map(movie => (
            <MovieTile key={movie.id}>
              <MovieCard
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                character={movie.character}
              />
            </MovieTile>
          ))
        ) : (
          <p>No movie cast available</p>
        )}
      </MoviesForPeopleTilesWrapper>
    </>
  );
};

export default Cast;
