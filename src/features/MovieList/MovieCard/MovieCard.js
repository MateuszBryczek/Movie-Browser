import {
  Poster,
  Title,
  Date,
  Tags,
  Rating,
  Votes,
  Description,
  StyledCard,
  RateWrapper,
  TagsWrapper
} from "./styled";
import { IMG_URL_500 } from "../../config";
import { ReactComponent as Star } from "../../../images/starVector.svg";

const MovieCard = ({
  original_title,
  release_date,
  genres,
  vote_average,
  vote_count,
  poster_path,
}) => {
  return (
    <>
      <StyledCard>
        <Poster src={IMG_URL_500 + poster_path}></Poster>
        <Description>
          <Title>{original_title}</Title>
          <Date>{release_date}</Date>
        </Description>
        <TagsWrapper>
        <Tags>{genres}</Tags>
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
