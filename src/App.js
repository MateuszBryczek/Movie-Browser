import { GlobalStyle } from "./common/GlobalStyle";
import Theme from "./common/theme";
import Container from "./common/Container";
import Header from "./common/Header"
import Tile from "./common/Tile";
import Footer from "./common/Footer";
import Navigation from "./Navigation/Navigation";

export const App = () => {
  return (
    <>
    <Theme>
    <GlobalStyle />
    <Navigation/>
    <Header />
      <Container>    
        <Tile>
          test
        </Tile>
      </Container>
      <Footer />
      </Theme>
    </>
  );
}

export default App;
