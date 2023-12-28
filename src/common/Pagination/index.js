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
  setMaxMoviePages,
  selectMoviePage,
} from "../../features/MovieList/movieSlice";

import {
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  goToLastPeoplePage,
  setMaxPeoplePages,
} from "../../features/PeopleList/peopleSlice";

//jeśli jest movieList to wtedy funkcje z movies, jak jest people to z people
// składnia z formularza z kantoru
//dorobić disabled

const Pagination = ({ isMovieList }) => {
  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const mediaQuery = GlobalTheme.breakpoints.mediumDevices;
  // const isMovieList = { isMovieList };
  // const isPeopleList = {isPeopleList};

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

  const page = useSelector(selectMoviePage);

  return (
    <StyledPagination>
      {isMovieList ? (
        <>
          <LeftButton onClick={() => dispatch(goToFirstMoviePage())}>
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </LeftButton>
          <LeftButton onClick={() => dispatch(previousMoviePage())}>
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </LeftButton>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> ${page} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> 500 </SpanPrimary>
          </Text>
          <RightButton onClick={() => dispatch(nextMoviePage())}>
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </RightButton>
          <RightButton onClick={() => dispatch(goToLastMoviePage())}>
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </RightButton>
        </>
      ) : (
        <>
          <LeftButton onClick={() => dispatch(goToFirstPeoplePage())}>
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </LeftButton>
          <LeftButton onClick={() => dispatch(previousPeoplePage())}>
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </LeftButton>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> ${page} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> 500 </SpanPrimary>
          </Text>
          <RightButton onClick={() => dispatch(nextPeoplePage())}>
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </RightButton>
          <RightButton onClick={() => dispatch(goToLastPeoplePage())}>
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </RightButton>
        </>
      )}
    </StyledPagination>
  );
};

export default Pagination;
