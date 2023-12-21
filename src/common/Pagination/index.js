import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
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
  decrement,
  goToFirstPage,
  goToLastPage,
  increment,
} from "../../features/MovieList/movieSlice";



const Pagination = () => {
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

  return (
    <StyledPagination>
      <LeftButton onClick={() => dispatch(goToFirstPage())}>
        <LeftVector src={leftVector} alt="" />
        {isMediaQuery() ? "First" : <LeftVector src={leftVector} alt="" />}
      </LeftButton>
      <LeftButton onClick={() => dispatch(decrement())}>
        <LeftVector src={leftVector} alt="" />
        {isMediaQuery() ? "Previous" : ""}
      </LeftButton>

      <Text>
        <SpanSecondary> Page </SpanSecondary>
        <SpanPrimary> 1 </SpanPrimary>
        <SpanSecondary> of </SpanSecondary>
        <SpanPrimary> 500 </SpanPrimary>
      </Text>

      <RightButton onClick={() => dispatch(increment())}>
        {isMediaQuery() ? "Next" : ""}
        <RightVector src={rightVector} alt="" />
      </RightButton>
      <RightButton onClick={() => dispatch(goToLastPage())}>
        {isMediaQuery() ? "Last" : <RightVector src={rightVector} alt="" />}
        <RightVector src={rightVector} alt="" />
      </RightButton>
    </StyledPagination>
  );
};

export default Pagination;
