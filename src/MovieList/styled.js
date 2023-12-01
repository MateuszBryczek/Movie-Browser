import styled from "styled-components";

// export const Wrapper = styled.div`
//   max-width: 1368px;
//   height: 1391px;
//   margin-top: 30px;
//   margin-left: 276px;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
//     justify-content: center;
//   }
// `;
export const TilesWrapper = styled.div`
  max-width: 1368px;
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
