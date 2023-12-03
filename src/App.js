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
  LogoWrapper,
  SearchWrapper,
  NavList,
  TestDiv
} from "./styled";
import { ReactComponent as Camera } from "./images/camera.svg";
import PeopleList from "./features/PeopleList";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HashRouter>
          <Wrapper>
            <TitleWrapper>
                <Camera />
              <nav>
                <NavList>
                  <li>
                    <StyledNavLink to="/movielist">MOVIES</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="/peoplelist">PEOPLE</StyledNavLink>
                  </li>
                </NavList>
                <Switch>
                  <Route path="/peoplelist">
                    <PeopleList />
                  </Route>
                  <Route path="/movielist">
                    <MovieList />
                  </Route>
                </Switch>
              </nav>
            </TitleWrapper>
            <SearchWrapper>
              <Search placeholder="Search for movies..." />
            </SearchWrapper>
          </Wrapper>
        </HashRouter>
      </Theme>
    </>
  );
};

export default App;
