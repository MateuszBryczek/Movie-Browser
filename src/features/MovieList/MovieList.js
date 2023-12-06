import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectError, selectMovieByQuery } from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import Tile from "../../common/Tile";
import { TilesWrapper } from "./styled";

const MovieList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");


  const movies = useSelector(state => selectMovieByQuery(state, query));
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
