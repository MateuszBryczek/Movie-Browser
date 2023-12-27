import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesIsLoading,
  selectMovies,
  selectSearchMoviesValue,
  selectMoviePage,
  selectMaxMoviePages
} from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { MovieTile } from "./styled";
import { TilesWrapper } from "./styled";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Pagination from "../../common/Pagination";
import IconSpiner from "../../common/IconSpinner";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
import NoResults from "../../common/noResults";
import ErrorPage from "../../common/ErrorPage";

const MovieList = () => {
  const isLoading = useSelector(selectMoviesIsLoading);
  const query = useQueryParameter(searchQueryParamName);

  const searchValue = useSelector(selectSearchMoviesValue);
  const movies = useSelector(selectMovies);
  const error = useSelector(selectMoviesError);
  const page = useSelector(selectMoviePage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchValue, page]);

  return (
    <>
      <Container>
        {isLoading ? (
          <>
            <Header>
              {searchValue ? `Search results for "${query}"` : "Popular movies"}
            </Header>
            <IconSpiner />
          </>
        ) : error ? (
          <ErrorPage />
        ) : movies.total_results ? (
          <>
            <Header>
              {searchValue
                ? `Search results for "${query}" (${movies.total_results})`
                : "Popular movies"}
            </Header>
            <TilesWrapper>
              {movies.results?.map((movie, index) => (
                <MovieTile key={index}>
                  <MovieCard {...movie} />
                </MovieTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        ) : (
          <>
            <Header>{`Sorry, there are no results for "${query}"`}</Header>
            <NoResults />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieList;
