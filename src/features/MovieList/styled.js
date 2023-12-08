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

export const IconSpiner = styled.img`
  width: 91px;
  height: 91px;
`;

export const IconWraper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 18px;
  }
`;
