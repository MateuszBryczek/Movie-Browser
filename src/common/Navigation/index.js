import {
  StyledNavLink,
  Wrapper,
  Search,
  TitleWrapper,
  SearchWrapper,
  NavList,
  StyledListItem,
  SearchImg,
  StyledLogo,
  Logo,
  LogoName,
} from "./styled";
import logo from "../../images/logo.svg";
import search from "./../../images/search.svg";

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
    <SearchWrapper>
      <SearchImg src={search} alt="" />
      <Search placeholder="Search for movies..." />
    </SearchWrapper>
  </Wrapper>
);

export default Navigation;
