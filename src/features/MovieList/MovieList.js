import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesIsLoading,
  selectMovieByQuery,
  selectSearchMoviesValue,
} from "./movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import Tile from "../../common/Tile";
import { TilesWrapper, IconSpiner, IconWraper } from "./styled";
import iconSpiner from "./../../images/icon-spinner.svg";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";

const MovieList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const isLoading = useSelector(selectMoviesIsLoading);

  const searchValue = useSelector(selectSearchMoviesValue);
  const movies = useSelector(state => selectMovieByQuery(state, query));
  const error = useSelector(selectMoviesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchValue]);

  return (
    <>
      {isLoading ? (
        <IconWraper>
        <IconSpiner src={iconSpiner} alt="loading" />
        </IconWraper>
      ) : (
        <TilesWrapper>
          {error
            ? Array.from({ length: 8 }).map((_, index) => (
                <Tile key={index}></Tile>
              ))
            : movies.map((movie, index) => (
                <Tile key={index}>
                  <MovieCard {...movie} />
                </Tile>
              ))}
        </TilesWrapper>
      )}
    </>
  );
};

export default MovieList;
