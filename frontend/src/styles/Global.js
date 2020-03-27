import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;

export default createGlobalStyle`
  ${styles}
`;
