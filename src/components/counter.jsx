import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <hr />
      <h1>Counter</h1>
      <div id='counter'>
        <button
          onClick={() => {
            setCount(count - 1);
          }}>
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          +
        </button>
      </div>
      <hr />
    </div>
  );
}
