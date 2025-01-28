import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ProfileLayout, MainContent } from '../components/layout/ProfileLayout';

//This will be capsules
// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

//might need the query me to be added in backend - ref code activity 26
//import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  

  return (
    <ProfileLayout>
      <Header />
      <MainContent>
        {Auth.loggedIn() ? (
          <div>
          <h2>Profile Page</h2>
          <p>manage capsule - delete, not allowed to open (blurry)</p>
          <div>display user capsules</div>
          </div>
        ) : ( 
          <p>you need to be logged in to see this content!</p>
        )}
      </MainContent>
      <Footer />
      </ProfileLayout>
  );
};

export default Profile;
