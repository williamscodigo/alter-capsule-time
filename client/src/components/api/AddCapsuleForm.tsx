import React from 'react';
import FloatingButton from '../common/FloatingButton';
import { useMutation } from '@apollo/client';
import { ADD_CAPSULE } from '../../utils/mutations';
import Auth from '../../utils/auth';

interface AddCapsuleProps {
  children: React.ReactNode;
}

const AddCapsuleForm: React.FC<AddCapsuleProps> = ({ children }) => {

    // create addBook mutation
  const [addCapsule] = useMutation(ADD_CAPSULE);
  const isLoggedIn = Auth.loggedIn();

  const handleCapsuleSubmit = async (capsuleData: { capsuleMessage: string; share: boolean; unlockDate: string; capsuleAuthor?: string }) => {
    console.log('Capsule Submitted:', capsuleData);
    // Implement API call here to save the capsule
    try {
        //add login user username to capsuleData
        capsuleData = {...capsuleData, capsuleAuthor: Auth.getProfile().data.username};
        
        await addCapsule({ variables: { input: capsuleData } });
  
        // If successful, reload the page
        window.location.assign('/');
        
      } catch (err) {
        //debugger;
        console.error(err);
      }
  };

  return (
    <div style={{ position: 'relative' }}>
      {children}
      {isLoggedIn && <FloatingButton onSubmit={handleCapsuleSubmit} />}
    </div>
  );
};

export default AddCapsuleForm;
