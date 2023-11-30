import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Container from "./common/Container";
import Header from "./common/Header";
import Tile from "./common/Tile";
import Footer from "./common/Footer";
import Navigation from "./Navigation";
import MovieList from "./MovieList";

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Container>
          <Navigation />
          <MovieList />
        </Container>
        {/* </Container> */}
        <Footer />
      </Theme>
    </>
  );
};

export default App;
