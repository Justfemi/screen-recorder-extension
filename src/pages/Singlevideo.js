import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logs.png';
import Profile from '../assets/profile.png';
import arrowDown from '../assets/arrow-down.png';
import editBtn from '../assets/edit.png';
import videoCard from '../assets/video-card.png';
import whatsApp from '../assets/whatsapp.svg';
import telegram from '../assets/telegram.svg';
import faceBook from '../assets/facebook.svg';
import copy from '../assets/copy.svg';
import './videos.css';

const Singlevideo = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={ Logo } alt="help me out logo" />
        </Link>

        <Link to='/signup' className='box'>
          <img src={ Profile } alt='profile circle'/>
          <h3>John Mark</h3>
          <img src={ arrowDown } alt='arrow-down'/>
        </Link>
      </header>
      <div className='container'>
        <p className='top-text'> Home / Recent videos / How To Create A Facebook Ad Listing</p>
        <div className='top'>
          <h5>How To Create A Facebook Ad Listing</h5>
          <img src={editBtn} alt='edit-btn' />
        </div>
        <div className='image-container'>
          <img src={videoCard} alt='vid-card'/>
        </div>
      
        <div className='input-bag'>
          <div className='input-box new'>
            <input type='email' placeholder='enter email of receiver'/>
            <button className='btn-new send'>Send</button>
          </div>

          <div className='input-box diff'>
            <input type='text' placeholder='https://www.helpmeout/Untitled_Vid_209'/>
            <div className='btn-new'>
              <img src={ copy } alt='copy'/>
              Copy URL
            </div>
          </div>
        </div>
        <div className='social-box'>
          <p className='title'>Share your video</p>
          <div className='socials'>
            <div className='wrap'>
              <img src={ faceBook } alt='socail icon'/>
              <p>Facebook</p>
            </div>

            <div className='wrap'>
              <img src={ whatsApp } alt='socail icon'/>
              <p>WhatsApp</p>
            </div>

            <div className='wrap'>
              <img src={ telegram } alt='socail icon'/>
              <p>Telegram</p>
            </div>
          </div>
        </div>
        <div className='transcribe'>
          <p>Transcript</p>
          <select className='select'>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <div className='transcription'>
            <div className='row'>
              <h4>0:01</h4>
              <h4 className='non'>
                First step. Open Facebook on your desktop or mobile device and locate "
                Marketplace" in the left-hand menu or at the top of the First step. 
                Open Facebook on your desktop or mobile device and locate "Marketplace" 
                in the left-hand menu or at the top of the 
              </h4>
            </div>

            <div className='row'>
              <h4>0:15</h4>
              <h4 className='non'>
                First step. Open Facebook on your desktop or mobile device and locate "
                Marketplace" in the left-hand menu or at the top of the First step. 
                Open Facebook on your desktop or mobile device and locate "Marketplace" 
                in the left-ha
              </h4>
            </div>

            <div className='row'>
              <h4>0:30</h4>
              <h4 className='non'>
                First step. Open Facebook on your desktop or mobile device and locate "
                Marketplace" in the left-hand menu or at the top of the
              </h4>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlevideo