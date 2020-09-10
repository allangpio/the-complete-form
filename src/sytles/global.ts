import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f5f0;
    color: #636262;
    -webkit-font-smoothing: antialiased;
    height: 100vw;
    overflow: hidden;
  }

  body, button {
    font: 16px Oswald, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  input {
    background: #f5f5f0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 100px;
    font: 14px Oswald, sans-serif;
    padding: 0.2rem .8rem;
    color: #636262;
  }


  button {
    cursor: pointer;
    color: #f5f5f0;

  }
`;
