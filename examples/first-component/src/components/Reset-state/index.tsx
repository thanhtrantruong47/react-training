import { useState } from "react";

const ResetState = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 10);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </div>
  );
};

const Form = () => {
  const [name, setName] = useState("Taylor");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </div>
  );
};

export default ResetState;
