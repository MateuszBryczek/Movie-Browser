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
  
  return ( 
    <>
      <MovieTile>
        <Poster src={IMG_URL_SMALL + poster_path}></Poster>
        <TileWrapper>
        <Title>{title}</Title>
        <Date>{release_date}</Date>
        <Section>
          Production:<Production>{}</Production>
          Relase date:<Relase>{release_date}</Relase>
        </Section>
        <TagsWrapper>
          <GenreList genreIds={genre_ids} />
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