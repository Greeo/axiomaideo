import React from 'react';
import Card from './Card';

const CardList = ({ Clients }) => {
  const cardComponent = Clients.map((user, i) => {
    return <Card id={Clients[i].id} src={Clients[i].src} name={Clients[i].name} website={Clients[i].website}/>

  })
  return (
    <div>
        {cardComponent}
    </div>
  );
}

export default CardList;
