import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Paperlogy';
    src: url('/src/assets/fonts/Paperlogy-4Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    text-align: left;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('/src/assets/fonts/Paperlogy-6SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    text-align: left;
  }

  @font-face {
    font-family: 'Paperlogy';
    src: url('/src/assets/fonts/Paperlogy-7Bold.ttf') format('truetype');
    font-weight: 700; /* Bold 설정 */
    font-style: normal;
    text-align: left;
  }

  body {
    margin: 0;
    background: #f5f5f5;
    font-family: 'Paperlogy', sans-serif;
    font-weight: 400;
  }
`;