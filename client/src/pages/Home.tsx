import Auth from '../utils/auth';
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function Home() { 

  return ( // Login Form UI with conditional rendering
      <>
        {Auth.loggedIn() ? <Dashboard /> : <Landing />}
      </>
  )
}
