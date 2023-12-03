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
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
    padding: 0px;
    justify-content: center;
    grid-template-columns: 1fr auto;
  }
`;

// export const ButtonsWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: 1fr 1fr;
//   /* @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
//   } */
// `;

export const LogoWrapper = styled.div`
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
    padding: 0px;
  }
`;

// export const Button = styled.button`
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 15px;
//   width: fit-content;
//   padding: 15px 20px;
//   background-color: transparent;
//   border-color: transparent;
//   border-style: solid 1px;
//   color: ${({ theme }) => theme.colors.header.textPrimary};
//   border-radius: 999px;

//   &:active {
//     border-color: ${({ theme }) => theme.colors.header.textPrimary};
//   }
//   &:hover {
//     border-color: ${({ theme }) => theme.colors.header.textPrimary};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
//     margin: 0px;
//     padding: 0px;
//   }
// `;

export const SearchWrapper = styled.div`
  width: 350px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 330px;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Search = styled.input`
  color: ${({ theme }) => theme.colors.White};
  width: 350px;
  height: 50px;
  border-radius: 999px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 300px;
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

  &.active {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  text-decoration: none;
  /* padding: 15px; */
  /* background-color: ${({ theme }) => theme.colors.sindbad}; */
  display: flex;
  justify-content: center;
  /* font-size: 20px; */
  /* font-weight: 300; */
  /* font-family: "Montserrat", sans-serif; */
  /* margin:0 auto; */
`;
