import {
  Date,
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
import { useEffect, useState } from "react";
import { GlobalTheme } from "../../../common/theme";

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
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const mediaQuery = GlobalTheme.breakpoints.mediumDevices;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMediaQuery = () => (mediaQuery < screenSize ? true : false);

  return (
    <>
      {isMediaQuery() ? (
        <MovieTile>
          <MovieTiLeConstainer>
            <Poster src={IMG_URL_SMALL + poster_path}></Poster>
            <TextWrapper>
              <Title>{title}</Title>
              <Date>{relase_date}2020</Date>
              <Section>
                <Label>
                  <LabelAdditionalData>Production:</LabelAdditionalData>
                  <AdditionalData>{}2020</AdditionalData>
                </Label>
                <Label>
                  <LabelAdditionalData>Relase date:</LabelAdditionalData>
                  <AdditionalData>{relase_date}2020</AdditionalData>
                </Label>
              </Section>
              <TagsWrapper>
                <GenreList genreIds={genre_ids} />
              </TagsWrapper>
              <RatingsWrapper>
                <StarImg src={star} />
                <Rating>{vote_average?.toFixed(1)}</Rating>
                <SmallRating>/10</SmallRating>
                <Votes>{vote_count} votes</Votes>
              </RatingsWrapper>
              <Descryption>{overview}</Descryption>
            </TextWrapper>
          </MovieTiLeConstainer>
        </MovieTile>
      ) : (
        <MovieTile>
          <MovieTiLeConstainer>
            <Poster src={IMG_URL_SMALL + poster_path}></Poster>
            <TextWrapper>
              <Title>{title}</Title>
              <Date>{relase_date}2020</Date>
              <Section>
                <Label>
                  <AdditionalData>{}2020</AdditionalData>
                </Label>
                <Label>
                  <AdditionalData>{relase_date}2020</AdditionalData>
                </Label>
              </Section>
              <TagsWrapper>
                <GenreList genreIds={genre_ids} />
              </TagsWrapper>
              <RatingsWrapper>
                <StarImg src={star} />
                <Rating>{vote_average?.toFixed(1)}</Rating>
                <Votes>{vote_count} votes</Votes>
              </RatingsWrapper>
            </TextWrapper>
          </MovieTiLeConstainer>
          <Descryption>{overview}</Descryption>
        </MovieTile>
      )}
    </>
  );
};

export default MovieDetailsCard;
