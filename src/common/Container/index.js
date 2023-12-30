import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;
