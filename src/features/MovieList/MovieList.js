import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectError,
  selectIsLoading,
  selectMovieByQuery,
  selectSearchValue,
} from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { MovieTile } from "./styled";
import { TilesWrapper } from "./styled";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
import IconSpiner from "../../common/IconSpinner";

const MovieList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const isLoading = useSelector(selectIsLoading);

  const searchValue = useSelector(selectSearchValue);
  const movies = useSelector(state => selectMovieByQuery(state, query));
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchValue]);

  return (
    <>
      {isLoading ? (
        <IconSpiner />
      ) : (
        <TilesWrapper>
          {error
            ? Array.from({ length: 8 }).map((_, index) => (
                <MovieTile key={index}></MovieTile>
              ))
            : movies.map((movie, index) => (
                <MovieTile key={index}>
                  <MovieCard {...movie} />
                </MovieTile>
              ))}
        </TilesWrapper>
      )}
    </>
  );
};

export default MovieList;
