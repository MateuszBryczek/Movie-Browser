import styled from "styled-components";

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  grid-template-rows: auto 1fr;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    grid-template-columns: auto 1fr;
    width: 100%;
  }
`;

export const Poster = styled.img`
  max-width: 292px;
  max-height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 180px;

    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  margin: 12px 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 16px;
    line-height: 20.8px;
    margin: 0;
  }
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.tile.textSecondary};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const Tags = styled.div`
  width: auto;
  font-size: 14px;
  line-height: 19.6px;
  height: 36px;
  border-radius: 5px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  background-color: ${({ theme }) => theme.colors.tile.secondary};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    height: 16px;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 11px;
  }
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

export const Star = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const Votes = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.tile.textSecondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-grow: 1;
  align-items: end;
  margin-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    flex-grow: 0;
    margin-top: 8px
  }
`;
