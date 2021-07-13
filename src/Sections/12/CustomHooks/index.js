import React, { useEffect, useMemo, useState } from "react";
import Header from "../Header";

const useSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

const CustomHooks = () => {
  const [width, height] = useSizes();
  return (
    <>
      <Header title="Custom Hooks" />
      <h3>
        Width : {width} <br />
        Height : {height}
      </h3>
    </>
  );
};
export default CustomHooks;
