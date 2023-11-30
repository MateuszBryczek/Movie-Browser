import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1920px;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.header.textPrimary};
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 600px auto;
  justify-content: space-between;
  align-items: center;
  padding: 0px 250px 0px;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
export const TitleWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px 200px;
  justify-content: space-between;
`;

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  width: fit-content;
  padding: 15px 20px;
  background-color: transparent;
  border-color: transparent;
  border-style: solid 1px;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  border-radius: 999px;

  &:active: {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.header.textPrimary};
  }
`;

export const Search = styled.input`
  color: ${({ theme }) => theme.colors.White};
  width: 350px;
  height: 50px;
  border-radius: 999px;
  margin-right: 200px;
`;
