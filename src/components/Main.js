import React from 'react';
import './styles.css';
import image1 from './image1.png';
import image2 from './image2.png';
import cat from './cat.png';
import bunny from './bunny.png';
import seed from './seedling.png';


const Main = () => {
  return (
    <div className="container">
        <div className="Img">
            <img src={seed} alt="photo" width="100" height="100"/>
        </div>

      <header className="header">
        Hi, my name is Maxim!
      </header>

      <div className="about">
        <p>I'm a junior at Boston University studying Computer Science, where I teach accessibility and algorithmic bias.</p>
      </div>

      <ul className="links">
        <li><a href="https://www.linkedin.com/in/maximslo/">LinkedIn</a></li>
        <li><a href="https://github.com/maximslo">GitHub</a></li>
        <li><a href="./MaximResume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Resume PDF in a new tab" className="resume-link">Resume</a></li>
      </ul>
    </div>
  );
};

export default Main;
