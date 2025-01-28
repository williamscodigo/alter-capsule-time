import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import { GiHealthCapsule } from "react-icons/gi";


const Button = styled.button`
  position: absolute;
  top: 80px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 36px; /* Adjust icon size as needed */
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Modal = styled.div`
  background: #fff ;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;

  .space-buttom {
    margin-bottom: 8px;
  }
  
  label {
    font-weight: 700;
  }
  
  .form-input {
    font-size: 1.125rem;
    width: 100%;
  }

  h2 {
    text-align: center;
  }

   .error-message {
    color: red;
    font-style: italic;
    font-size: 0.8rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    }
`;

interface Props {
  onSubmit: (capsuleData: { capsuleMessage: string; share: boolean; unlockDate: string }) => void;
}

const FloatingButton: React.FC<Props> = ({ onSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [capsuleMessage, setCapsuleMessage] = useState('');
  const [share, setShare] = useState(false);
  const [unlockDate, setUnlockDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (capsuleMessage && unlockDate) {
      onSubmit({ capsuleMessage, share, unlockDate });
      setShowModal(false);
      setCapsuleMessage('');
      setShare(false);
      setUnlockDate('');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
      <GiHealthCapsule />
      </Button>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>Create Capsule</h2>
            <div className='space-buttom'>
            <label htmlFor="message" className='block'>Message: </label>
            <input
            className='form-input'
              type="text"
              name='message'
              id='message'
              placeholder="Message"
              value={capsuleMessage}
              onChange={(e) => setCapsuleMessage(e.target.value)}
            />
            </div>
            <div className='space-buttom'>
            <label htmlFor="unlockDate" className='block'>Unlock Date:</label>
            <input
              type="datetime-local"
              name='unlockDate'
              id='unlockDate'
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
            />
            </div>
            <div className='space-buttom'>
             <label className='block'>
              Share:
              <input
                type="checkbox"
                checked={share}
                onChange={(e) => setShare(e.target.checked)}
              />
            </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className='flex'>
            <StyledButton primary onClick={handleSubmit}>Submit</StyledButton>
            <StyledButton onClick={() => setShowModal(false)}>Cancel</StyledButton>
            </div>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
};

export default FloatingButton;
