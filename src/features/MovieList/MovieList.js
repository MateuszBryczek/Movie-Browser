import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesIsLoading,
  selectMovies,
  selectSearchMoviesValue,
} from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { MovieTile } from "./styled";
import { TilesWrapper } from "./styled";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";
import IconSpiner from "../../common/IconSpinner";

const MovieList = () => {
  const isLoading = useSelector(selectMoviesIsLoading);

  const searchValue = useSelector(selectSearchMoviesValue);
  const movies = useSelector(selectMovies);
  const error = useSelector(selectMoviesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchValue]);

  return (
    <>
      <Container>
        <Header>Popular movies</Header>
        {isLoading ? (
          <IconSpiner />
        ) : (
          <>
            {" "}
            <TilesWrapper>
              {movies.map((movie) => (
                <MovieTile key={movie.id}>
                  <MovieCard {...movie} />
                </MovieTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieList;
