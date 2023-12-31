import styled from "styled-components"

export const PersonTile = styled.div`
    background: ${({ theme }) => theme.colors.tile.primary};
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin: auto 16px;
    max-width: 1368px;
    margin-top: 56px;
`;

export const TileWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 40px;
    row-gap: 24px;
    margin: 0px auto;
    padding: 40px;
`;

export const Image = styled.img`
    max-width: 399px;
    max-height: 564px;
    border-radius: 5px;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;
    margin: 0px;
    margin-bottom: 16px;
`;

export const Section = styled.section`
    color: ${({ theme }) => theme.colors.tile.textSecondary};
    display: inline-flex;
    flex-flow: column wrap;
    gap: 8px;
    font-size: 18px;
    font-weight: 400;
`;

export const InfoSecion = styled.div`
    display: flex;
    gap: 3px;
`;

export const Date = styled.a`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    display: flex;
`;

export const BirthPlace = styled.a`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    display: flex;
`;

export const Description = styled.a`
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    display: flex;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    text-align: justify;
    margin-top: 16px;
`;