import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import MovieList from "./features/MovieList/MovieList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./features/PeopleList/PeopleList";
import Navigation from "./common/Navigation";
import MovieDetails from "./features/Details/MovieDetails/MovieDetails";
import PersonDetails from "./features/Details/PersonDetails/PersonDetails"

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HashRouter>
          <Navigation/>
          <Switch>
            <Route path="/people/details/:id" component={PersonDetails} />
            <Route path="/people">
              <PeopleList />
            </Route>
            <Route path="/movie/details/:id" component={MovieDetails} />
            <Route path="/movie">
              <MovieList />
            </Route>
            <Route path="/">
              <Redirect to="/movie" />
              <MovieList />
            </Route>
          </Switch>
        </HashRouter>
      </Theme>
    </>
  );
};

export default App;