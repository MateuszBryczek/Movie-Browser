import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Container from "./common/Container";
import Pagination from "./common/Pagination";
import MovieList from "./features/MovieList/MovieList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorPage from "./common/ErrorPage";
import {
  StyledNavLink,
  Wrapper,
  Search,
  TitleWrapper,
  SearchWrapper,
  NavList,
} from "./styled";
import { ReactComponent as Camera } from "./images/camera.svg";
import PeopleList from "./features/PeopleList";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HashRouter>
          <nav>
            <Wrapper>
              <TitleWrapper>
                <Camera />
                <NavList>
                  <li>
                    <StyledNavLink to="/movielist">MOVIES</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="/peoplelist">PEOPLE</StyledNavLink>
                  </li>
                </NavList>
              </TitleWrapper>
              <SearchWrapper>
                <Search placeholder="Search for movies..." />
              </SearchWrapper>
            </Wrapper>
          </nav>
          <Switch>
            <Route path="/peoplelist">
              <PeopleList />
            </Route>
            <Route path="/movielist">
              <MovieList />
            </Route>
          </Switch>
        </HashRouter>
      </Theme>
    </>
  );
};

export default App;
