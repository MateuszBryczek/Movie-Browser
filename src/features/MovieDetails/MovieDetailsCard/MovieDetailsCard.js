import {
  Year,
  Descryption,
  MovieTile,
  Poster,
  Rating,
  Section,
  TagsWrapper,
  Title,
  Votes,
  TextWrapper,
  RatingsWrapper,
  AdditionalData,
  LabelAdditionalData,
  Label,
  StarImg,
  SmallRating,
  MovieTiLeConstainer,
} from "./styled";
import star from "../../../images/starVector.svg";
import { IMG_URL_SMALL } from "../../config";
import GenreList from "../../MovieList/Genras/GenresList";
import noMovieImage from "../../../images/noMovieImage.svg";
import { useResize } from "../../resize";

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

  const resize = useResize()

  const countryNames = production_countries
    ?.map(country => country.name)
    .join(", ");

    const date = new Date(release_date);
    const releaseDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).replace(/\//g, '.');
  
    const year = date.getFullYear() ? date.getFullYear() : "-";

  return (
    <>
      {resize() ? (
        <MovieTile>
          <MovieTiLeConstainer>
            <Poster
              src={poster_path ? IMG_URL_SMALL + poster_path : noMovieImage}
            ></Poster>
            <TextWrapper>
              <Title>{title}</Title>
              <Year>{release_date ? year : "-"}</Year>
              <Section>
                <Label>
                  <LabelAdditionalData>Production:</LabelAdditionalData>
                  <AdditionalData>
                    {countryNames ? countryNames : "-"}
                  </AdditionalData>
                </Label>
                <Label>
                  <LabelAdditionalData>Relase date:</LabelAdditionalData>
                  <AdditionalData>
                    {release_date ? releaseDate : "-"}
                  </AdditionalData>
                </Label>
              </Section>
              <TagsWrapper>
                <GenreList genreNames={genre_ids} />
              </TagsWrapper>
              {vote_count ? (
                <RatingsWrapper>
                  <StarImg src={star} />
                  <Rating>{vote_average?.toFixed(1).replace(".", ",")}</Rating>
                  <SmallRating>/10</SmallRating>
                  <Votes>{vote_count} votes</Votes>
                </RatingsWrapper>
              ) : (
                <SmallRating>No votes yet</SmallRating>
              )}
              <Descryption>{overview}</Descryption>
            </TextWrapper>
          </MovieTiLeConstainer>
        </MovieTile>
      ) : (
        <MovieTile>
          <MovieTiLeConstainer>
            <Poster
              src={poster_path ? IMG_URL_SMALL + poster_path : noMovieImage}
            ></Poster>
            <TextWrapper>
              <Title>{title}</Title>
              <Year>{release_date ? year : "-"}</Year>
              <Section>
                <Label>
                  <AdditionalData>
                    {countryNames ? countryNames : "-"}
                  </AdditionalData>
                </Label>
                <Label>
                  <AdditionalData>
                    {release_date ? release_date : "-"}
                  </AdditionalData>
                </Label>
              </Section>
              <TagsWrapper>
                <GenreList genreNames={genre_ids} />
              </TagsWrapper>
              {vote_count ? (
                <RatingsWrapper>
                  <StarImg src={star} />
                  <Rating>{vote_average?.toFixed(1)}</Rating>
                  <Votes>{vote_count} votes</Votes>
                </RatingsWrapper>
              ) : (
                <SmallRating>No votes yet</SmallRating>
              )}
            </TextWrapper>
          </MovieTiLeConstainer>
          <Descryption>{overview}</Descryption>
        </MovieTile>
      )}
    </>
  );
};

export default MovieDetailsCard;
