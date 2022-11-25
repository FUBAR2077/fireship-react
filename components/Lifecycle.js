import React, { useState } from 'react';
import '../src/style.css';

class Lifecycle extends React.Component {
  componentDidMount() {
    // Initialize
  }

  componentDidUpdate() {
    // Updated
  }

  componentWillUnmount() {
    // Removed
  }
}

function LifecycleUseEffect() {
  const [count] = useState(0);

  useEffect(() => {
    console.log('count updated!');

    return () => console.log('destroyed');
  }, [count]);
}
