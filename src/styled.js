import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Wrapper = styled.div`
  max-width: 1920px;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.header.textPrimary};
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 400px 250px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0px 120px 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 100%;
    height: 142px;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
`;
export const TitleWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
    padding: 0px;
    justify-content: center;
    grid-template-columns: 1fr auto;
  }
`;

export const SearchWrapper = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 330px;
    display: grid;
  }
`;

export const Search = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  max-width: 200px;
  max-height: 50px;
  padding-left: 50px;
  border: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 200px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  width: fit-content;
  padding: 15px 20px;
  background-color: transparent;
  border-color: transparent;
  border-style: solid 1px;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  border-radius: 999px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0px;
    padding: 0px;
  }

  &.active,
  &.visited {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
