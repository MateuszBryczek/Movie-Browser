import {
  Date,
  Descryption,
  MovieTile,
  Poster,
  Production,
  Rating,
  Relase,
  Section,
  TagsWrapper,
  Title,
  Votes,
  Star,
  TileWrapper,
} from "./styled";
import { IMG_URL_SMALL } from "../../config";
import GenreList from "../../MovieList/Genras/GenresList";
import noMovieImage from "../../../images/noMovieImage.svg";

const MovieDetailsCard = ({
  poster_path,
  title,
  release_date,
  production_countries,
  genre_ids,
  vote_average,
  vote_count,
  overview,
}) => {
  const countryNames = production_countries
    ?.map(country => country.name)
    .join(", ");

  return (
    <>
      <MovieTile>
        <Poster
          src={poster_path ? IMG_URL_SMALL + poster_path : noMovieImage}
        ></Poster>
        <TileWrapper>
          <Title>{title}</Title>
          <Date>{release_date ? release_date : ""}</Date>
          <Section>
            Production:
            <Production>{countryNames ? countryNames : "-"}</Production>
            Relase date:<Relase>{release_date ? release_date : "-"}</Relase>
          </Section>
          <TagsWrapper>
            <GenreList
              genreNames={genre_ids}
            />
          </TagsWrapper>
          <Star />
          <Rating>{vote_average?.toFixed(1)}</Rating>/10
          <Votes>{vote_count}</Votes>
          <Descryption>{overview}</Descryption>
        </TileWrapper>
      </MovieTile>
    </>
  );
};

export default MovieDetailsCard;
