import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logs.png';
import Profile from '../assets/profile.png';
import vidcard1  from '../assets/vidcard-1.png';
import vidcard2  from '../assets/vidcard-2.png';
import vidcard3  from '../assets/vidcard-3.png';
import vidcard4  from '../assets/vidcard-4.png';
import arrowDown from '../assets/arrow-down.png';
import search from '../assets/search.png';
import './videos.css';
 
const Allvideos = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={ Logo } alt="help me out logo" />
        </Link>

        <Link to='/signup' className='box'>
          <img src={ Profile } alt='profile circle' className='profile'/>
          <h3>John Mark</h3>
          <img src={ arrowDown } alt='arrow-down'/>
        </Link>
      </header>
      <div className='wrapper'>
        <div className='heading'>
          <div>
            <h1>Hello, John Mark </h1>
            <p>Here are your recorded videos</p>
          </div>

          <div className='input-container'>
            <input type='search' placeholder='Search for a particular video'/>
            <img src={ search } alt='search' className='search-icon' />
          </div>
        </div>
        <hr />
        <div className='boxs'>
          <p>Recent files</p>
          <div className='line'>
            <div className='image-container'>
              <Link to='/single-video'>
                <img src={ vidcard1 } alt='video-card' />
              </Link>
            </div>

            <div className='image-container'>
              <Link to='/single-video'>
                <img src={ vidcard2 } alt='video-card' />
              </Link>
            </div>
          </div>
        </div>

        <div className='boxs'>
          <p>Files from last week </p>
          <div className='line'>
            <div className='image-container'>
              <Link to='/single-video'>
                <img src={ vidcard3 } alt='video-card' />
              </Link>
            </div>

            <div className='image-container'>
              <Link to='/single-video'>
                <img src={ vidcard4 } alt='video-card' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allvideos