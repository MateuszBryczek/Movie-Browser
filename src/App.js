import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Container from "./common/Container";
import Header from "./common/Header";
import Navigation from "./Navigation";
import Pagination from "./common/Pagination";
import MovieList from "./features/MovieList/MovieList";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Container>
          <Navigation />
          <Header title="Popular movies" />
            <MovieList />
          <Pagination />
        </Container>
      </Theme>
    </>
  );
};

export default App;
