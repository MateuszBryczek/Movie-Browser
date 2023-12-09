import React, { useEffect, useState } from "react";
import { getGenre } from "../Genras/getGenres";
import { Tags } from "../MovieCard/styled";

const GenreList = ({ genreIds }) => {
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
    return genreIds.map((genreId, index) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? (
        <Tags key={index}>
          {genre.name}
        </Tags>
      ) : null;
    });
  };

  return <>{getGenreNames()}</>;
};

export default GenreList;