import styled from "styled-components";

export const NoResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoResultsImg = styled.img`
  width: 668px;
  height: 508.63px;


  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 288px;
    height: 300px;
  }
`;
