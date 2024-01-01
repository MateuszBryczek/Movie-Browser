import styled from "styled-components";

export const Background = styled.section`
  position: relative;
  z-index: -2;
  width: 100%;
  background-color: black;
  overflow: auto;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  max-width: 1368px;
  min-width: 319px;
  background: linear-gradient(
      270deg,
      #000000 0.01%,
      rgba(0, 0, 0, 0.873268) 2.5%,
      rgba(0, 0, 0, 0.159921) 12.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 0.01%,
      rgba(0, 0, 0, 0.873268) 2.5%,
      rgba(0, 0, 0, 0.159921) 12.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
`;

export const Poster = styled.img`
  width: 100%;
  position: relative;
  z-index: -1;
  max-height: 770px;
`;

export const Section = styled.div`
  color: ${({ theme }) => theme.colors.header.textPrimary};
  margin-left: 16px;
  position: absolute;
  bottom: 1px;
  display: grid;
  grid-template-rows: 1fr;
  margin-bottom: 26px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.header.textPrimary};
  margin: 0;
  font-size: 64px;
  font-weight: 600;
  line-height: 76.8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
    font-size: 54px;
    line-height: 120%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const RatingSection = styled.div`
  margin-top: 12px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    margin-top: 8px;
    flex-direction: row;
    align-items: end;
  }
`;

export const StarImg = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 16px;
    height: 16px;
  }
`;

export const RatingsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
  width: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 4px;
  }
`;

export const Rating = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  font-size: 30px;
  font-weight: 500;
  line-height: 39px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 14px;
    line-height: 18.2px;
    height: 18px;
  }
`;

export const SmallRating = styled.p`
  margin: 0;
  padding-bottom: 4px;
  height: auto;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    padding-bottom: 2px;
  }
`;

export const Votes = styled.p`
  text-align: left;
  margin: 0;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    padding-bottom: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    padding-bottom: 2px;
  }
`;
