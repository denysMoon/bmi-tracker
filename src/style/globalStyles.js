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
    background-image: url('bg.jpg')
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    margin-left: 1.5rem;
    cursor: pointer;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
