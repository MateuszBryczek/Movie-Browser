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
    max-width: 178px;
    font-weight: 500;
    line-height: 130%;
    font-size: 22px;
    margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    line-height: 18.2px;
    font-size: 14px;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  text-align: center;
`;

export const Role = styled.a`
    color: ${({ theme }) => theme.colors.tile.textSecondary};
`;

export const PersonDetailsLink = styled(NavLink)`
    text-decoration: none;
`;