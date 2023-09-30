import React from 'react'
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Logo from '../assets/logs.png';
import image1 from '../assets/image-1.png'; 
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';
import image5 from '../assets/image-5.png';
import image6 from '../assets/image-6.png';
import image7 from '../assets/image-7.png';
import card from '../assets/card.png';
import arrow from '../assets/arrow-right.png'
import './style.css';

const Home = () => {
  return (
    <>
      <div className='container-main'>
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
        <section className="hero-section fix">
          <div className="texts">
            <h1>show them don't just tell</h1>
            <p className='hi'>
              Help your friends and loved ones by creating and sending videos on how to get things done on a website.
            </p>
            <div className='btn-main'>
              <p>Install HelpMeOut</p>
              <img src={arrow} alt='#'/>
            </div>
          </div>
          <div className="image">
            <div className="row-1">
              <img src={image1} alt="#" />
              <img src={image2} alt="#" />
            </div>
            <div className="row-2">
              <img src={image3} alt="#" />
            </div>
          </div>
        </section>
        <div className='blank'></div>
        <section className="features" id="feature">
          <h2>Features</h2>
          <p>Key Highlights of Our Extension</p>
          <div className='flex box-container'>
            <div className="description">
              <div className="feature-1">
                <img src={image4} alt="#" />
                <div>
                  <h3>Simple Screen Recording</h3>
                  <p>
                    Effortless screen recording for everyone. Record with ease, no tech expertise required.
                  </p>
                </div>
              </div>

              <div className="feature-1">
                <img src={image5} alt="#" />
                <div>
                  <h3>Easy-to-Share URL</h3>
                  <p>
                    Effortless screen recording for everyone. Record with ease, no tech expertise required.
                  </p>
                </div>
              </div>

              <div className="feature-1">
                <img src={image6} alt="#"/>
                <div>
                  <h3>Revisit Recordings</h3>
                  <p>
                    Effortless screen recording for everyone. Record with ease, no tech expertise required.
                  </p>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={image7} alt="videqo repo" />
            </div>
          </div>
        </section>
        <div className='blank'></div>
        <section className="howitworks" id="howitworks">
          <h2>How it works</h2>
          <div className="box-container">
            <div className="card">
              <div className="number">
                <h2> 1 </h2>
              </div>
              <div className="top">
                <h3>record screen</h3>
                <p>
                  Click the "Start Recording" button in our extension.  
                  choose which part of your screen to capture and who you want to send it to.
                </p>
              </div>
              <div className="bottom">
                <img src={card} alt="#" />
              </div>
            </div>

            <div className="card">
              <div className="number">
                <h2> 2 </h2>
              </div>
              <div className="top">
                <h3>share your recording</h3>
                <p>
                  We generate a shareable link for your video. Simply send it to your audience 
                  via email or copy the link to send via any platform.
                </p>
              </div>
              <div className="bottom">
                <img src={card} alt="#" />
              </div>
            </div>

            <div className="card">
              <div className="number">
                <h2> 3 </h2>
              </div>
              <div className="top">
                <h3>learn effortlessly</h3>
                <p>
                  Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                </p>
              </div>
              <div className="bottom">
                <img src={card} alt="#" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home