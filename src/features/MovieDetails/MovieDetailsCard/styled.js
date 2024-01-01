import styled from "styled-components";

export const MovieTile = styled.div`
    background: ${({ theme }) => theme.colors.tile.primary};
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    display: inline-flex;
    padding: 40px;
    align-items: flex-start;
    gap: 40px;
    max-width: 1368px;
    margin: 0px auto;
    margin-top: 64px;
`;

export const TileWrapper = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const Poster = styled.img`
    max-width: 312px;
    max-height: 464px;
    border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
`;

export const Date = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 26.4px;
`;

export const Section = styled.div`

`;

export const Production = styled.p`

`;

export const Relase = styled.p`

`;

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 8px;
  }
`;

export const Rating = styled.a`

`;

export const Votes = styled.a`

`;

export const Descryption = styled.div`

`;

export const Star = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 16px;
    height: 16px;
  }
`;