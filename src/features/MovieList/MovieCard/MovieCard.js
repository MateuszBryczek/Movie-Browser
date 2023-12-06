import {
  Poster,
  Title,
  Year,
  Tags,
  Rating,
  Votes,
  Description,
  StyledCard,
  RateWrapper,
  TagsWrapper,
} from "./styled";
import { IMG_URL_500 } from "../../config";
import GenreList from "../Genras/GenresList";
import { ReactComponent as Star } from "../../../images/starVector.svg";

const MovieCard = ({
  original_title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  poster_path,
}) => {

  const relaseDate = new Date(release_date);
  const year = relaseDate.getFullYear();

  return (
    <>
      <StyledCard>
        <Poster src={IMG_URL_500 + poster_path}></Poster>
        <Description>
          <Title>{original_title}</Title>
          <Year>{year}</Year>
        </Description>
        <TagsWrapper>
           <Tags><GenreList genreIds={genre_ids} /></Tags>
        </TagsWrapper>
        <RateWrapper>
          <Star />
          <Rating>{vote_average.toFixed(1)}</Rating>
          <Votes>{vote_count} votes</Votes>
        </RateWrapper>
      </StyledCard>
    </>
  );
};

export default MovieCard;