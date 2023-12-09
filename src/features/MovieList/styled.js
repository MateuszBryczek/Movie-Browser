import styled from "styled-components";

export const TilesWrapper = styled.div`
  max-width: 1368px;
  margin: 50px 16px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    max-width: 256px;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 50px 16px;
  }
`;

export const MovieTile = styled.article`
  max-width: 324px;
  max-height: 650px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: scale(105%);
    transition: 0.3s;
    cursor: pointer;
  }
`;