import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 0px 16px 0px 24px;
  height: 50px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    height: 44px;
  }
`;

export const SearchImg = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    height: 16px;
    width: 16px;
  }
`;

export const Search = styled.input`
  color: ${({ theme }) => theme.colors.searchBar.textPrimary};
  width: 100%;
  max-height: 50px;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  outline: none;
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;
