import React from 'react';
import '../src/style.css';

const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
]

export default function AnimalsList(){
  return(
    <>
      <ul>
        {data && data.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
    </>
  );
}