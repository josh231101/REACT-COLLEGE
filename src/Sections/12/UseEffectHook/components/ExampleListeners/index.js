import { useEffect, useState } from "react";

export default () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateAxis = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateAxis);
    return () => {
      // component unomounts
      window.removeEventListener("mousemove", updateAxis);
    };
  });
  return (
    <div>
      <h3>Example </h3>X : {x} Y : {y}
    </div>
  );
};
