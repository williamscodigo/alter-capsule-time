import { useState } from 'react';
import Auth from '../utils/auth';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StyledButton from '../components/StyledButton';

export default function Home() { 
  const [newVisitor, setNewVisitor] = useState(true);

  return ( // Login Form UI with conditional rendering
    <div>
      {Auth.loggedIn() ?
      (
        <div className='home-layout'>
        <Header />
        <main>
        <h3>main content</h3>

        <p>display public capsules here!...</p>
      </main>
      <Footer />
      </div>
    ) : (
        <div className='landing-layout'>
          <main className='grid-2'>
        <div className='info-card'> 
          <h1 className='primary-color'>Welcome to Capsule Time</h1>
          <p>In this application you can send a message to your future you! how cool is that. If that doesn't caught you attention how do reading about <span className='secondary-color'>public capsules</span> sound?, we know you want to know, login or create an account.</p>

          <div>more content...</div>
        </div>
        <div className='forms-card'>
          {newVisitor ? (
            // Login Form 
            <LoginForm />
          ) : (
            // Sign Up Form
            <SignupForm />
          )}

          {/* Toggle Login/Signup */}
          <p>
            {newVisitor ? "Don't have an account?" : 'Already have an account?'}
            <StyledButton 
              type='button' 
              onClick={() => setNewVisitor(!newVisitor)}
              style={{marginLeft: '8px'}}>
            {newVisitor ? 'Sign Up' : 'Login'}
            </StyledButton>
          </p>
        </div>
        </main>
        <Footer />
      </div>
        ) }
    </div>
  );
}
