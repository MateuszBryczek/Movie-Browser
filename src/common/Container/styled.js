import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 20px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 288px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 0px 16px 0px;
  }
`;
