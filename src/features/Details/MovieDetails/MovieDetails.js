import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectMoviesIsLoading,
  fetchPeopleForMovie,
  selectMovieDetails,
  updateMovieId,
  selectMoviesError,
  selectCast,
  selectCrew,
} from "../../Slices/movieSlice";
import { useEffect } from "react";
import MovieDetailsCard from "./MovieDetailsCard/MovieDetailsCard";
import IconSpiner from "../../../common/IconSpinner";
import { Container } from "../../../common/Container";
import Banner from "./Banner";
import Cast from "./PeopleForMovie/Cast";
import Crew from "./PeopleForMovie/Crew";
import ErrorPage from "../../../common/ErrorPage";

const MovieDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const error = useSelector(selectMoviesError);
  const isLoading = useSelector(selectMoviesIsLoading);

  const selectedMovie = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);

  useEffect(() => {
    dispatch(updateMovieId(id));
    dispatch(fetchMovieDetails(id));
    dispatch(fetchPeopleForMovie(id));
  }, [id, dispatch]);

  if (!selectedMovie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      {isLoading ? (
        <>
          <IconSpiner />
        </>
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          <Banner
            backdrop_path={selectedMovie.backdrop_path}
            title={selectedMovie.title}
            vote_average={selectedMovie.vote_average}
            vote_count={selectedMovie.vote_count}
          />
          <Container>
            <MovieDetailsCard
              poster_path={selectedMovie.poster_path}
              title={selectedMovie.title}
              release_date={selectedMovie.release_date}
              production_countries={selectedMovie.production_countries}
              genre_ids={selectedMovie.genres}
              vote_average={selectedMovie.vote_average}
              vote_count={selectedMovie.vote_count}
              overview={selectedMovie.overview}
            />
            {cast && cast.length > 0 && (
              <Cast />
            )}
            {crew && crew.length > 0 && (
              <Crew />
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default MovieDetails;