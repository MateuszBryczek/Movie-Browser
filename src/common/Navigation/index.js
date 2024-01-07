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
      <StyledLogo to="/movie">
        <Logo src={logo} alt="Movies Browser" />
        <LogoName>Movie Browser</LogoName>
      </StyledLogo>
      <NavList>
        <StyledListItem>
          <StyledNavLink to="/movie">MOVIES</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/people">PEOPLE</StyledNavLink>
        </StyledListItem>
      </NavList>
    </TitleWrapper>
    <SearchBar />
  </Wrapper>
);

export default Navigation;
