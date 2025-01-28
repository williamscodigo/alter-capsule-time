import { Link } from 'react-router-dom';
import { type MouseEvent} from 'react';
import Auth from '../utils/auth';
import Navbar from './Navbar';
import StyledButton from './StyledButton';

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //remove user data from local storage
    localStorage.removeItem("user");
    
    // Logs the user out by calling the logout method from Auth
    Auth.logout();
  };
  return (
    <header>
      <Navbar>
        <div>
          <Link style={{color: '#C466FF'}} to="/">
            <h1>Capsule Time</h1>
          </Link>
        </div>
        <div>
          <ul className='nav'>
            <li>
              <Link to="/profile">
                <StyledButton primary>Profile</StyledButton>
              </Link>
            </li>
            <li>
              <Link to="/capsules"><StyledButton primary>Capsules</StyledButton></Link>
            </li>
            <li>
              <Link to="/about"><StyledButton primary>About</StyledButton></Link>
            </li>
            <li>
            <StyledButton onClick={logout}>Logout</StyledButton>
            </li>
          </ul>
        </div>
        </Navbar>
    </header>
  );
};

export default Header;
