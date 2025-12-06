import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import seed from './seedling.png';

const Main = () => {
  return (
    <div className="container">
        <div className="Img">
            <img src={seed} alt="seedling icon" width="50" height="50"/>
        </div>

      <header className="header">
        Maxim<br />
        Slobodchikov
      </header>

      <div className="about">
        <p>Building healthy news ecosystems. At Boston University I taught accessible web design, and algorithm bias.</p>

      </div>

      <ul className="links">
        <li><Link to="/graphics">Graphics</Link></li>
        <li><a href="https://www.linkedin.com/in/maximslo/">LinkedIn</a></li>
        <li><a href="https://github.com/maximslo">GitHub</a></li>
        <li><a href="https://strava.app.link/iaJoaMXRwOb">Strava</a></li>
      </ul>
    </div>
  );
};

export default Main;