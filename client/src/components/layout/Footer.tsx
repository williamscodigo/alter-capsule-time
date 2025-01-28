import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if(window.history.length > 1) { //Check if there is a previous page in the history stack
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <footer className="">
      <div className="">
        {location.pathname !== '/' && (
          <button
            className=""
            onClick={handleGoBack}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className='text-center'>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
          🩷
          </span>{' '}
          by Kristin, Michael and Jose.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
