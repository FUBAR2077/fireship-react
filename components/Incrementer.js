import React, {useState} from 'react';
import '../src/style.css';

export default function Incrementer(){
  const [count, setCount] = useState(1);
  const [prevCount, setPrevCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      setPrevCount(prev);
      setCount(count+1);
    })
  }

  return(
    <>
      <h3>Current count: {count}</h3>
      <h3>Previous count: {prevCount}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

