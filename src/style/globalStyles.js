import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

  *{
    box-sizing: border-box;
  }

  html{
    font-size: '24px'
  }

  body{
    font-family: 'Inconsolata', monospace;
  }
`;

export default GlobalStyle;
