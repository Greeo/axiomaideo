import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Work from './Components/Work';
import Apps from './Components/Applications/Apps';
import Contact from './Components/Contact';
import Logo from './Components/Logo/Logo';
import './App.css';
// import Home from './Home';
// import Work from './Work';
// import Contact from './Contact';

const particlesOptions = {
  particles: {
    number: {
      value : 40,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'App'
    }
  }
onRouteChange = (route) => {
  this.setState({route: 'route'});
}

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <header className="App-header">
          <h1 className="App-title f1 tl pa5 ma2">Axiomaideo</h1>
        </header>
        <p className="App-intro">
        </p>
        <Logo />
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'App'
          ? <App onRouteChange={this.onRouteChange}/>
          :<div>
              <Work />
              <Apps />
              <Contact />
          </div>
        }
      </div>
    );
  }
}

export default App;
