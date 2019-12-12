import React, { Component } from 'react';

class Home =({ onRouteChange }) => extends Component {
  render() {
    return (
      <div className="f2">
        <header className="Home-header">
          <h1 onClick={() => onRouteChange('home')} className="Home-title">Home</h1>
        </header>
        <p className="Home-intro">
        </p>
      </div>
    );
  }
}


export default Home;
