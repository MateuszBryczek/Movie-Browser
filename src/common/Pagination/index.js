import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  StyledPagination,
  Button,
  SpanPrimary,
  SpanSecondary,
  Text,
  StyledVector,
  Arrows,
  StyledRightVector,
} from "./styled";
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
          <Arrows>
            <StyledVector />
            {resize() ? "First" : <StyledVector />}
          </Arrows>
        </Button>
        <Button disabled={page === "1"} onClick={() => previousPage()}>
          <Arrows>
            <StyledVector />
            {resize() ? "Previous" : ""}
          </Arrows>
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
          <Arrows>
            {resize() ? "Next" : ""}
            <StyledRightVector />
          </Arrows>
        </Button>
        <Button
          disabled={+page === checkLocationPathname()}
          onClick={() => lastPage(checkLocationPathname())}
        >
          <Arrows>
            {resize() ? "Last" : <StyledRightVector />}
            <StyledRightVector />
          </Arrows>
        </Button>
      </>
    </StyledPagination>
  );
};

export default Pagination;
