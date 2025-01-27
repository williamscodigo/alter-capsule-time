import Footer from '../components/Footer';
import Header from '../components/Header';

//This will be capsules
// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

//might need the query me to be added in backend - ref code activity 26
//import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  

  return (
    <main className=''>
      <Header />
      <main>
        {Auth.loggedIn() ? (
          <p>you are logged in!</p>
        ) : ( 
          <p>you need to be logged in to see this content!</p>
        )}
      </main>
      <Footer />
    </main>
  );
};

export default Profile;
