import React, { useState } from 'react';
import LoadingButton from '../components/LoadingButton';
import LoadingButton2 from '../components/LoadingButton';
import './style.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <br />
      </div>

      <LoadingButton
        label="press me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />

      <LoadingButton2
        label="press me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}
