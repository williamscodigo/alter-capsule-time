import CapsuleLayout from '../layout/CapsuleLayout';
import StyledButton from './StyledButton';
import formatDateTime from '../../utils/formatDateTime';
import RemoveCapsuleForm from '../api/RemoveCapsuleForm';

interface Capsule {
    _id: string;
    capsuleMessage: string;
    capsuleAuthor: string;
    share: boolean;
    unlockDate: Date;
    createdAt: Date;
}

interface CapsuleListProps {
  capsules: Capsule[];
  title: string;
  deleteFlag?: boolean;
}

const CapsuleList: React.FC<CapsuleListProps> = ({ capsules, title, deleteFlag = false }) => {
  if (!capsules.length) {
    return (
      <>
      <h3 style={{fontSize: '2rem'}}>{title}</h3>
      <CapsuleLayout>
        <h3>No Capsules Yet</h3>;
      </CapsuleLayout>
      </>
    )
  }

  return (
    <div style={{margin: '40px 0'}}>
      <h3 style={{fontSize: '2rem'}}>{title}</h3>
      {capsules &&
      /* should i limit capsules to display here? or backend (specificly for shared/public capsules queried?) - ALSO I DO NEED TO CHECK DATE TO ULOCKDATE TO DISPLAY   */
        capsules.map((capsule: any) => (
            <CapsuleLayout key={capsule._id}>
          <div>
            <h4 className="author bold">
              {capsule.capsuleAuthor} <br />
            </h4>
              <p className='message'>{capsule.capsuleMessage}</p>
              <div className='dates'>  
            <p>
                <span className='bold'>unlocked date:</span> {formatDateTime(capsule.unlockDate)}
            </p> 
            <p>
                <span className='bold'>created date:</span> {formatDateTime(capsule.createdAt)}
            </p>
            </div> 
            {/* should we handle comments on capsules! */}
            {deleteFlag ? <RemoveCapsuleForm capsuleId={capsule._id} /> : <StyledButton>Add Comment</StyledButton>}
          </div>
          </CapsuleLayout>
        ))}
    </div>
  );
};

export default CapsuleList;
