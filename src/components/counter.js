import React from "react";

function Counter({ count, increment, decrement }) {
    
  let message = null;
  if (count > 30) {
    message = <p>¡El conteo es demasiado alto!</p>;
  }

  return (
    <div className="contador">
      <p>{count}</p>
      <h2>{message}</h2>
      <button onClick={increment} className="button-gen sep">Aumentar</button>
      <button onClick={decrement} className="button-gen sep">Disminuir</button>
    </div>
  );
}

export default Counter;
