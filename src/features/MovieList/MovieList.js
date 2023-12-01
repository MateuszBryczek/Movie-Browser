import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Tile from "../../common/Tile";
import config from "../config";
import { TilesWrapper } from "./styled";

const MovieList = ({ isPlaceholder = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await config.get("movie/popular");
      setMovies(data.results.slice(0, 8));
    };

    if (!isPlaceholder) {
      fetchMovies();
    }
  }, [isPlaceholder]);

  return (
    <TilesWrapper>
      {isPlaceholder
        ? Array.from({ length: 8 }).map((_, index) => (
            <Tile key={index}>miejsce na film</Tile>
          ))
        : movies.map((movie, index) => (
            <Tile key={index}>
              <MovieCard {...movie} />
            </Tile>
          ))}
    </TilesWrapper>
  );
};

export default MovieList;