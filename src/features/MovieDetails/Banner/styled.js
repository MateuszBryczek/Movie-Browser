import styled from "styled-components";

export const Background = styled.section`
    position: relative;
    z-index: -2;
    width: 100%;
    background-color: black;
    overflow: auto;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    text-align: center;
    max-width: 1368px;
    min-width: 319px; 
    background: 
        linear-gradient(
            270deg,
            #000000 0.01%,
            rgba(0, 0, 0, 0.873268) 2.5%,
            rgba(0, 0, 0, 0.159921) 12.88%,
            rgba(0, 0, 0, 0) 25.68%
        ),
        linear-gradient(
            90deg,
            #000000 0.01%,
            rgba(0, 0, 0, 0.873268) 2.5%,
            rgba(0, 0, 0, 0.159921) 12.88%,
            rgba(0, 0, 0, 0) 25.68%
        ),
        linear-gradient(
            180deg,
            #000000 0%,
            rgba(0, 0, 0, 0.689555) 4.66%,
            rgba(0, 0, 0, 0.439033) 9.34%,
            rgba(0, 0, 0, 0.20628) 15.16%,
            rgba(0, 0, 0, 0) 24.22%
        ),
        linear-gradient(
            189.44deg,
            rgba(0, 0, 0, 0) 58.48%,
            rgba(0, 0, 0, 0.106473) 63.17%,
            rgba(0, 0, 0, 0.235359) 68.85%,
            rgba(0, 0, 0, 0.492821) 78.08%,
            rgba(0, 0, 0, 0.740286) 85.86%,
            #000000 92.87%
        );
`;

export const Poster = styled.img`
    width: 100%;
    position: relative;
    z-index: -1;
`;

export const Section = styled.div`
    color: ${({ theme }) => theme.colors.header.textPrimary};
    margin-left: 16px;
    position: absolute;
    bottom: 1px;
     display: grid;
    grid-template-rows: 1fr;
     margin-bottom: 26px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.header.textPrimary};
    font-size: 64px;
    font-weight: 600;
    line-height: 120%;
`;

export const RatingSection = styled.div`
    margin-top: 25px;
    gap: 10px;
    display:flex;
    flex-direction: column;
`;

export const RatingWrapper = styled.div`
display:flex;
flex-direction: row;
`

export const Rating = styled.a`
    color: ${({ theme }) => theme.colors.header.textPrimary};
    font-size: 30px;
    font-weight: 500;
    line-height: 130%;
    
`;

export const Votes = styled.p`
text-align: left;
    color: ${({ theme }) => theme.colors.header.textPrimary};
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
`;