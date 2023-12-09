import {
  StyledNavLink,
  Wrapper,
  TitleWrapper,
  NavList,
  StyledListItem,
  StyledLogo,
  Logo,
  LogoName,
} from "./styled";
import logo from "../../images/logo.svg";
import SearchBar from "./SearchBar";

const Navigation = () => (
  <Wrapper>
    <TitleWrapper>
      <StyledLogo to="/movielist">
        <Logo src={logo} alt="Movies Browser" />
        <LogoName>Movie Browser</LogoName>
      </StyledLogo>
      <NavList>
        <StyledListItem>
          <StyledNavLink to="/movielist">MOVIES</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/peoplelist">PEOPLE</StyledNavLink>
        </StyledListItem>
      </NavList>
    </TitleWrapper>
    <SearchBar />
  </Wrapper>
);

export default Navigation;
