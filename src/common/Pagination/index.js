import { useSelector } from "react-redux";
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
import { selectTotalPages } from "../../features/Slices/movieSlice";

import { selectTotalPeoplePages } from "../../features/Slices/peopleSlice";
import { useResize } from "../../features/resize";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../features/queryParameter";
import { pageQueryParamName } from "../../features/queryParamName";

const Pagination = () => {
  const location = useLocation();
  const resize = useResize();
  const replaceQueryParameter = useReplaceQueryParameter();

  const totalMoviePages = useSelector(selectTotalPages);
  const displayTotalMoviePages = totalMoviePages > 500 ? 500 : totalMoviePages;
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const displayTotalPeoplePages =
    totalPeoplePages > 500 ? 500 : totalPeoplePages;

  const page = useQueryParameter(pageQueryParamName);

  const checkLocationPathname = () => {
    if (location.pathname === "/movie") {
      return displayTotalMoviePages;
    }
    return displayTotalPeoplePages;
  };

  const nextPage = () => {
    replaceQueryParameter({ key: pageQueryParamName, value: +page + 1 });
  };

  const previousPage = () => {
    replaceQueryParameter({ key: pageQueryParamName, value: +page - 1 });
  };

  const firstPage = () => {
    replaceQueryParameter({ key: pageQueryParamName, value: 1 });
  };

  const lastPage = last => {
    replaceQueryParameter({ key: pageQueryParamName, value: last });
  };

  return (
    <StyledPagination>
      <>
        <Button disabled={page === "1"} onClick={() => firstPage()}>
          <LeftVector src={leftVector} alt="" />
          {resize() ? "First" : <LeftVector src={leftVector} alt="" />}
        </Button>
        <Button disabled={page === "1"} onClick={() => previousPage()}>
          <LeftVector src={leftVector} alt="" />
          {resize() ? "Previous" : ""}
        </Button>
        <Text>
          <SpanSecondary> Page </SpanSecondary>
          <SpanPrimary> {page} </SpanPrimary>
          <SpanSecondary> of </SpanSecondary>
          <SpanPrimary>{checkLocationPathname()}</SpanPrimary>
        </Text>
        <Button
          disabled={+page === checkLocationPathname()}
          onClick={() => nextPage()}
        >
          {resize() ? "Next" : ""}
          <RightVector src={rightVector} alt="" />
        </Button>
        <Button
          disabled={+page === checkLocationPathname()}
          onClick={() => lastPage(checkLocationPathname())}
        >
          {resize() ? "Last" : <RightVector src={rightVector} alt="" />}
          <RightVector src={rightVector} alt="" />
        </Button>
      </>
    </StyledPagination>
  );
};

export default Pagination;
