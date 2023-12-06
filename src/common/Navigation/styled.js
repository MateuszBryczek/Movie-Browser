import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Wrapper = styled.nav`
  max-width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.header.textPrimary};
  display: grid;

  grid-template-columns: auto 300px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0px 120px 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    width: 100%;
    height: 142px;
    padding: 0px 60px 0px;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    justify-content: center;
    justify-items: center;
  }
`;
export const TitleWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 17px;
    height: 17px;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: flex;
  width: 220px;
  height: 48px;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 120px;
    height: 17px;
  }
`;

export const LogoName = styled.p`
  width: 168px;
  height: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  margin: 0;
  letter-spacing: -1.5px;

  
  &:hover {
    color: ${({ theme }) => theme.colors.header.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 95px;
    height: 17px;
    font-size: 13px;
    line-height: 16.9px;
    letter-spacing: -0.5px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: center;
  padding-left: 0;
  margin: 0;
`;


export const StyledListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  width: fit-content;
  background-color: transparent;

  padding: 8px 24px;
  border-radius: 24px;
  border: 2px solid transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.header.secondary};
  }
  &.active {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
    color: ${({ theme }) => theme.colors.header.textPrimary};
  }

  color: ${({ theme }) => theme.colors.header.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    padding: 8px 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    padding: 8px 12px;
    font-size: 12px;
    line-height: 18px;
  }
`;