import { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/purple-moon.webp';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    min-height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
    color: #fff;
  }
  
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'JetBrains Mono', monospace;
    margin: 0 0 0.5rem;
    line-height: 1.25;
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
    color: #1b89bc;
    text-decoration: none;
  }
  
  a:hover {
    color: #065b83;
    text-decoration: underline;
  }
  
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
  .landing-layout{
    height: 100vh;
    height: 100svh;
    display: grid;
    grid-template-rows: 1fr auto; /* main(1fr) footer(auto) */
  }
  
  .daskboard-layout{
    height: 100vh;
    height: 100svh;
    display: grid;
    grid-template-rows: auto 1fr auto; /* header(auto) main(1fr) footer(auto) */
  }
  
  /* header styles */
  .nav {
    display: flex;
    justify-content: space-between;
  }
  
  /* Background img */
  .background {
    background-image: url(${backgroundImage}); 
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
  }
  
  /* card styles */
  .card {
    background-color: #fff;
    color: #000;
    max-width: 500px;
    min-height: 400px;
    padding: 32px;
    border-radius: 10px;
    margin: 16px 0;
  }
  
  .card-header {
    font-size: 40px;
    text-align: center;
  }
  
  .info-card {
    margin-top: 40px;
  }
  
  /* form styles */
  form > div {
    margin-bottom: 8px;
  }
  
  form label {
    font-weight: 700;
  }
  
  .form-input {
    width: 100%;
  }
  
  .error-message {
    color: red;
    font-style: italic;
  }
  
  /* utility classes */
  
  .block {
    display: block;
  }
  
  .text-center {
    text-align: center;
  }
  
  .primary-color {
    /* color: #1b89bc; */
   color: #C466FF; 
  }
  
  .secondary-color {
    /* color: #065b83; */
    color: #E2B3FF;
  }
  
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 16px;
    
  }
`;

export default GlobalStyles;
