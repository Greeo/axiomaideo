import React from 'react';

const Apps = ({ id, src, name, website }) => {
  return (
    <div className='tc ph3-ns bg-light-gray text-color-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div class="ph2-ns">
        <div class="fl w-100 pa2">
           <div class="pv4">
               <img alt='Applications' src={`./Assets/img/${'id'}?200x200`}/>
               <h4>{name}</h4>
               <p>{website}</p>
           </div>
         </div>
       </div>
    </div>
  );
}

export default Apps;
