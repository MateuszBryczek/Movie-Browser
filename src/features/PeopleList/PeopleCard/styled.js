import styled from "styled-components";

export const Image = styled.img`
  height: 231px;
  width: 176px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    height: 178px;
    width: 120px;
  }
`;

export const Name = styled.h1`
  font-weight: 500;
  line-height: 28.6px;
  font-size: 22px;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    line-height: 18.2px;
    font-size: 14px;
  }
`;
