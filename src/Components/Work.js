import React, { Component } from 'react';
import CardList from './CardList';
import { Clients } from './Clients';

class Work extends Component {
  render() {
    return (
      <div className='f2'>
        <header className="Work-header">
          <h1 className="Work-title">Work</h1>
        </header>
        <CardList Clients={Clients}/>
        <p className="Work-intro">
        </p>
      </div>
    );
  }
}


export default Work;
