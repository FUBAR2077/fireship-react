import React, { useState } from 'react';
import '../src/style.css';

export default function InputLogEvent(){
  const [inputValue, setInputValue] = useState('');

  function onInputChange(e){
    console.log('input target: '+e.target.value);
    setInputValue(e.target.value);
  }

  const onInputChangeEventHandler = (e) =>{
    console.log('input target: '+e.target.value);
    setInputValue(e.target.value);
  }

  return(
    <input 
    value={inputValue} 
    onChange={e => onInputChange(e)}
    //onChange={onInputChangeEventHandler}
    placeholder='input here'/>
  );
}