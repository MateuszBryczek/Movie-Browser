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

const Navigation = () => (
  <Wrapper>
    <TitleWrapper>
      <LogoWrapper>
        <Camera />
      </LogoWrapper>
      <ButtonsWrapper>
        <Button>MOVIES</Button>
        <Button>PEOPLE</Button>
      </ButtonsWrapper>
    </TitleWrapper>
    <SearchWrapper><Search placeholder="         Search for movies..." /></SearchWrapper>
    
  </Wrapper>
);
export default Navigation;
