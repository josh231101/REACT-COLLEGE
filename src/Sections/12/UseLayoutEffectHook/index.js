import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../Header";

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect 1");
  }, [count]);
  useEffect(() => {
    console.log("useEffect 2");
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect 1");
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect 2");
  }, [count]);

  return (
    <div>
      <Header title="Hook useLayoutEffect" />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};
