import styled from 'styled-components';

const LandingLayout = styled.div`
    height: 100vh;
    height: 100svh;
    display: grid;
    // justify-content: center;
    // align-items: center;
    grid-template-rows: 1fr auto; /* main(1fr) footer(auto) */

    /* two column grid */
    .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 16px;
    
  }

  .card {
    background-color: #fff;
  color: #000;
  max-width: 500px;
  min-height: 416px;

  padding: 32px;
  border-radius: 10px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  }

  .card-header {
    font-size: 40px;
    text-align: center;
  }

  
  /* form styles */

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form > div {
    margin-bottom: 8px;
  }
  
  form label {
    font-weight: 700;
  }
  
  .form-input {
    font-size: 1.125rem;
    width: 100%;
  }
  
  .error-message {
    color: red;
    font-style: italic;
    font-size: 0.8rem;
  }
  
  /* display signup or login form - middle of page */
  .forms-card {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

export default LandingLayout;
