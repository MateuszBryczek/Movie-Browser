import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1920px;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.header.textPrimary};
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 300px auto;
  justify-content: space-between;
  align-items: center;
  padding: 0px 250px 0px;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
  /* padding: 0px 20px 0px 100px; */
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;
export const TitleWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px 1fr;
`;

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 15px 15px;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.header.textPrimary};
  border-style: solid 3px;
  color: ${({ theme }) => theme.colors.header.textPrimary};
  border-radius: 30%;
`;

export const Search = styled.input`
  color: ${({ theme }) => theme.colors.White};
  width: 250px;
  height: 50px;
  border-radius: 30%;
  margin-right: 200px;
`;
