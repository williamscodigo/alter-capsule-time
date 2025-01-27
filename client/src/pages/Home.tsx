import Auth from '../utils/auth';
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function Home() { 

  return (
      <>
        {Auth.loggedIn() ? <Dashboard /> : <Landing />}
      </>
  )
}
