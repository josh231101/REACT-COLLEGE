import React, { useMemo, useState } from "react";
import Header from "../Header";

const SuperList = ({ list = [], log }) => {
  console.log("%cRender <SuperList />" + log, "color :green");

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const UseMemoHook = () => {
  const [clicks, setClicks] = useState(0);
  const add = () => setClicks(clicks + 1);
  const [b, setB] = useState(true);
  const memoList = useMemo(() => {
    return <SuperList list={[1, 2, 3, 4, 5, 6]} log="Memorizado" />;
  }, [b]);

  return (
    <>
      <Header title="Hook useMemo" />
      <button onClick={add}>Add</button>
      <p>clicks. {clicks}</p>
      <SuperList list={["orange", "pink", "purple", "yellow"]} log="Normal" />
      {memoList}
      <button onClick={() => setB(!b)}>{b.toString()}</button>
    </>
  );
};
export default UseMemoHook;
