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
import Tile from "../../common/Tile";
import { TilesWrapper } from "./styled";
import { useQueryParameter } from "../queryParameter";
import searchQueryParamName from "../searchQueryParamName";

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
        ""
      ) : (
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
      )}
    </>
  );
};

export default MovieList;
