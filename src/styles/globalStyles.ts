import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.3s ease-in-out;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  body, input, button, textarea {
    font: 400 16px Roboto, sans-serif;
  }
`;

export { GlobalStyles };
