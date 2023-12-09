import styled from "styled-components";

export const TilesWrapper = styled.div`
  width: 1368px;
  height: 1391px;
  margin-top: 30px;
  margin: 50px auto;
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