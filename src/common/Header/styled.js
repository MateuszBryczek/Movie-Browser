import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2 px;
  max-height: 45px;
  text-align: left;
  /* justify-self: start; */
  padding:56px 0 16px;
  margin: auto 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 22px;
    text-align: left;
  }
`;
