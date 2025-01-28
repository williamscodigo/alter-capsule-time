import styled from 'styled-components';

// Prevent the 'buttonType' prop from being passed to the DOM
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'buttonType', // Do not forward 'buttonType' to the DOM
})<{ buttonType?: 'primary' | 'default' | 'delete' }>`
  background-color: ${(props) =>
    props.buttonType === 'primary'
      ? props.theme.colors.primaryButton
      : props.buttonType === 'delete'
      ? props.theme.colors.deleteButton
      : props.theme.colors.defaultButton};
  color: ${(props) =>
    props.buttonType === 'primary' || props.buttonType === 'delete'
      ? '#fff'
      : '#000'};
  border: none;
  border-radius: 4px;
  padding: ${(props) =>
    props.buttonType === 'primary' || props.buttonType === 'delete'
      ? '10px 20px'
      : '8px 16px'};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.buttonType === 'primary'
        ? props.theme.colors.primaryButtonHover
        : props.buttonType === 'delete'
        ? props.theme.colors.deleteButtonHover
        : props.theme.colors.defaultButtonHover};
  }
`;

export default StyledButton;
