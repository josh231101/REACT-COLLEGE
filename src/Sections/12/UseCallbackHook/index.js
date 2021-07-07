import React, { useCallback, useState } from "react";
import Header from "../Header";

const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ children, callback }) => {
  const styles = {
    padding: "0.4em",
    marginRight: "4px",
    border: "1px solid gray",
    fontSize: "20px",
    background: getRandomColor()
  };

  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

const UseCallbackHook = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const incrementA = useCallback(() => {
    setA((a) => a + 1);
  }, []);

  const incrementB = useCallback(() => {
    setB((b) => b + a);
  }, [a]);

  return (
    <>
      <Header title="Hook useCallback" />
      <Button callback={incrementA}>Increment A</Button>
      <Button callback={incrementB}>Increment B</Button>
      <h3>
        a:{a} b: {b}
      </h3>
    </>
  );
};

export default UseCallbackHook;
