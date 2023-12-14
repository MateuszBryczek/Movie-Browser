import styled from "styled-components";

export const PosterTile = styled.div`
    width: 1920px;
    height: 770px;
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