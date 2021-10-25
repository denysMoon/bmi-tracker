import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

  *{
    box-sizing: border-box;
  }

  html{
    font-size: '24px';
    color: ${({ theme }) => theme.color.text}
  }

  body{
    font-family: 'Inconsolata', monospace;
    background: ${({ theme }) => theme.color.primary.main};
  }
`;

export default GlobalStyle;
