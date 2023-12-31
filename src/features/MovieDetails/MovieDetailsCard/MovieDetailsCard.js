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
  PosterWrapper,
  TextWrapper,
  RatingsWrapper
} from "./styled";
import { ReactComponent as Star } from "../../../images/starVector.svg";
import { IMG_URL_SMALL } from "../../config";
import GenreList from "../../MovieList/Genras/GenresList";

const MovieDetailsCard = ({
  poster_path,
  title,
  relase_date,
  production_countries,
  genre_ids,
  vote_average,
  vote_count,
  overview,
}) => {
  return (
    <>
      <MovieTile>
        <PosterWrapper>
          <Poster src={IMG_URL_SMALL + poster_path}></Poster>
        </PosterWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Date>{relase_date}</Date>
          <Section>
            Relase date:<Relase>{relase_date}</Relase>
            Production:<Production>{}</Production>
          </Section>
          <TagsWrapper>
            <GenreList genreIds={genre_ids} />
          </TagsWrapper>
          <RatingsWrapper>
          <Star />
          <Rating>{vote_average?.toFixed(1)}</Rating>/10
          <Votes>{vote_count}</Votes>votes
          </RatingsWrapper>
          <Descryption>{overview}</Descryption>
        </TextWrapper>
      </MovieTile>
    </>
  );
};

export default MovieDetailsCard;
