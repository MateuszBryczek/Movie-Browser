import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.textPrimary};
        background: ${({ theme }) => theme.colors.background};     
        margin:0 auto;  

        @media (max-width: ${({ theme }) =>theme.breakpoints.mediumDevices}px) {
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;  }
    }
`;
