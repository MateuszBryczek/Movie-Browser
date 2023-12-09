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
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";
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
