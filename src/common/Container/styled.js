import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0 20px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    grid-template-columns: 1fr;
  }
`;
