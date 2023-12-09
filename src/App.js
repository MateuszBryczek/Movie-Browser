import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import MovieList from "./features/MovieList/MovieList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./features/PeopleList/PeopleList";
import Navigation from "./common/Navigation";
import useMovieDetails from "./features/MovieDetails/useMovieDetails";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HashRouter>
          <Navigation/>
          <Switch>
            <Route path="/moviedetails/:id" component={useMovieDetails} />
            <Route path="/peoplelist">
              <PeopleList />
            </Route>
            <Route path="/movielist">
              <MovieList />
            </Route>
            <Route path="/">
              <Redirect to="/movielist" />
              <MovieList />
            </Route>
          </Switch>
        </HashRouter>
      </Theme>
    </>
  );
};

export default App;
