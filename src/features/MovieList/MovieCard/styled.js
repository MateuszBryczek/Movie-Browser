import styled from "styled-components";

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    flex-shrink: 0;
    border-radius: 5px;
`;

export const Description = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
`;

export const Date = styled.h2`
    color: ${({ theme }) => theme.colors.tile.textSecondary};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export const Tags = styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 10px;
`;

export const Rating = styled.a`
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
`;

export const Votes = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;