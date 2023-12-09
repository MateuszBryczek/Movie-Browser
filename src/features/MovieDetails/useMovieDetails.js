import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import config from "../config";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  selectIsLoading,
  selectError,
} from "./movieDetailsSlice"

const useMovieDetails = ({ match }) => {
  const { id } = match.params;

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchMovieDetails());
      try {
        const { data } = await config.get(`movie/${id}`);
        
        if (!data.ok) {
          throw new Error(data.statusText);
        }

        const MovieDetails = { ...data };

        dispatch(fetchMovieDetailsSuccess(MovieDetails));
      } catch (error) {
        dispatch(fetchMovieDetailsError(error));
      }
    };

    fetchData();
  }, [dispatch, id]);

  return <MovieDetails isLoading={isLoading} error={error} />;
};

export default useMovieDetails;