import React, { useState, useEffect, useContext, createContext } from 'react';

const CounterContext = createContext(0);

export default function Context() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      //Context
      <CounterContext.Provider value={{ count, setCount }}>
        <Child />
        <button onClick={increment}>increment</button>
      </CounterContext.Provider>

      <CounterContext.Provider value={{ count, setCount }}>
        {"error > 3"}
        <CounterErrorBoundary>
            <Counter />
        </CounterErrorBoundary>
      </CounterContext.Provider>
    </>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  let { count } = useContext(CounterContext);

  return (
    <>
      <div>{count}</div>
    </>
  );
}


class CounterErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = 
    {
      error: null, 
      errorInfo: null 
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
      error: err,
      errorInfo: errInfo
    })

    console.log(err, errInfo);
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
        {this.props.children}
      </>
      );
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const counterContext = this.context;

    if(counterContext.count > 3){
      throw new Error('error thrown');
    }

    return(
    <>
      <h3> {`Count component count: ${counterContext.count}`}</h3>
    </>
    );
  };
}

Counter.contextType = CounterContext;

