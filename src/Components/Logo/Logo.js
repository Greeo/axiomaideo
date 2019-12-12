import React from 'react';
import Tilt from 'react-tilt';
import Integrated_designer2 from './Integrated_designer2.png';
import './Logo.css';

const Logo = () => {

  return (
    <div className='ma4 mt0 center'>
       <div className='center ma4 pa4'>
          <Tilt className="Tilt center" style={{display: 'flex', justifyContent: 'space-between'}}>
           <div className="Tilt-inner center"><img alt='logo' src={Integrated_designer2}/></div>
          </Tilt>
       </div>
    </div>
  );
}

export default Logo;
