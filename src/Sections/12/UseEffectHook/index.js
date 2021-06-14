import { useEffect, useState } from "react";
import Header from "../Header";
import ControlEffect from "./components/ControlEffect";
import ExampleListeners from "./components/ExampleListeners";
import UseEffectFetch from "./components/UseEffectFetch";

export default () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // componentDidMOunt
    // componentDidUpdate
    console.log("Dentro de useEffect", clicks);
    console.log("%c----------------", "color : green");

    return () => {
      // componentWillUNmount
      console.log("Return de useEffect", clicks);
    };
  });

  const add = () => setClicks((_clicks) => _clicks + 1);
  return (
    <div>
      <Header title="Hook useEffect" />
      <button onClick={add}>Número los clicks {clicks}</button>
      <ExampleListeners />
      <ControlEffect />
      <UseEffectFetch />
    </div>
  );
};
