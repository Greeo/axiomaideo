import React from 'react';
import Apps from './Apps';

const AppsList = ({ Applications }) => {
  const appsComponent = Applications.map((user, i) => {
    return <Apps id={Applications[i].id} src={Applications[i].src} name={Applications[i].name} website={Applications[i].website}/>

  })
  return (
    <div>
        {appsComponent}
    </div>
  );
}

export default AppsList;
