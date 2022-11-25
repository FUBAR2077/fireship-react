import React, { useState } from 'react';
import '../src/style.css';

export default function LoadingButton(props) {
  const { onClick, loading, label } = props;

  return (
    <button onClick={onClick} type="button">
      {loading ? <div className="loader" /> : label}
    </button>
  );
}
