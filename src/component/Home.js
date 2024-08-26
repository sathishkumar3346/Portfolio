import React from 'react';
import './Home.css';
import profilePhoto from './image2.png';

function Home() {
  return (
    <section id="home" className="home">
      <div className="h-content">
        <div className="h-text">
          <h1>Hi, I'm Sathishkumar </h1>
          <p>I'm a MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. With <br/> a B.E. in Computer Science and Engineering,  I build dynamic, responsive web applications <br/>and thrive on learning new technologies.</p>
        </div>
        <div className="h-image">
          <img src={profilePhoto} alt="Your Name" className="profile-photo"  />
        </div>
      </div>
    </section>
  );
}

export default Home;
