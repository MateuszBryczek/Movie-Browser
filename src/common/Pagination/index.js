import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledPagination,
  LeftButton,
  RightButton,
  LeftVector,
  RightVector,
  SpanPrimary,
  SpanSecondary,
  Text,
} from "./styled";
import rightVector from "./../../images/rightVector.svg";
import leftVector from "./../../images/leftVector.svg";
import { GlobalTheme } from "../theme";
import {
  nextMoviePage,
  previousMoviePage,
  goToFirstMoviePage,
  goToLastMoviePage,
  selectMaxMoviePages,
  selectMoviePage,
  selectTotalPages
} from "../../features/MovieList/movieSlice";

import {
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  goToLastPeoplePage,
  selectMaxPeoplePages,
  selectPeoplePage,
} from "../../features/PeopleList/peopleSlice";
import { selectDataForTotalMoviePages } from "../../features/MovieList/movieSlice";

const Pagination = ({ isMovieList }) => {
  const dispatch = useDispatch();
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

  const moviePage = useSelector(selectMoviePage);
  const peoplePage = useSelector(selectPeoplePage);
  const maxMoviePages = useSelector(selectMaxMoviePages);
  const maxPeoplePages = useSelector(selectMaxPeoplePages);
const totalMoviePages = useSelector(selectTotalPages);

const displayTotalMoviePages = totalMoviePages> 500 ? 500 : totalMoviePages;


  return (
    <StyledPagination>
      {isMovieList ? (
        <>
          <LeftButton
            disabled={moviePage === 1}
            onClick={() => dispatch(goToFirstMoviePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </LeftButton>
          <LeftButton
            disabled={moviePage === 1}
            onClick={() => dispatch(previousMoviePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </LeftButton>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> {moviePage} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> {displayTotalMoviePages} </SpanPrimary>
          </Text>
          <RightButton
            disabled={moviePage === displayTotalMoviePages}
            onClick={() => dispatch(nextMoviePage())}
          >
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </RightButton>
          <RightButton
            disabled={moviePage === displayTotalMoviePages}
            onClick={() => dispatch(goToLastMoviePage())}
          >
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </RightButton>
        </>
      ) : (
        <>
          <LeftButton
            disabled={peoplePage === 1}
            onClick={() => dispatch(goToFirstPeoplePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </LeftButton>
          <LeftButton
            disabled={peoplePage === 1}
            onClick={() => dispatch(previousPeoplePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </LeftButton>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> {peoplePage} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> {maxPeoplePages}</SpanPrimary>
          </Text>
          <RightButton
            disabled={peoplePage === maxPeoplePages}
            onClick={() => dispatch(nextPeoplePage())}
          >
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </RightButton>
          <RightButton
            disabled={peoplePage === maxPeoplePages}
            onClick={() => dispatch(goToLastPeoplePage())}
          >
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </RightButton>
        </>
      )}
    </StyledPagination>
  );
};

export default Pagination;
