import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    html{
        font-size: 62.5%;
    }
    body{
        width: 100%;
        height: 100vh;
        background-color: #121212;
    }
`