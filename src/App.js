import { GlobalStyle } from "./common/GlobalStyle";
import Container from "./common/Container";
import Header from "./common/Header"
import Tile from "./common/Tile";
import Footer from "./common/Footer";

export const App = () => {
  return (
    <>
    <GlobalStyle />
    <Header />
      <Container>
        <Tile>
          test
        </Tile>
      </Container>
      <Footer />
    </>
  );
}

export default App;
