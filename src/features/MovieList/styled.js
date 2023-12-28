import styled from "styled-components";
import {StyledHeader} from "../../common/Header";

export const MovieHeader = styled(StyledHeader)`
  width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    width: 1020px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    width: 672px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 100%;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieTile = styled.article`
  width: 324px;
  min-height: 650px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: scale(105%);
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 500px;
    min-height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    min-height: 201px;
    width: 100%;
  }
`;
