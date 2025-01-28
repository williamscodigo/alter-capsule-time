import { Link } from 'react-router-dom';
import { type MouseEvent} from 'react';
import Auth from '../../utils/auth';
import NavbarLayout from './NavbarLayout';
import StyledButton from '../common/StyledButton';

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
      <NavbarLayout>
        <div>
          <Link style={{color: '#C466FF'}} to="/">
            <h1>Capsule Time</h1>
          </Link>
        </div>
        <div>
          <ul className='nav'>
            <li>
              <Link to="/">
                <StyledButton buttonType='primary'>Home</StyledButton>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <StyledButton buttonType='primary'>Profile</StyledButton>
              </Link>
            </li>
            <li>
              <Link to="/about"><StyledButton buttonType='primary'>About</StyledButton></Link>
            </li>
            <li>
            <StyledButton buttonType='default' onClick={logout}>Logout</StyledButton>
            </li>
          </ul>
        </div>
        </NavbarLayout>
    </header>
  );
};

export default Header;
