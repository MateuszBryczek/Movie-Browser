import styled from "styled-components";

export const PersonTile = styled.div`
  background: ${({ theme }) => theme.colors.tile.primary};
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  margin: auto 16px;
  max-width: 1368px;
  margin-top: 56px;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    padding: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    padding: 8px;
  }
`;

export const TileWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 0;
`;

export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
    width: 260px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 240px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 116px;
    height: 163px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  line-height: 43.2px;
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    line-height: 120%;
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
  }
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
  flex-wrap: wrap;
  column-gap: 11px;
  row-gap: 2px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    column-gap: 4px;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${({ theme }) => theme.colors.detailsPages.label};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const AdditionalData = styled.p`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
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
