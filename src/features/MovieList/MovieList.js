import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesIsLoading,
  selectMovies,
  selectSearchMoviesValue,
  updateMoviePage,
  selectTotalPages,
} from "../Slices/movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { MovieHeader, MovieTile, MovieContainer } from "./styled";
import { TilesWrapper } from "./styled";
import Pagination from "../../common/Pagination";
import IconSpiner from "../../common/IconSpinner";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameter";
import { searchQueryParamName, pageQueryParamName } from "../queryParamName";
import NoResults from "../../common/noResults";
import ErrorPage from "../../common/ErrorPage";

const MovieList = () => {
  const isLoading = useSelector(selectMoviesIsLoading);
  const page = useQueryParameter(pageQueryParamName);
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const searchValue = useSelector(selectSearchMoviesValue);
  const movies = useSelector(selectMovies);
  const error = useSelector(selectMoviesError);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMoviePage(page));

    replaceQueryParameter({
      key: pageQueryParamName,
      value: page > totalPages || page < 1 ? 1 : page,
    });

    dispatch(fetchMovies());
  }, [dispatch, page, searchValue, totalPages]);

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
