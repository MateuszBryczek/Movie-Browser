import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  StyledPagination,
  Button,
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
  selectMoviePage,
  selectTotalPages,
} from "../../features/MovieList/movieSlice";

import {
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  goToLastPeoplePage,
  selectPeoplePage,
  selectTotalPeoplePages,
} from "../../features/PeopleList/peopleSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const mediaQuery = GlobalTheme.breakpoints.mediumDevices;
  const location= useLocation();

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
  const totalMoviePages = useSelector(selectTotalPages);
  const displayTotalMoviePages = totalMoviePages > 500 ? 500 : totalMoviePages;
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const displayTotalPeoplePages =
    totalPeoplePages > 500 ? 500 : totalPeoplePages;

  return (
    <StyledPagination>
      {location.pathname==="/movielist" ? (
        <>
          <Button
            disabled={moviePage === 1}
            onClick={() => dispatch(goToFirstMoviePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </Button>
          <Button
            disabled={moviePage === 1}
            onClick={() => dispatch(previousMoviePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </Button>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> {moviePage} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> {displayTotalMoviePages} </SpanPrimary>
          </Text>
          <Button
            disabled={moviePage === displayTotalMoviePages}
            onClick={() => dispatch(nextMoviePage())}
          >
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </Button>
          <Button
            disabled={moviePage === displayTotalMoviePages}
            onClick={() => dispatch(goToLastMoviePage())}
          >
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </Button>
        </>
      ) : (
        <>
          <Button
            disabled={peoplePage === 1}
            onClick={() => dispatch(goToFirstPeoplePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
          </Button>
          <Button
            disabled={peoplePage === 1}
            onClick={() => dispatch(previousPeoplePage())}
          >
            <LeftVector src={leftVector} alt="" />
            {isMediaQuery() ? "Previous" : ""}
          </Button>
          <Text>
            <SpanSecondary> Page </SpanSecondary>
            <SpanPrimary> {peoplePage} </SpanPrimary>
            <SpanSecondary> of </SpanSecondary>
            <SpanPrimary> {displayTotalPeoplePages}</SpanPrimary>
          </Text>
          <Button
            disabled={peoplePage === displayTotalPeoplePages}
            onClick={() => dispatch(nextPeoplePage())}
          >
            {isMediaQuery() ? "Next" : ""}
            <RightVector src={rightVector} alt="" />
          </Button>
          <Button
            disabled={peoplePage === displayTotalPeoplePages}
            onClick={() => dispatch(goToLastPeoplePage())}
          >
            {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
            <RightVector src={rightVector} alt="" />
          </Button>
        </>
      )}
    </StyledPagination>
  );
};

export default Pagination;
