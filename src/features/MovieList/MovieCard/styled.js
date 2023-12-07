import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width:100%;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  flex-shrink: 0;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  font-size: 22px;
  font-weight: 900;
  line-height: 22px;
  margin: 15px 0px 5px;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.tile.textSecondary};
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin: 0px;
`;

export const Tags = styled.div`
  width: 77px;
  height: 36px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.tile.textPrimary};
  background-color: ${({ theme }) => theme.colors.tile.secondary};
  margin: 0px 0px 20px;
`;

export const TagsWrapper = styled.div`
  padding: 10px 0px 20px;
`;

export const Rating = styled.a`
  font-size: 16px;
  font-weight: 900;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.tile.textPrimary};
`;

export const Votes = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.tile.textSecondary};
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
