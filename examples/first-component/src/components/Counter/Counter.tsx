import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onTick = () => {
      setCount((c) => c + 1);
    };

    const intervalID = setInterval(onTick, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return <h1>{count}</h1>;
};

export default Counter;
