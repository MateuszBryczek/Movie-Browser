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
