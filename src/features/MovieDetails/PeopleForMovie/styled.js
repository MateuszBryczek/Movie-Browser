import styled from "styled-components";
import { TilesWrapper } from "../../PeopleList/styled";

export const PeopleForMovieTilesWrapper = styled(TilesWrapper)`
 justify-content: space-evenly;
 grid-template-columns: repeat(6, auto);

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    grid-template-columns: repeat(5, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    grid-template-columns: repeat(2, auto);
  }
`;
