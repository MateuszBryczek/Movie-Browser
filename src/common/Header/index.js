import styled from "styled-components";

export const StyledHeader = styled.h1`
  margin: 40px 0 24px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    font-size: 18px;
    text-align: left;
    line-height: 21.6px;
    margin: 16px 0 8px;
  }
`;
