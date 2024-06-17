import React, { useState } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const SyncedInputs: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Input label="First input" value={text} onChange={() => handleChange} />
      <Input label="Second input" value={text} onChange={() => handleChange} />
    </>
  );
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={() => onChange} />
    </label>
  );
};

export default SyncedInputs;
