import React, { useState } from "react";
import Header from "../Header";

const HookUseState = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setActive] = useState(false);
  const [state, setState] = useState({
    clicks: 0,
    title: "Holi"
  });
  const merge = (nextState) => {
    setState((_state) => ({
      ..._state,
      ...nextState
    }));
  };
  const addCounter = () => setCounter((_counter) => _counter + 1);
  const toggle = () => setActive((_isActive) => !_isActive);

  const addClick = () => {
    setState((_state) => ({ ..._state, clicks: _state.clicks + 1 }));
  };
  return (
    <div>
      <Header title="Hook useState" />
      <h2>Basics of useState</h2>
      <button onClick={addCounter}>{counter}</button>
      <br />
      {isActive && "Estoy activo"}
      <button onClick={toggle}>{isActive ? "DEACTIVATE" : "ACTIVATE"}</button>
      <h2>useState with Object</h2>
      <p>{state.title}</p>
      <button onClick={addClick}>{state.clicks}</button>
    </div>
  );
};

export default HookUseState;
