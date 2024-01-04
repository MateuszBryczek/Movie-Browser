import styled from "styled-components";
import { TilesWrapper } from "../../../MovieList/styled";

export const MoviesForPeopleTilesWrapper = styled(TilesWrapper)`
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
