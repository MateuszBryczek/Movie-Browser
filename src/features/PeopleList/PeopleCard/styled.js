import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Image = styled.img`
    height: 231px;
    width: 176px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.div`
    display: flex;
    max-height: 64px;
    align-items: flex-start;
    justify-content: center;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    max-width: 176px;
    font-weight: 500;
    line-height: 130%;
    font-size: 22px;
    text-align: center;
    margin: 0;
`;

export const Role = styled.a`
    color: ${({ theme }) => theme.colors.tile.textSecondary};
`;

export const PersonDetailsLink = styled(NavLink)`
    text-decoration: none;
`;