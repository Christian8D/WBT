import React, { Component } from "react";

class WBT extends Component {
  render() {
    return (
      <div className="universal">
        {/* header component */}
        <div className="header">
          <div className="header-logo">
            {/* <img src="/assets/wbt_logo.png" alt="WBT Logo" /> */}
          </div>
          <div className="header-links">
            <a className="links" href="#">
              HOME
            </a>
            <a className="links" href="#">
              TECHNOLOGY
            </a>
            <a className="links" href="#">
              PORTFOLIO
            </a>
            <a className="links" href="#">
              CONTACT
            </a>
          </div>
        </div>
        {/* hero image style for logo showcase */}
        <div className="hero">
          <div className="hero-logo">
            <img src="/assets/wbt_logo.png" alt="WBT" />
            <div className="hero-gif">
              <a href="#">
                <img src="/assets/scroll.gif" alt="Scroll Down" />
              </a>
            </div>
          </div>
        </div>
        {/* technologies container */}
        <div className="techno-grid">
          <div className="techno-box">
            <img src="assets/smartphone.png" />
            <h1>RESPONSIVE WEBDESIGN</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/computer.png" />
            <h1>MARKETING STRATEGIES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/photo-camera.png" />
            <h1>ORIGINAL PHOTOS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/camcorder.png" />
            <h1>ORIGINAL FILM</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* about spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>TEAM</h1>
            <h2>THE DUO</h2>
          </div>
        </div>
        {/* about the team */}
        <div className="team">
          <div className="team-grid">
            <div className="profile">
              <img src="assets/selfie.jpg" alt="Christian Cosio" />
              <h4>CHRISTIAN COSIO</h4>
              <p>Strategy Director & Founder</p>
            </div>
            <div className="profile">
              <img src="assets/selfie.jpg" alt="Osmosisss" />
              <h4>OSWALDO AROLDO ORTIZ</h4>
              <p>Creative Director & Founder</p>
            </div>
          </div>
        </div>
        {/* portfolio spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>PORTFOLIO</h1>
            <h2>A SELECTION FROM OUR WORK</h2>
          </div>
        </div>
        {/* portfolio showcase */}
        <div className="portfolio">
          <div className="portfolio-grid">
            <div className="portfolio-thumbs">
              <img src="assets/thumb.jpeg" alt="project" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
            <div className="portfolio-thumbs">
              <img src="assets/thumb.jpeg" alt="project" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
            <div className="portfolio-thumbs">
              <img src="assets/thumb.jpeg" alt="project" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
            <div className="portfolio-thumbs">
              <img src="assets/thumb.jpeg" alt="project" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
          </div>
        </div>
        {/* contact spacer */}
        <div className="spacer">
          <div className="spacer-text">
            <h1>CONTACT</h1>
            <h2>FEEL FREE TO REACH OUT</h2>
          </div>
        </div>
        {/* contact form */}
      </div>
    );
  }
}

export default WBT;
