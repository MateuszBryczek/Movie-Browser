import React, { useEffect, useState } from "react";
import { getGenre } from "../getAPI/getGenres";
import { Tags } from "../MovieList/MovieCard/styled";

const GenreList = ({ genreIds, genreNames }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getGenre();
        setGenres(genresData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const getGenreNames = () => {
    if (genreIds) {
      return genreIds?.map((genreId, index) => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? <Tags key={index}>{genre.name}</Tags> : null;
      });
    } else {
      return genreNames?.map(genreName => {
        return <Tags key={genreName.id}>{genreName.name}</Tags>;
      });
    }
  };

  return <>{getGenreNames()}</>;
};

export default GenreList;
