import { POSTER_URL_BIG } from "../../config";
import { ReactComponent as Star } from "../../../images/starVector.svg";
import {
  Wrapper,
  Poster,
  Title,
  Rating,
  Votes,
  Background,
  Section,
  RatingSection,
  RatingWrapper
} from "./styled";
import { RatingsWrapper } from "../MovieDetailsCard/styled";

const Banner = ({ backdrop_path, title, vote_average, vote_count }) => {

  return (
    <>
      <Background>
        <Wrapper>
          <Poster src={POSTER_URL_BIG + backdrop_path} />
          <Section>
            <Title>{title}</Title>
            <RatingSection>
              <RatingsWrapper>
              <Star />
              <Rating>{vote_average?.toFixed(1)}</Rating>/10
              </RatingsWrapper>
              <Votes>{vote_count} votes</Votes>
            </RatingSection>
          </Section>
        </Wrapper>
      </Background>
    </>
  );
};

export default Banner;
