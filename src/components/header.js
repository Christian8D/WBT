import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <img src="#"/>
                </div>
                <div className="menu-wrap"></div>
                <div className="menu">
                   <div className="bar"></div>
                   <div className="bar"></div>
                   <div className="bar"></div>
                
                
            <ul className="link-grid">
                   <li> <a>Home</a> </li>
                   <li><a>Technologies</a></li>
                   <li><a>Projects</a></li>
                   <li><a>Contact</a></li>
            </ul>
            </div>
            </div>
        );
    }
}

export default Header;
