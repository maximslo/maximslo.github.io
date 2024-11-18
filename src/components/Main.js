import React from 'react';
import './styles.css';
import seed from './seedling.png';

const Main = () => {
  return (
    <div className="container">
        <div className="Img">
            <img src={seed} alt="photo" width="50" height="50"/>
        </div>

      <header className="header">
        Maxim<br />
        Slobodchikov
      </header>

      <div className="about">
        <p>I'm a senior at Boston University studying Computer Science, where I teach accessibility and algorithmic bias.</p>
      </div>

      <ul className="links">
        <li><a href="https://www.linkedin.com/in/maximslo/">LinkedIn</a></li>
        <li><a href="https://github.com/maximslo">GitHub</a></li>
        <li><a href="https://strava.app.link/iaJoaMXRwOb">Strava</a></li>
      </ul>
    </div>
  );
};

export default Main;