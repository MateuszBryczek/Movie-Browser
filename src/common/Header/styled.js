import styled from "styled-components";

export const StyledHeader = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2 px;
  max-height: 45px;
  margin-left: 276px;
  margin-top: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin-left: 50px;
  };
`;
