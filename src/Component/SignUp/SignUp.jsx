import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './SignUp.css';

const SignUp = () => {
  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }

    return () => {
      if (signUpButton && signInButton && container) {
        signUpButton.removeEventListener('click', () => {
          container.classList.add('right-panel-active');
        });

        signInButton.removeEventListener('click', () => {
          container.classList.remove('right-panel-active');
        });
      }
    };
  }, []);

  return (
    
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" ref={signInButtonRef}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" ref={signUpButtonRef}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
