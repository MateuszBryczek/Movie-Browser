import styled from "styled-components";

export const MovieTile = styled.div`
  background: ${({ theme }) => theme.colors.tile.primary};
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  padding: 40px;
`;

export const MovieTiLeConstainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 260px;
    height: auto;
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    line-height: 120%;
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
  }
`;

export const Date = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 26.4px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 17px;

    color: ${({ theme }) => theme.colors.detailsPages.textSecondary};
  }
`;

export const Section = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const Label = styled.div`
  display: flex;
  gap: 10px;
`;

export const LabelAdditionalData = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${({ theme }) => theme.colors.detailsPages.label};
`;

export const AdditionalData = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 8px;
  }
`;

export const RatingsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  height: 29px;
  width: 185px;
  align-items: center;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    grid-template-columns: repeat(2, auto) 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    grid-gap: 4px;
  }
`;

export const StarImg = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    font-weight: 600;
    line-height: 17px;
  }
`;

export const SmallRating = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
`;

export const Votes = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const Descryption = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    line-height: 130%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
