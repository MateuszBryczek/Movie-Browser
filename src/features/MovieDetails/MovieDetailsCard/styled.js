import styled from "styled-components";

export const PosterTile = styled.div`
    width: 100%;
    flex-shrink: 0px;
    background-color: ${({ theme }) => theme.colors.header.primary};
`;

export const Poster = styled.img`
    width: 1368px;
    height: 769px;
    flex-shrink: 0;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.header.primary};
    font-size: 64px;
    font-weight: 600;
    line-height: 120%;
`;

export const Rating = styled.a`
    color: ${({ theme }) => theme.colors.header.primary};
    font-size: 30px;
    font-weight: 500;
    line-height: 130%;
`;

export const Votes = styled.a`
    color: ${({ theme }) => theme.colors.header.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
`;

export const MovieTile = styled.div`
    background: ${({ theme }) => theme.colors.tile.primary};
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    display: flex;
    padding: 40px;
    align-items: flex-start;
    gap: 40px;
`;