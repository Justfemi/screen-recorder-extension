import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logs.png';
import newCard from '../assets/video-card-2.png';
import editBtn from '../assets/edit.png';
import whatsApp from '../assets/whatsapp.svg';
import telegram from '../assets/telegram.svg';
import faceBook from '../assets/facebook.svg';
import Footer from '../components/Footer/Footer';
import './videos.css';
import './style.css';

const Recording = () => {
  return (
    <>
      <div className='container'>
        <header>
          <Link to="/">
            <img src={ Logo } alt="help me out logo" />
          </Link>

          <div className='nav-link'>
            <Link to='#features'>Features</Link>
            <Link to='#howitworks'>How It Works</Link>
          </div>

          <Link to='/signup'>
            <h3>get started</h3>
          </Link>
        </header>
        <section className='record-hero'>
          <div className='video-share'>
            <h1>Your video is ready</h1>
            <p>Name</p>
            <div className='name'>
              <h3>Untitled_Video_20232509</h3>
              <img src={editBtn} alt='edit-btn' />
            </div>
            <div className='input-box new'>
              <input type='email' placeholder='enter email of receiver'/>
              <button className='btn send'>Send</button>
            </div>

            <h2>Video URL </h2>
            <div className='input-box diff'>
              <input type='text' placeholder='https://www.helpmeout/Untitled_Video_20232509'/>
              <button className='btn'>Copy URL</button>
            </div>

            <div className='social-box'>
              <p className='title'>Share your video</p>
              <div className='socials'>
                <div>
                  <img src={ faceBook } alt='socail icon'/>
                  <p>Facebook</p>
                </div>

                <div>
                  <img src={ whatsApp } alt='socail icon'/>
                  <p>WhatsApp</p>
                </div>

                <div>
                  <img src={ telegram } alt='socail icon'/>
                  <p>Telegram</p>
                </div>
              </div>
            </div>
          </div>
          <div className='vline'></div>
          <div className='video-trans'>
            <div className='vid-box'>
              {/* render video here */}
              <img src={ newCard } alt='vid-card'/>
            </div>
            <div className='transcribe-vid'>
              <div className='top'>
                <p>Transcript</p>
                <select className='move'>
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className='transcription'>
                <div className='row'>
                  <h4>0:01</h4>
                  <h4 className='none'>
                    First step. Open Facebook on your desktop or mobile device and locate "
                    Marketplace" in the left-hand menu or at the top of the
                  </h4>
                </div>

                <div className='row'>
                  <h4>0:15</h4>
                  <h4 className='none'>
                    First step. Open Facebook on your desktop or mobile device and locate "
                    Marketplace" in the left-hand menu or at the top of the
                  </h4>
                </div>

                <div className='row'>
                  <h4>0:30</h4>
                  <h4 className='none'>
                    First step. Open Facebook on your desktop or mobile device and locate "
                    Marketplace" in the left-hand menu or at the top of the
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='account'>
        <div>
          <h2>To ensure the availability and privacy of your video, 
            we recommend saving it to your account.</h2>
          <button className='btn-new'>Save Video</button>
          <h2>
            Don’t have an account? 
            <Link to='/signup'> Create account </Link>
          </h2>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Recording;