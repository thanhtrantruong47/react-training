import { useState } from "react";

const CounterState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increased by 1 time</button>
      <button
        onClick={() => {
          handleClick();
          handleClick();
          handleClick();
        }}
      >
        Increased by 3 time
      </button>
      <p>Sum {count}</p>
    </div>
  );
};

export default CounterState;
