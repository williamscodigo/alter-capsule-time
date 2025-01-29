import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_CAPSULE } from '../../utils/mutations';
import StyledButton from '../common/StyledButton';

interface RemoveCapsuleProps {
    capsuleId: string;
  }
  
  export default function RemoveCapsuleForm({ capsuleId }: RemoveCapsuleProps) {
    const navigate = useNavigate();
    const [removeCapsule, { loading, error }] = useMutation(REMOVE_CAPSULE);
  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      try {
        const { data } = await removeCapsule({ variables: { capsuleId } });
  
        if (data?.removeCapsule?._id) {
          alert('Capsule deleted successfully!');
          //reaload base on current URL
          window.location.href = window.location.href;

        } else {
          alert('Failed to delete capsule.');
        }
      } catch (err) {
        console.error('Error deleting capsule:', err);
        alert('An error occurred. Please try again.');
      }
    }
  
    return (
      <form className="" onSubmit={handleSubmit}>
        <StyledButton type='submit' buttonType='delete'>{loading ? 'Deleting...' : 'Delete Capsule'}</StyledButton>
        {error && <p style={{color: 'red'}}>Error: {error.message}</p>}
      </form>
    );
  }