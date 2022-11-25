import React, { useState } from 'react';
import '../src/style.css';

// export default function LoadingButton(props) {
//   return (
//     <button onClick={props.onClick} type="button">
//       {props.loading ? <div className="loader" /> : props.label}
//     </button>
//   );
// }

export const LoadingButton = (props) => {
  return (
    <button onClick={props.onClick} type="button">
      {props.loading ? <div className="loader" /> : props.label}
    </button>
  );
};
