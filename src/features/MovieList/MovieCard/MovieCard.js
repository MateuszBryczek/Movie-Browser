import {
  Poster,
  Title,
  Year,
  Rating,
  Votes,
  Description,
  StyledCard,
  RateWrapper,
  TagsWrapper,
  DataWrapper,
  Star,
} from "./styled";
import { POSTER_URL_SMALL } from "../../config";
import GenreList from "../Genras/GenresList";
import star from "../../../images/starVector.svg";
import noMovieImage from "../../../images/noMovieImage.svg"

const MovieCard = ({
  id,
  title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  poster_path,
}) => {
  const releaseDate = new Date(release_date);
  const year = releaseDate.getFullYear();

  return (
    <>
      <StyledCard>
        <Poster src={poster_path ? POSTER_URL_SMALL + poster_path : noMovieImage}></Poster>
        <DataWrapper>
          <Description>
            <Title>{title}</Title>
            <Year>{year}</Year>
          </Description>
          <TagsWrapper>
            <GenreList genreIds={genre_ids} />
          </TagsWrapper>
          <RateWrapper>
            <Star src={star} alt="" />
            <Rating>{vote_average.toFixed(1)}</Rating>
            <Votes>{vote_count} votes</Votes>
          </RateWrapper>
        </DataWrapper>
      </StyledCard>
    </>
  );
};

export default MovieCard;
