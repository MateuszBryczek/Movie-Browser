import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieById, fetchMovieDetails, selectMoviesIsLoading, fetchPeopleForMovie } from "../MovieList/movieSlice";
import { useEffect } from "react";
import MovieDetailsCard from "./MovieDetailsCard/MovieDetailsCard";
import IconSpiner from "../../common/IconSpinner";
import Container from "../../common/Container";
import Banner from "./Banner";
import Cast from "./PeopleForMovie/Cast";
import Crew from "./PeopleForMovie/Crew";

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(selectMoviesIsLoading);
    
    const selectedMovie = useSelector(state => selectMovieById(state, id));

    useEffect(() => {
      dispatch(fetchMovieDetails(id));
      dispatch(fetchPeopleForMovie(id))
    }, [id, dispatch]);
  
    if (isLoading) {
      return <IconSpiner />;
    }

    return (
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
          relase_date={selectedMovie.relase_date}
          production_countries={selectedMovie.production_countries}
          genre_ids={selectedMovie.genre_ids}
          vote_average={selectedMovie.vote_average}
          vote_count={selectedMovie.vote_count}
          overview={selectedMovie.overview}
        />
        <Cast />
        <Crew />
      </Container>
      </>
  );
};

export default MovieDetails