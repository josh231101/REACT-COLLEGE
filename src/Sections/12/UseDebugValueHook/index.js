import React, { useDebugValue, useEffect, useMemo, useState } from "react";
import Header from "../Header";

const useSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useDebugValue("PrimerHook");

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width, height];
};

const UseDebugValueHook = () => {
  const [width, height] = useSizes();
  return (
    <>
      <Header title="Hook useDebugValue" />
      <h3>Check React DevTools :d</h3>
    </>
  );
};
export default UseDebugValueHook;
