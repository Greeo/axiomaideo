import React from 'react';
import './Navigation.css';
const Navigation = ({ onRouteChange }) => {

  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <ul>
          <li><a href='./Home.js' onClick={() => onRouteChange('app')} className="f2 link dim silver hover-white pa3 pointer">Home</a></li>
          <li><a href="./Work.js" className="f2 link dim silver hover-white pa3 pointer">Work</a></li>
          <li><a href="./Apps.js" className="f2 link dim silver hover-white pa3 pointer">Apps</a></li>
          <li><a href="./Contact.js" className="f2 link dim silver hover-white pa3 pointer">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navigation;
