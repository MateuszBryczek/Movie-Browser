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
import Tile from "../../common/Tile";
import { TilesWrapper, IconSpiner, IconWraper } from "./styled";
import iconSpiner from "./../../images/icon-spinner.svg";

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
