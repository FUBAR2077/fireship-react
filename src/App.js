import React, { useState } from 'react';
import LoadingButton from '../components/LoadingButton';
import AnimalsList from '../components/AnimalsList';

import ButtonClickEvent from '../components/ButtonClickEvent';
import InputLogEvent from '../components/InputLogEvent';

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
      //Conditional rendering
      <LoadingButton
        label="press me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
      //Loops
      <AnimalsList />
      //Events
      <ButtonClickEvent />
      <InputLogEvent />
    </>
  );
}
