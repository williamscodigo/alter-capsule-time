import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage.main});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export default Background;
