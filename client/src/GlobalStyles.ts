import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    min-height: 100%;
  }
  
  body {
    font-family: ${(props) => (props.theme.fonts.body)};
    font-size: 1rem;
    color: #fff;
  }
  
  
  h1,
  h2 {
    font-family: ${(props) => (props.theme.fonts.heading)};
    color: ${(props) => (props.theme.colors.primary)};
    line-height: 1.25;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.8rem;
  }
  
  h1 {
    font-size: 2.25rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  h5 {
    font-size: 1.25rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    margin: 0 0 1rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }
  
  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  label {
    display: inline-block;
  }
  
  input,
  select,
  textarea,
  button {
    margin: 0;
  }

  a {
    color: ${(props) => (props.theme.colors.secondary)};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }


  /* utility classes */
  
  .block {
    display: block;
  }
  
  .text-center {
    text-align: center;
  }

  .bold {
    font-weight: 700;
  }

  .italic {
    font-style: italic;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .underline {
    text-decoration: underline;
  }

  .small {
    font-size: 0.8rem;
  }

  .medium {
    font-size: 1.25rem;
  }

  .large {
    font-size: 1.5rem;
  }
  
`;

export default GlobalStyles;
