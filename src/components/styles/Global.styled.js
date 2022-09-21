import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Outfit', sans-serif;
    font-size: 0.9375rem;
    font-weight: 400;
    background-color: ${({ backgroundColor }) => backgroundColor || "none"};
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    margin-top: 0;
  }

  p {
    margin-bottom: 1rem;
  }

  @keyframes fade-in-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;