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
          </div>
          <div className="hero-gif">
            <a href="#">
              <img src="/assets/scroll.gif" alt="Scroll Down" />
            </a>
          </div>
        </div>
        {/* technologies container */}
        <div className="techno-grid">
          <div className="techno-box">
            <h1>RESPONSIVE WEBDESIGN</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <h1>ORIGINAL PHOTOGRAPHY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <h1>MARKETING STRATEGIES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="techno-box">
            <h1>ORIGINAL FILM</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* portfolio spacer */}
        <div className="spacer">
          <h1>Portfolio</h1>
          <h2>Check out our work</h2>
        </div>
        {/* portfolio showcase */}
        <div className="portfolio">
          <div className="portfolio-grid">
            <div className="portfolio-thumbs">
              <img src="#" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
            <div className="portfolio-thumbs">
              <img src="#" />
              <h2>Title</h2>
              <p>Content text</p>
            </div>
          </div>
        </div>
        {/* contact spacer */}
        <div className="spacer">
          <h1>Contact</h1>
          <h2>Check out our work</h2>
        </div>
        {/* contact form */}
      </div>
    );
  }
}

export default WBT;
