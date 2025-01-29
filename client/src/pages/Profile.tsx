import { useEffect, useState } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ProfileLayout, MainContent } from '../components/layout/ProfileLayout';
import CapsuleList from '../components/common/CapsuleList';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME, {
    skip: !Auth.loggedIn(), // Skip query if user is not logged in
  });

  const [privateCapsules, setPrivateCapsules] = useState<any[]>([]);
  const [publicCapsules, setPublicCapsules] = useState<any[]>([]);
  const [nextCapsuleInfo, setNextCapsuleInfo] = useState<{
    futureCount: number;
    nextUnlockDate: string | null;
    previewMessage: string | null;
  }>({
    futureCount: 0,
    nextUnlockDate: null,
    previewMessage: null,
  });

  useEffect(() => {
    if (data) {
      const now = new Date();
  
      // Separate and sort private and public capsules by unlockDate
      const privateCaps = data.me.capsules
        .filter((capsule: any) => capsule.share === false && new Date(capsule.unlockDate) < now)
        .sort((b: any, a: any) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime());
  
      const publicCaps = data.me.capsules
        .filter((capsule: any) => capsule.share === true && new Date(capsule.unlockDate) < now)
        .sort((b: any, a: any) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime());
  
      // Future capsules (unlockDate not yet met)
      const futureCapsules = data.me.capsules.filter(
        (capsule: any) => new Date(capsule.unlockDate) > now
      );
  
      // Find the next capsule to unlock
      const nextCapsule = futureCapsules.sort(
        (a: any, b: any) =>
          new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime()
      )[0];
  
      setPrivateCapsules(privateCaps);
      setPublicCapsules(publicCaps);
      setNextCapsuleInfo({
        futureCount: futureCapsules.length,
        nextUnlockDate: nextCapsule
          ? new Date(nextCapsule.unlockDate).toLocaleString()
          : null,
        previewMessage: nextCapsule ? nextCapsule.capsuleMessage.slice(0, 4) + '...' : null,
      });
  
      // **Update local storage with the user data**
      localStorage.setItem('user', JSON.stringify(data.me));
    }
  }, [data]);
  

  if (!Auth.loggedIn()) {
    return (
      <ProfileLayout>
        <Header />
        <MainContent>
          <p>You need to be logged in to see this content!</p>
        </MainContent>
        <Footer />
      </ProfileLayout>
    );
  }

  if (loading) {
    return (
      <ProfileLayout>
        <Header />
        <MainContent>
          <p>Loading...</p>
        </MainContent>
        <Footer />
      </ProfileLayout>
    );
  }

  if (error) {
    return (
      <ProfileLayout>
        <Header />
        <MainContent>
          <p>Sorry, there was an error fetching data.</p>
        </MainContent>
        <Footer />
      </ProfileLayout>
    );
  }

  return (
    <ProfileLayout>
      <Header />
      <MainContent>
        <div>
          <h2>{data.me.username}'s Profile Page</h2>
          <div style={{ margin: '40px 0' }} className='card'>
            <h3>Future Capsules</h3>
            <p><span className='bold'>Number of Capsules:</span>{' '}<span> {nextCapsuleInfo.futureCount}</span></p>
            <p>
              <span className='bold'>Next Unlock Date:</span>{' '}
              <span className='italic'>{nextCapsuleInfo.nextUnlockDate || 'No future capsules'}</span>
            </p>
            <p>
              <span className='bold'>Preview Message:</span>{' '}
              <span className='italic'>{nextCapsuleInfo.previewMessage || 'No preview available'}</span>
            </p>
          </div>
          <CapsuleList
            capsules={privateCapsules}
            title="My Private Capsules"
            deleteFlag={true}
          />
          <CapsuleList
            capsules={publicCapsules}
            title="My Public Capsules"
            deleteFlag={true}
          />
        </div>
      </MainContent>
      <Footer />
    </ProfileLayout>
  );
};

export default Profile;
