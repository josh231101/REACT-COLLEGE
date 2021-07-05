import { useState, useEffect, useRef } from "react";
import Header from "../Header";

export default () => {
  const [name, setName] = useState("");
  const [products, setData] = useState([]);
  const entrada = useRef();
  const handleInput = (e) => setName(e.target.value);

  useEffect(() => {
    // Mejorar UX con un debounce
    setTimeout(() => {
      if (name === entrada.current.value) {
        fetch(
          "https://universidad-react-api-test.luxfenix.vercel.app/products?name=" +
            name
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data.products);
          });
      }
    }, 600);
  }, [name]);

  return (
    <div>
      <Header title="useState,useEffect,useRef" />
      <input type="text" onChange={handleInput} value={name} ref={entrada} />
      {products.map((_products) => (
        <li key={_products.key}>{_products.name}</li>
      ))}
    </div>
  );
};
