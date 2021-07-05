import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import Header from "../Header";

const FancyInput = forwardRef((props, ref) => {
  const [text, setText] = useState("***");
  const entrada = useRef();
  // Las propiedades que pasemos en la función estarán disponibles para el padre.
  useImperativeHandle(ref, () => ({
    setParagraphText: (message) => {
      setText(message);
    },
    focusInput: () => entrada.current.focus()
  }));

  return (
    <>
      <h4>{text}</h4>
      <input type={ref} ref={entrada} />
    </>
  );
});

const UseImperativeHandleHook = () => {
  const fancyInput = useRef();

  const handleClick = () => {
    fancyInput.current.setParagraphText("Hello from <App/>");
  };
  const focusInput = () => {
    fancyInput.current.focusInput();
  };
  return (
    <div>
      <Header title="Hook useImperativeHandler" />
      <FancyInput ref={fancyInput} />
      <button onClick={handleClick}>Dispatch Click</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseImperativeHandleHook;
