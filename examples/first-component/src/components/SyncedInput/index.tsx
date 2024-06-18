import { ChangeEvent, useState } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SyncedInputs = () => {
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </>
  );
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default SyncedInputs;
