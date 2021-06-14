import React, { useContext, useState } from "react";
import Header from "../Header";

const MyContext = React.createContext();

// CONSUMIR CONTEXT DE FORMA TRADICIONAL
/*const Nieto = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div>
          <h5>Nieto</h5>
          <p>Cuenta en nieto: {JSON.stringify(context)}</p>
          <button onClick={() => context.addNum()}>Add</button>
        </div>
      )}
    </MyContext.Consumer>
  );
};
*/
const Nieto = () => {
  // We can destructure
  const context = useContext(MyContext);
  return (
    <div>
      <h5>Nieto</h5>
      <p>Cuenta en nieto: {JSON.stringify(context)}</p>
      <button onClick={() => context.addNum()}>Add</button>
    </div>
  );
};

const Hijo = () => {
  return (
    <div>
      <h4>Hijo</h4>
      <Nieto />
    </div>
  );
};

export default () => {
  const [num, setNum] = useState(0);
  const addNum = () => setNum(num + 1);
  return (
    <MyContext.Provider value={{ num, addNum }}>
      <div>
        <Header title="Hook useContext" />
        <h3>useContext Effect</h3>
        <p>{num}</p>
        <Hijo />
      </div>
    </MyContext.Provider>
  );
};
