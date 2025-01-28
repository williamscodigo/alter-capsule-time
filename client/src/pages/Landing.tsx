import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import StyledButton from '../components/StyledButton';
import { Link } from 'react-router-dom'; // Link to navigate to other pages

export default function Landing() {
const [newVisitor, setNewVisitor] = useState(true);

return (
    <div className='landing-layout'>
          <main className='grid-2'>
        <div className='info-card'> 
          <h1 className='primary-color'>Welcome to Capsule Time</h1>
          <p>In this application you can send a message to your future you! how cool is that. If that doesn't catch your attention, how about learning more about <span className='secondary-color'>public capsules</span> ? We know you're curious, so login or create an account.</p>

          <Link to="/AboutUs" style={{color: "#1a73e8", textDecoration: "none", fontWeight: "bold"}}>Learn more about us</Link> {/* Link to navigate to other pages */}
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
        ) 
}