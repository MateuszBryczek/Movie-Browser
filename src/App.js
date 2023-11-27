import { GlobalStyle } from "./common/GlobalStyle";
import Container from "./common/Container";
import Tile from "./common/Tile";

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Tile>
          test
        </Tile>
      </Container>
      </>
  );
}

export default App;
