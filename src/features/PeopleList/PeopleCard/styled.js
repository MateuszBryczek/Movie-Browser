import styled from "styled-components";

export const Image = styled.img`
    height: 231px;
    width: 176px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.div`
    display: flex;
    max-height: 64px;
    align-items: flex-start;
`;

export const Name = styled.h1`
    max-width: 176px;
    font-weight: 500;
    line-height: 130%;
    font-size: 22px;
    text-align: center;
    margin: 0;
`;