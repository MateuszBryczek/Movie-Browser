import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieById, fetchMovieDetails, selectMoviesIsLoading } from "../MovieList/movieSlice";
import { useEffect } from "react";
import MovieDetailsCard from "./MovieDetailsCard/MovieDetailsCard";
import IconSpiner from "../../common/IconSpinner";
import Container from "../../common/Container";


const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(selectMoviesIsLoading);
    
    const selectedMovie = useSelector(state => selectMovieById(state, id));

    useEffect(() => {
      dispatch(fetchMovieDetails(id));
    }, [id, dispatch]);
  
    if (isLoading) {
      return <IconSpiner />;
    }

    return (
      <Container>
            <MovieDetailsCard
              backdrop_path={selectedMovie.backdrop_path}
              title={selectedMovie.title}
              vote_average={selectedMovie.vote_average}
              vote_count={selectedMovie.vote_count}
            /> 
      </Container>
  );
};

export default MovieDetails