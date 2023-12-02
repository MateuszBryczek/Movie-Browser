import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "../../features/PeopleList";
import MovieList from "../../features/MovieList";
import ErrorPage from "../ErrorPage";

import {
  StyledNavLink,
  Wrapper,
  Search,
  // ButtonsWrapper,
  TitleWrapper,
  LogoWrapper,
  SearchWrapper,
  NavList,
} from "./styled";
import { ReactComponent as Camera } from "../../images/camera.svg";

const Navigation = ({}) => (
  <HashRouter>
    <Wrapper>
      <TitleWrapper>
        <LogoWrapper>
          <Camera />
        </LogoWrapper>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/movielist">MOVIES</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/peoplelist">PEOPLE</StyledNavLink>
            </li>
          </NavList>
          {/* <Switch>
            <Route path="/peoplelist">
              <PeopleList />
            </Route>
            <Route path="/movielist">
              <MovieList />
            </Route> 
                      <Route path="/">
              <ErrorPage />
            </Route>
          </Switch> */}
        </nav>
      </TitleWrapper>
      <SearchWrapper>
        <Search placeholder="         Search for movies..." />
      </SearchWrapper>
    </Wrapper>
  </HashRouter>
);
export default Navigation;
