import { Link } from 'react-router-dom';
import { type MouseEvent} from 'react';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Logs the user out by calling the logout method from Auth
    Auth.logout();
  };
  return (
    <header className="nav">
        <div>
          <Link className="" to="/">
            <h1>Capsule Time</h1>
          </Link>
          <p className="">Get into the mind of a programmer.</p>
        </div>
        <div>
          {/* Checking if the user is logged in to conditionally render profile link and logout button */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Retrieving the logged-in user's profile to display the username */}
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <h2>YOU NEED TO LOGIN!</h2>
            </>
          )}
        </div>
    </header>
  );
};

export default Header;
