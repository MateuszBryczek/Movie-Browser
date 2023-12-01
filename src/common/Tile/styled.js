import styled from "styled-components";

export const StyledTile = styled.article`
  max-width: 324px;
  max-height: 650px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};
`;