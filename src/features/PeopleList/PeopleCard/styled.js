import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Image = styled.img`
  height: 231px;
  width: 176px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    height: 178px;
    width: 120px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  max-width: 176px;
  font-weight: 500;
  line-height: 130%;
  font-size: 22px;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    line-height: 18.2px;
    font-size: 14px;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Role = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.tile.textSecondary};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const PersonDetailsLink = styled(NavLink)`
  text-decoration: none;
`;

export const InsideWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 8px;
`;
