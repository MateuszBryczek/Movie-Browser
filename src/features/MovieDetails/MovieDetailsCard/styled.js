import styled from "styled-components";

export const MovieTile = styled.div`
    background: ${({ theme }) => theme.colors.tile.primary};
    color: ${({ theme }) => theme.colors.tile.textPrimary};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    display: flex;
    flex-direction: row;
    padding: 40px;
    align-items: flex-start;
    gap: 40px;
`;

export const PosterWrapper = styled.div `
`
export const TextWrapper = styled.div `
`

export const Poster = styled.img`

`;

export const Title = styled.p`
font-size: 36px;
font-weight:600;
line-height: 43.2px;
`;

export const Date = styled.p`
font-size: 22px;
line-height: 26.4px;
font-weight:400;

`;

export const Section = styled.div`
display:grid;
grid-gap:11px;

`;

export const Production = styled.p`

`;

export const Relase = styled.p`

`;

export const TagsWrapper = styled.div`
display:grid;
grid-gap:16px;

`;

export const RatingsWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
height: 29px;
width:185px;
align-items: center;
`

export const Rating = styled.a`
font-size: 22px;
font-weight: 500;
line-height: 28.6px;
`;

export const Votes = styled.a`

`;

export const Descryption = styled.div`
margin-top: 20px;
font-weight: 400;
font-size: 20px;
line-height: 32px;
`;