import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  width:100%;
  height:100%;
  background-color: ${({ theme }) => theme.colors.background};
  //na razie zmieniam to tak,
  //żeby container byl na totalnie wszystko
`;
