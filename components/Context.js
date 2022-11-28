import React, { useState, useEffect, useContext, createContext } from 'react';

const CountContext = createContext(0);

export default function Context() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      //Context
      <CountContext.Provider value={{ count, setCount }}>
        <Child />
        <button onClick={increment}>increment</button>
      </CountContext.Provider>

      <CountContext.Provider value={{ count, setCount }}>
        {"error > 3"}
        <CountError>
            <Count />
        </CountError>
        <DecrementButton />
      </CountContext.Provider>

    </>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  let { count } = useContext(CountContext);

  return (
    <>
      <div>{count}</div>
    </>
  );
}

function Count() {
  const { count } = useContext(CountContext);

  useEffect(() =>{
    if(count > 3){
      throw Error('error thrown');
    }
  });

  return (
  <>
    <h3> {`Count component count: ${count}`}</h3>
  </>
  );
}

function DecrementButton() {
  const { setCount } = useContext(CountContext);

  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
  );
}



class CountError extends React.Component{
  static countContext = CountContext;

  constructor(props){
    super(props);
    this.state = 
    {
      error: null, errorInfo: null 
    }
  }

  static getDerivedStateFromError(error){
    console.log('something went error', error);
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    return {
      error: error,
      errorInfo: errorInfo
    };
  }

  componentDidCatch(err, errInfo){
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render(){
    if(this.state.errorInfo){
      return(
        <div className="error-boundary">
          <h3>COUNT ERROR FALLBACK </h3>
        </div>
      )
    }
    return (
      <>
        <button onClick={this.incrementCount}>increment {this.state.count}</button>
        {this.props.children}
      </>
      );
  }
}

CountError.contextType = CountContext;