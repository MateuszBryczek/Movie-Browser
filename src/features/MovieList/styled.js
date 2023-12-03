import styled from "styled-components";

export const TilesWrapper = styled.div`
  max-width: 1368px;
  max-height: 1391px;
  margin: 350px 50px 50px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    height: 142px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    justify-items: center;
  }
`;

export const StyledHeader = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2 px;
  max-height: 45px;
  margin-left: 276px;
  margin-top: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin-left: 50px;
  }
`;
import styled from "styled-components";

export const TilesWrapper = styled.div`
  width: 1368px;
  height: 1391px;
  margin-top: 30px;
  margin: 50px 50px 50px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 100%;
    height: 142px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    justify-items: center;
  }
`;

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
