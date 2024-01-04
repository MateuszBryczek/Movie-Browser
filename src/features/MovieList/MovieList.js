import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesIsLoading,
  selectMovies,
  selectSearchMoviesValue,
  selectMoviePage,  
} from "../Slices/movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { MovieHeader, MovieTile, MovieContainer } from "./styled";
import { TilesWrapper } from "./styled";
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
  const moviePage = useSelector(selectMoviePage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchValue, moviePage]);

  return (
    <>
      <MovieContainer>
        {isLoading ? (
          <>
            <MovieHeader>
              {searchValue ? `Search results for "${query}"` : "Popular movies"}
            </MovieHeader>
            <IconSpiner />
          </>
        ) : error ? (
          <ErrorPage />
        ) : movies.total_results ? (
          <>
            <MovieHeader>
              {searchValue
                ? `Search results for "${query}" (${movies.total_results})`
                : "Popular movies"}
            </MovieHeader>
            <TilesWrapper>
              {movies.results?.map(movie => (
                <MovieTile key={movie.id}>
                  <MovieCard {...movie} />
                </MovieTile>
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        ) : (
          <>
            <MovieHeader>{`Sorry, there are no results for "${query}"`}</MovieHeader>
            <NoResults />
          </>
        )}
      </MovieContainer>
    </>
  );
};

export default MovieList;
