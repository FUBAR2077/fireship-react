import React, { useState } from 'react';

import Navbar from '../components/Navbar';

import LoadingButton from '../components/LoadingButton';

import AnimalsList from '../components/AnimalsList';

import ButtonClickEvent from '../components/ButtonClickEvent';
import InputLogEvent from '../components/InputLogEvent';

import Incrementer from '../components/Incrementer';
import ObjectIncrementer from '../components/ObjectIncrementer';

import CountdownTimer from '../components/CountdownTimer';

import Context from '../components/Context';

import './style.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {true && (
        <>
          <div>
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
            //State object
            <ObjectIncrementer />
            <br />
            //Lifecycle
            <CountdownTimer hr={0} min={1} sec={0} />
            <Context />
          </div>
        </>
      )}
    </>
  );
}
