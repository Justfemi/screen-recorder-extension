import React from 'react'
// import Logo from './components/assets/logs.png';
import Logo from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='box-container'>
        <div className='box'>
          <Link to="/">
            <img src={ Logo } alt="help me out logo" width={150}/>
          </Link>
        </div>

        <div className='box'>
          <h3>menu</h3>

          <p>home</p>
          <p>converter</p>
          <p>how it Works</p>
        </div>

        <div className='box'>
          <h3>about us</h3>

          <p>about</p>
          <p>contact us</p>
          <p>privacy policy</p>
        </div>

        <div className='box'>
          <h3>screen record</h3>

          <p>browser window</p>
          <p>desktop</p>
          <p>application</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer