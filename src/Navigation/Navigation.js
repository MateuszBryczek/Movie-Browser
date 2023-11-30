import {
  Wrapper,
  Button,
  Search,
  ButtonsWrapper,
  TitleWrapper,
} from "./styled";
import { ReactComponent as Camera } from "../camera.svg";

const Navigation = ({}) => (
  <Wrapper>
    <TitleWrapper>
      <Camera />
      <ButtonsWrapper>
        <Button>MOVIES</Button>
        <Button>PEOPLE</Button>
      </ButtonsWrapper>
    </TitleWrapper>
    <Search placeholder="         Search for movies..." />
  </Wrapper>
);
export default Navigation;
