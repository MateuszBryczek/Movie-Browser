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
import noMovieImage from "../../../images/noMovieImage.svg";

const MovieCard = ({
  id,
  title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  poster_path,
  character,
  job,
}) => {
  const releaseDate = new Date(release_date);
  const year = releaseDate.getFullYear() ? releaseDate.getFullYear() : "-";


  return (
    <>
      <StyledCard to={`/movieDetails/${id}`}>
        <Poster
          src={poster_path ? POSTER_URL_SMALL + poster_path : noMovieImage}
        ></Poster>
        <DataWrapper>
          <Description>
            <Title>{title}</Title>
            <Year>
              {character
                ? `${character}(${year})`
                : job
                ? `${job}(${year})`
                : year
                ? year
                : "-"}
            </Year>
          </Description>
          <TagsWrapper>
            <GenreList genreIds={genre_ids} />
          </TagsWrapper>
          <RateWrapper>
            {vote_count ? (
              <>
                <Star src={star} alt="" />
                <Rating>{vote_average?.toFixed(1)}</Rating>
                <Votes>{vote_count} votes</Votes>
              </>
            ) : (
              <Votes>No votes yet</Votes>
            )}
          </RateWrapper>
        </DataWrapper>
      </StyledCard>
    </>
  );
};

export default MovieCard;
