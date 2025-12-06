import React from 'react';
import { Link } from 'react-router-dom';
import './graphics.css';
import { portfolioProjects } from './portfolioData';

const Graphics = () => {
  // Function to render contribution bars
  const renderContributionBar = (value) => {
    return (
      <div className="contribution-bar">
        <div className="bar-fill" style={{ width: `${value}%` }}></div>
      </div>
    );
  };

  return (
    <div className="graphics-container">
      <nav className="graphics-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>

      <header className="graphics-header">
        <h1>🔮</h1>
        <p className="bio">
          Maxim is a frontend software engineer at The Washington Post.
        </p>
        <p className="contact-info">
           Here are data visualization / graphics projects he's worked on:
        </p>
      </header>

      <div className="portfolio-table">
        <div className="table-header">
          <div className="col-img">IMG</div>
          <div className="col-title">SELECTED PROJECTS</div>
          <div className="col-source">SOURCE</div>
          <div className="col-coding">CODING</div>
          <div className="col-visuals">VISUALS</div>
          <div className="col-reporting">WHAT I DID</div>
        </div>

        {portfolioProjects.map((project) => (
          <div key={project.id} className="table-row">
            <div className="col-img">
              <div className="project-thumbnail">
                {project.video ? (
                  <video
                    className="project-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={project.thumbnail}
                  >
                    <source src={project.video} type="video/mp4" />
                    {/* Fallback to thumbnail if video fails */}
                    {project.thumbnail && <img src={project.thumbnail} alt={project.title} />}
                  </video>
                ) : project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="project-image" />
                ) : (
                  <div className="thumbnail-placeholder"></div>
                )}
              </div>
            </div>
            <div className="col-title">
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </div>
            <div className="col-source">{project.source}</div>
            <div className="col-coding">{renderContributionBar(project.coding)}</div>
            <div className="col-visuals">{renderContributionBar(project.visuals)}</div>
            <div className="col-reporting">{project.whatIDid}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
