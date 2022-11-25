import React, { useState, useEffect } from 'react';
import '../src/style.css';

export default function CountdownTimer ({hr, min, sec}){
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(true);
  const [[h,m,s], setTime] = useState([hr, min, sec])

  const fmt = (val) => val.toString().padStart(2, '0');

  const handlePause = () => {
    setPaused(!paused);
  }

  const handleReset = () => {
    setTime([hr,min,sec]);
    setPaused(true);
    setOver(false);
  }

  useEffect(() =>{
    let ticker = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(ticker);
    }
  });

  const tick = () => {
    if(paused || over){
      return;
    }
    if(h===0 && m===0 && s==0){
      setOver(true);
    } else if (m===0 && s===0){
      setTime([h-1, 59, 59]);
    } else if (s === 0){
      setTime([h, m-1, 59]);
    } else{
      setTime([h, m, s-1]);
    }
    
  }

  return(
    <>
      <h3 className='countdown'>{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
      <button onClick={handlePause}>{paused ? 'start' : 'pause'}</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}