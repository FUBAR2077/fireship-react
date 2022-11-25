import React, { useState } from 'react';

import LoadingButton from '../components/LoadingButton';

import AnimalsList from '../components/AnimalsList';

import ButtonClickEvent from '../components/ButtonClickEvent';
import InputLogEvent from '../components/InputLogEvent';

import Incrementer from '../components/Incrementer';

import './style.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        <h1>Fireship - React</h1>
      </div>
      <br />
      //Conditional rendering
      <LoadingButton
        label="press me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
      <br />
      //Loops
      <AnimalsList />
      <br />
      //Events
      <ButtonClickEvent />
      <InputLogEvent />
      <br />
      //State
      <Incrementer />
    </>
  );
}
