import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectError, selectMovies } from "./movieSlice";
import MovieCard from "./MovieCard";
import Tile from "../../common/Tile";
import { TilesWrapper } from "./styled";

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <TilesWrapper>
        {error
          ? Array.from({ length: 8 }).map((_, index) => (
              <Tile key={index}>miejsce na film</Tile>
            ))
          : movies.map((movie, index) => (
              <Tile key={index}>
                <MovieCard {...movie} />
              </Tile>
            ))}
      </TilesWrapper>
    </>
  );
};

export default MovieList;
