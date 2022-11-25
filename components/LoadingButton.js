import React, { useState } from 'react';
import './style.css';

export const LoadingButton = (props) => {
  return (
    <button onClick={props.onClick} type="button">
      {props.loading ? <div className="loader" /> : props.label}
    </button>
  );
};
