// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';
import CapsuleLayout from './CapsuleLayout';
import StyledButton from './StyledButton';

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
}

const CapsuleList: React.FC<CapsuleListProps> = ({ capsules, title }) => {
  if (!capsules.length) {
    return <h3>No Capsules Yet</h3>;
  }

  return (
    <div>
      <h3 style={{fontSize: '2rem'}}>{title}</h3>
      {capsules &&
      /* should i limit capsules to display here? or backend (specificly for shared/public capsules queried?) - ALSO I DO NEED TO CHECK DATE TO ULOCKDATE TO DISPLAY   */
        capsules.map((capsule: any) => (
            <CapsuleLayout key={capsule._id}>
          <div>
            <h4 className="author">
              {capsule.capsuleAuthor} <br />
            </h4>
            <div className="message">
              <p>{capsule.capsuleMessage}</p>
            </div>
            <p className='date'>
                created this capsule on {capsule.createdAt}
            </p>  
            {/* not sure if a single capsule page will be created! */}
            <Link to={`/capsule/${capsule._id}`}>
              <StyledButton>View Capsule</StyledButton>
            </Link>
          </div>
          </CapsuleLayout>
        ))}
    </div>
  );
};

export default CapsuleList;
