import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, fetchMovieDetails, selectMoviesIsLoading } from "../MovieList/movieSlice";
import { useEffect } from "react";
import MovieCard from "../MovieList/MovieCard/MovieCard";
import IconSpiner from "../../common/IconSpinner";
import Container from "../../common/Container";


const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(selectMoviesIsLoading);

    const selectedMovie = useSelector(selectMovies)

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [id, dispatch]);

    return (
        <Container>
        {isLoading ? (
            <IconSpiner />
          ) : (
        <>
            <MovieCard selectedMovie={selectedMovie.movieDetails} />
        </>
          )}
        </Container>
    );
};

export default MovieDetails