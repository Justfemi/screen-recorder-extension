import React from 'react';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';
import Logo from '../assets/logs.png';
import './signup.css';

const Signup = () => (
  <div>
    <header>
      <Link to="/">
        <img src={Logo} alt="help me out logo" />
      </Link>
    </header>

    <div className="form-container">
      <div className='head'>
        <h2>Log in or Sign up</h2>
        <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
      </div>

      <form action="#">
        <div className="button">
          <div>
            <img src={google} alt="google logo" />
            <p>Continue with Google</p>
          </div>
        </div>

        <div className="button">
          <div>
            <img src={facebook} alt="facebook logo" />
            <p>Continue with Facebook</p>
          </div>
        </div>

        <div className='divider'>
           <p>OR</p> 
        </div>

        <div className="input-container">
          <p>Email</p>
          <input type="email" placeholder="Enter your email address" />
        </div>

        <div className="input-container">
          <p>Password</p>
          <input type="password" placeholder="Enter your Password" />
        </div>

        <div className="input-container">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
)

export default Signup