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
  StyledVector,
  Arrows,
  StyledRightVector,
} from "./styled";
import rightVector from "./../../images/rightVector.svg";
import leftVector from "./../../images/leftVector.svg";
import {
  nextMoviePage,
  previousMoviePage,
  goToFirstMoviePage,
  goToLastMoviePage,
  selectMoviePage,
  selectTotalPages,
} from "../../features/Slices/movieSlice";

import {
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  goToLastPeoplePage,
  selectPeoplePage,
  selectTotalPeoplePages,
} from "../../features/Slices/peopleSlice";
import { useResize } from "../../features/resize";

const Pagination = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const resize = useResize();

  const moviePage = useSelector(selectMoviePage);
  const peoplePage = useSelector(selectPeoplePage);
  const totalMoviePages = useSelector(selectTotalPages);
  const displayTotalMoviePages = totalMoviePages > 500 ? 500 : totalMoviePages;
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const displayTotalPeoplePages =
    totalPeoplePages > 500 ? 500 : totalPeoplePages;

  return (
    <StyledPagination>
      {location.pathname === "/movielist" ? (
        <>
          <Button
            disabled={moviePage === 1}
            onClick={() => dispatch(goToFirstMoviePage())}
          >
            <Arrows>
              <StyledVector />
              <StyledVector />
              {resize() ? "First" : " "}
            </Arrows>
          </Button>
          <Button
            disabled={moviePage === 1}
            onClick={() => dispatch(previousMoviePage())}
          >
            <Arrows>
              <StyledVector />
              {resize() ? "Previous" : ""}
            </Arrows>
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
            <Arrows>
              {resize() ? "Next" : ""} <StyledRightVector />
              <StyledRightVector />
            </Arrows>
          </Button>
          <Button
            disabled={moviePage === displayTotalMoviePages}
            onClick={() => dispatch(goToLastMoviePage())}
          >
            <Arrows>
              {resize() ? "Last" : <StyledRightVector />}
              <StyledRightVector />
            </Arrows>
          </Button>
        </>
      ) : (
        <>
          <Button
            disabled={peoplePage === 1}
            onClick={() => dispatch(goToFirstPeoplePage())}
          >
            <Arrows>
              <LeftVector src={leftVector} alt="" />
              {resize() ? "First" : <LeftVector src={leftVector} alt="" />}
            </Arrows>
          </Button>
          <Button
            disabled={peoplePage === 1}
            onClick={() => dispatch(previousPeoplePage())}
          >
            <StyledVector />
            {resize() ? "Previous" : ""}
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
            {resize() ? "Next" : ""}
            <StyledRightVector />
          </Button>
          <Button
            disabled={peoplePage === displayTotalPeoplePages}
            onClick={() => dispatch(goToLastPeoplePage())}
          >
            <Arrows>
              <StyledRightVector />
              {resize() ? "Last" : <StyledRightVector />}
            </Arrows>
          </Button>
        </>
      )}
    </StyledPagination>
  );
};

export default Pagination;
