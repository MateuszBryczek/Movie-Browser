import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/leftVector.svg";
// import {ReactComponent as RightVector} from "../../images/rightVector.svg";
import css from "styled-components";

export const StyledPagination = styled.div`
  text-align: center;
  margin: 12px;
`;

const Vector = styled.img`
  height: 11px;
  width: 7px;
  &:disabled {
    color: ${({ theme }) => theme.colors.pager.inactiveText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    height: 8px;
    width: 5px;
  }
`;

export const LeftVector = styled(Vector)`
  margin-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
  }
`;

export const RightVector = styled(Vector)`
  margin-left: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.pager.background};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.pager.disabled};
    color: ${({ theme }) => theme.colors.pager.inactiveText};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    padding: 8px 12px 8px 12px;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    font-size: 10px;
  }
`;

export const SpanPrimary = styled(Span)`
  font-weight: 600;
`;

export const SpanSecondary = styled(Span)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.pager.textSecondary};
`;

export const Text = styled.p`
  display: inline-block;
  margin-left: 16px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Arrows= styled.span `
display:flex;
margin:0 2px;`


export const StyledVector = styled(Arrow)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.pager.rightVector};
  width: auto;

  ${({ left }) => left && css`
      transform: rotate(180deg);
    `}

  *:disabled & {
    color: ${({ theme }) => theme.colors.pager.inactiveText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 0;
  }

`;
