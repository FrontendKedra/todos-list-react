import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    background-color: hsl(0, 0%, 90%);
    font-family: "Montserrat", sans-serif;
    margin-top: -20px;
    }
`;
