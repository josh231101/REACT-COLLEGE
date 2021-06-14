import { useEffect, useState } from "react";

export default () => {
  const [emoji, setEmoji] = useState("🌝");
  const [num, setNum] = useState(0);
  const [update, setUpdates] = useState(0);

  useEffect(() => {
    setUpdates((upd) => upd + 1);
  }, [emoji]);

  const toggleEmoji = () => (emoji === "🌚" ? setEmoji("🌝") : setEmoji("🌚"));
  useEffect(() => {}, []);
  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Control useEffect</h3>
      <button onClick={() => setNum((num) => num + 1)}>Add ({num})</button>
      <button onClick={toggleEmoji}>Toggle emoji</button>
      <h4>{emoji}</h4>
      <p>{update}</p>
    </div>
  );
};
