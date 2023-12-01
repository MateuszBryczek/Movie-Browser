import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "../../features/MovieList";
import PeopleList from "../../PeopleList";

import {
  Wrapper,
  Button,
  Search,
  ButtonsWrapper,
  TitleWrapper,
  LogoWrapper,
  SearchWrapper,
} from "./styled";
import { ReactComponent as Camera } from "../camera.svg";

const Navigation = ({}) => (
  <HashRouter>
    <Wrapper>
      <TitleWrapper>
        <LogoWrapper>
          <Camera />
        </LogoWrapper>
        <nav>
          <ButtonsWrapper>
            <Link to="/movielist">
              <Button>MOVIES</Button>
            </Link>
            <Button>PEOPLE</Button>
          </ButtonsWrapper>
          <Switch>
            <Route path="/peoplelist">
              <PeopleList />
            </Route>
            <Route path="/movielist">
              <MovieList />
            </Route>
            <Route path="/">
              <Redirect to="/movielist" />
            </Route>
          </Switch>
        </nav>
      </TitleWrapper>
      <SearchWrapper>
        <Search placeholder="         Search for movies..." />
      </SearchWrapper>
    </Wrapper>
  </HashRouter>
);
export default Navigation;
