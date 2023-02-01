import React from "react";
import { render } from "react-dom";

let index = -1;
const stateValues = [];

const useState = (initialValue) => {
  index++;

  const current = Number(index);

  if (stateValues[current] === undefined) stateValues[current] = initialValue;

  const setInitialValue = (newValue) => {
    stateValues[current] = newValue;
    renderApp();
  };

  return [stateValues[current], setInitialValue];
};

const App = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(1);

  return (
    <div>
      <h2>Count A: {countA}</h2>
      <button onClick={() => setCountA(countA + 1)}>Increment</button>
      <button onClick={() => setCountA(countA - 1)}>Decrement</button>

      <h2>Count B: {countB}</h2>
      <button onClick={() => setCountB(countB + 1)}>Increment</button>
      <button onClick={() => setCountB(countB - 1)}>Decrement</button>
    </div>
  );
};

const renderApp = () => {
  index = -1;
  render(<App />, document.getElementById("root"));
};

renderApp();
