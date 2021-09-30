import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: larger;
  }
`;

export default GlobalStyle;