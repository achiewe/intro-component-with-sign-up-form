import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        min-height: 100vh;
    }
`;

export default GlobalStyles;
