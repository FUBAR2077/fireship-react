import React, { useState } from 'react';
import '../src/style.css';

export default function ButtonClickEvent(){
  return <button onClick={(event) => console.log(event)}>Click</button>;
}