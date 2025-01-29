import styled from 'styled-components';

const CapsuleLayout = styled.div`
background-color: #fff;
  color: #000;
  max-width: 100%;
  min-height: auto;

  padding: 32px;
  border-radius: 10px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
margin-bottom: 16px;

    .author {
        font-size: 1.5rem;
    }

    .dates {
    font-family: ${(props) => (props.theme.fonts.heading)};
    font-size: 0.5rem;
    font-style: italic;
    }

    .message {
        font-size: 1.5rem;
        color: ${(props) => (props.theme.colors.secondary)};
    }

    
`;

export default CapsuleLayout;
