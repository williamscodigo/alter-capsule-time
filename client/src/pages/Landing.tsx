import { useState } from 'react';
import LoginForm from '../components/api/LoginForm';
import SignupForm from '../components/api/SignupForm';
import Footer from '../components/layout/Footer';
import StyledButton from '../components/common/StyledButton';
import LandingLayout from '../components/layout/LandingLayout';
import { Link } from 'react-router-dom'; // Link to navigate to other pages

export default function Landing() {
const [newVisitor, setNewVisitor] = useState(true);

return (
    <LandingLayout>
        <main className='grid-two-column'>
        <div className='info-card'> 
          <h1>Welcome to Capsule Time</h1>
          <p>In this application, you can send a message to your future self! How cool is that? If that doesn't catch your attention, how does reading about public capsules sound? We know you're curious—log in or create an account to find out more.</p>

          <p>At the heart of this project is a desire to create meaningful connections—whether it's with your future self or others. Time Capsule Messenger isn't just an app; it's a way to preserve moments, emotions, and aspirations for the future. By blending technology with sentimentality, we've built a platform that transforms fleeting thoughts into timeless keepsakes. Every feature is designed to make your journey through time engaging and memorable.</p>

          <Link to="/AboutUs" style={{color: "#1a73e8", textDecoration: "none", fontWeight: "bold"}}>Learn more about us</Link> {/* Link to navigate to other pages */}
        </div>
        <div className='forms-card'>
          <div>
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
              buttonType='default'
              type='button' 
              onClick={() => setNewVisitor(!newVisitor)}
              style={{marginLeft: '8px'}}>
            {newVisitor ? 'Sign Up' : 'Login'}
            </StyledButton>
          </p>
          </div>
        </div>
        </main>
        <Footer />
    </LandingLayout>
        ) 
}