import React, { useState } from "react";
import Header from "../Header";

const Counter = React.memo(({ count }) => {
  console.log("%cRender <COunter />", "color : blue");
  return <h1>{count}</h1>;
});

const Title = React.memo(({ title }) => {
  console.log("%cRender <Title />", "color : red");
  return <h1>{title}</h1>;
});
const TitleNested = React.memo(
  ({ text }) => {
    console.log("%cRender <Title />", "color : orange");
    return <h1>{text.title}</h1>;
  },
  (prevProps, nextProps) => {
    // Diferentiation Algorithm
    // true - does not render
    // false - this renders
    return prevProps.text.title === nextProps.text.title;
  }
);
// React.memo es un HOC

const ReactMemo = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="React Memo" />
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <Counter count={count} />
      <Title title={title} />
      <TitleNested text={{ title }} />
    </div>
  );
};

export default ReactMemo;
