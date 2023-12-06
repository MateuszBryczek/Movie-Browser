import styled from "styled-components";

export const StyledHeader = styled.header`
  font-size: 36px;
  font-weight: 900;
  line-height: 43.2 px;
  max-height: 45px;
  margin-left: 50px;
  margin-top: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 22px;
    margin:20px 20px 0px;
    text-align:left;
    justify-self: start;
    padding-left:20px;
  };
`;
