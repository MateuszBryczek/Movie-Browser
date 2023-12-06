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

        @media (max-width: ${({ theme }) =>theme.breakpoints.mediumDevices}px) {
    width: 100%;    
    margin: 0px;
    display:flex;
    justify-content:center;
    flex-direction:column;  }
    }
`;
