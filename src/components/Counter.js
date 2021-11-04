import React, { useEffect, useState } from "react";

const Counter = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //     intervall: null,
  //     timer: 0,
  //   };
  //   console.log("run constructor");
  // }
  const [count, setCounter] = useState(0);
  const [intervallId, setIntervallId] = useState(null);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    count && setCounter(count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    const id = setInterval(() => {
      // setTimer(timer + 1);
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervallId(id);
    return () => {
      console.log("component will unmount");
      clearInterval(intervallId);
    };
  }, []);

  // componentDidMount = () => {
  //   console.log("run componentDidMount ");

  //   this.setState({
  //     intervall: setInterval(() => {
  //       this.setState({ timer: this.state.timer + 1 });
  //     }, 1000),
  //   });
  // };

  // componentWillUnmount = () => {
  //   console.log("run componentWillUnmount ");
  //   clearInterval(this.state.intervall);
  // };
  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={() => decrement()}>
        -
      </button>
      <span>{count}</span>
      <button className="increment-btn" onClick={() => increment()}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={() => reset()}>
        Reset
      </button>
      <h2>{timer}</h2>
    </div>
  );
};

export default Counter;
