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
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
import NoResults from "../../common/noResults";

const MovieList = () => {
  const isLoading = useSelector(selectMoviesIsLoading);
  const query = useQueryParameter(searchQueryParamName);

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
        <Header>
          {searchValue
            ? movies.total_results
              ? `Search results for "${query}" ${
                  isLoading ? "" : `(${movies.total_results})`
                }`
              : isLoading
              ? `Search results for "${query}"`
              : `Sorry, there are no results for "${query}"`
            : "Popular movies"}
        </Header>
        {isLoading ? (
          <IconSpiner />
        ) : movies.total_results ? (
          <>
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
          <NoResults />
        )}
      </Container>
    </>
  );
};

export default MovieList;
