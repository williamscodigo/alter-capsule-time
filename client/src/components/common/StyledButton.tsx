import styled from 'styled-components';

// Prevent the 'primary' prop from being passed to the DOM and set default value to false
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'primary', // Do not forward 'primary' to the DOM
})<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ?? false ? props.theme.colors.primaryButton : props.theme.colors.secondaryButton)};
  color: ${(props) => (props.primary ?? false ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  padding: ${(props) => (props.primary ?? false ? '10px 20px' : '8px 16px')};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ?? false ? props.theme.colors.primaryButtonHover : props.theme.colors.secondaryButtonHover)};
  }
`;

export default StyledButton;
