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

// not working
// export const LoadingButton = (props) => {
//   return (
//     <button onClick={props.onClick} type="button">
//       {props.loading ? <div className="loader" /> : props.label}
//     </button>
//   );
// };
