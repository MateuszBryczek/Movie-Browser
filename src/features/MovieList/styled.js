import styled from "styled-components";

export const TilesWrapper = styled.div`
  max-width: 1300px;;
  margin: 50px 16px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
`;
