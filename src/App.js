import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
const App = () => {
  // state = {
  //   isVisible: false,
  // };

  const [isVisible, setIsVisible] = useState(false);
  //       getter       setter            initialisation
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>Workshop React State</h1>
      <button onClick={() => toggleVisibility()} className="visibility-btn">
        {isVisible ? "Hide Counter" : "Show Counter"}
      </button>
      {isVisible && <Counter />}
    </div>
  );
};

export default App;
