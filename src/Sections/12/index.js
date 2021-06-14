import UseStateHook from "../12/UseStateHook";
import UseContextHook from "./UseContextHook";
import UseEffectHook from "./UseEffectHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import UseRefHook from "./UseRefHook";

const Hooks = () => {
  return (
    <div>
      <UseStateHook />
      <UseEffectHook />
      <UseLayoutEffectHook />
      <UseContextHook />
      <UseRefHook />
    </div>
  );
};
export default Hooks;
