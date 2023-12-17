import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import MovieList from "./features/MovieList/MovieList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./features/PeopleList/PeopleList";
import Navigation from "./common/Navigation";
import MovieDetails from "./features/MovieDetails/MovieDetails";
import PersonDetails from "./features/PersonDetails/PersonDetails";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HashRouter>
          <Navigation/>
          <Switch>
            <Route path="/peopleDetails/:id" component={PersonDetails} />
            <Route path="/peoplelist">
              <PeopleList />
            </Route>
            <Route path="/movieDetails/:id" component={MovieDetails} />
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