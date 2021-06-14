import { useRef } from "react";
import Header from "../Header";

export default () => {
  const entrada = useRef();

  const focus = () => entrada.current.focus();
  const blur = () => entrada.current.blur();
  return (
    <div>
      <Header title="Hook useRef" />
      <input type="text" ref={entrada} placeholder="INgresa texto" />
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
    </div>
  );
};
