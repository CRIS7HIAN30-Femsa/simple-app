import React, { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className="titulo">Contador de pulsaciones</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
