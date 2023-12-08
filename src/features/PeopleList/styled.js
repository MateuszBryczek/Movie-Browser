import styled from "styled-components";

export const TilesWrapper = styled.div`
  max-width: 1368px;
  height: 1391px;
  margin-top: 30px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 100%;
    height: 142px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
  }
`;

export const PeopleTile = styled.div`
  max-width: 208px;
  max-height: 339px;
  border-radius: 5px;
  gap: 12px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(105%);
    transition: 0.3s;
    cursor: pointer;
  }
`;