import styled from 'styled-components';

// Styled component
const StyledButton = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? '#0056b3' : '#f8f9fa')};
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#003d81' : '#e2e6ea')};
  }
`;

export default StyledButton;