import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    /* width: 100%; */
    /* padding: 20px 20px 20px 20px; */
    display:grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
