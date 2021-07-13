import UseStateHook from "../12/UseStateHook";
import CombiningHooks from "./CombiningHooks";
import CustomHooks from "./CustomHooks";
import ReactMemo from "./ReactMemo";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";
import UseDebugValueHook from "./UseDebugValueHook";
import UseEffectHook from "./UseEffectHook";
import UseImperativeHandleHook from "./UseImperativeHandleHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";

const Hooks = () => {
  return (
    <div>
      <h1 className="section-title">
        Sección 12: Master en React Hooks (componentes funcionales)
      </h1>
      <UseStateHook />
      <UseEffectHook />
      <UseLayoutEffectHook />
      <UseContextHook />
      <UseRefHook />
      <CombiningHooks />
      <UseReducerHook />
      <UseImperativeHandleHook />
      <ReactMemo />
      <UseCallbackHook />
      <UseMemoHook />
      <CustomHooks />
      <UseDebugValueHook />
    </div>
  );
};
export default Hooks;
