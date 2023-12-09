import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectError, selectMovies } from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import Tile from "../../common/Tile";
import { TilesWrapper } from "./styled";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header>Popular movies</Header>

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
        <Pagination />
      </Container>
    </>
  );
};

export default MovieList;
