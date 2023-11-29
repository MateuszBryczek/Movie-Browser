import {
  Wrapper,
  Title,
  Button,
  Search,
  ButtonsWrapper,
  TitleWrapper,
} from "./styled";

const Navigation = ({}) => (
  <Wrapper>
    <TitleWrapper>
      <Title>Movies Browser</Title>
      <ButtonsWrapper>
        <Button>MOVIES</Button>
        <Button>PEOPLE</Button>
      </ButtonsWrapper>
    </TitleWrapper>
    <Search></Search>
  </Wrapper>
);
export default Navigation;
