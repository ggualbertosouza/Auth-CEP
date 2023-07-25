import { createGlobalStyle } from 'styled-components'

import { theme } from './Theme'

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
        width: 100vw;
        height: 100vh;
        background-color: ${theme.colors.gray};
    }
`