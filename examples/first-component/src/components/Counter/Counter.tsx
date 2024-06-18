import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onTick = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    const interval = setInterval(onTick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{count}</h1>;
};

export default Counter;
