import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styles */
  body {
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.medium};
    background-image: url(${(props) => props.theme.backgroundImages.main}) no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  /* Links */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      color: ${(props) => props.theme.colors.dark};
    }
  }

  /* Buttons */
  button {
    font-family: ${(props) => props.theme.fonts.body};
    cursor: pointer;
  }
`;

export default GlobalStyles;
