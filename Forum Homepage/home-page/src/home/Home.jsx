// src/Home/Home.jsx
import React from 'react';
import './Home.css'; // Import the CSS file
import logo from './clg.webp';

const Home = () => {
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      
      {/* Start Landing Page */}
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">
              <img src={logo} alt="SKCT Logo" className="logo-image" />
              SKCT <b>FORUM</b>
            </a>
            <ul className="links">
              <li>Home</li>
              <li>About Us</li>
              <li>Work</li>
              <li>Info</li>
              <li>Get Started</li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Welcome to the SKCT Forum</h1>
              <p>Join the vibrant community of Sri Krishna College of Technology! Connect, share, and collaborate with fellow students and faculty. Let's build a thriving academic network together.</p>
              <button>Join Now</button>
            </div>
            <div className="image">
              <img className="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Main Visual"/>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </div>
  );
}

export default Home;
