import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Header } from "../Header";

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 140px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin-top: 40px;
  }
`;

export const DangerImg = styled.img`
  width: 120px;
  height: 120px;
  margin: auto;
`;

export const ErrorHeader = styled(Header)`
  justify-content: center;
  text-align: center;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    margin: 0;
  }
`;

export const StyledParagraph = styled.p`
  width: 426.53px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28.6px;
  text-align: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: auto;
    font-size: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
display: flex;
  width: 181px;
  height: 51px;
  border-radius: 5px;
  padding: 16px, 24px, 16px, 24px;
  background-color: ${({ theme }) => theme.colors.errorPage.link};
  margin: 10px auto 0;
  justify-content: center;
  align-items: center;
  
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;
