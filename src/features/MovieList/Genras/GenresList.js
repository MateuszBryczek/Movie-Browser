import React, { useEffect, useState } from "react";
import { getGenre } from "../Genras/getGenres";

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
    return genreIds.map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : "";
    });
  };

  return <>{getGenreNames().join(", ")}</>;
};

export default GenreList;