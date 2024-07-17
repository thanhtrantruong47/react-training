import { useEffect, useState } from 'react';
import styles from './radio.module.css';

interface RadioColorProps {
  color: string;
  isChecked: boolean;
  onChange: () => void;
}

const RadioColor = ({ color, isChecked, onChange }: RadioColorProps) => {
  return (
    <>
      <input
        type="radio"
        name="color"
        value={color}
        id={color}
        className={styles.colorRadio}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={color} className={styles.colorOption} aria-label={`Select ${color}`}>
        <div className={`${styles.colorCircle}`} style={{ backgroundColor: isChecked ? 'white' : color }} />
      </label>
    </>
  );
};

interface ListOptionsProps {
  options: string[];
}

const RadioGroup = ({ options }: ListOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(options[0]);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-checked-color', selectedColor);
  }, [selectedColor]);

  const handleRadioChange = (index: number) => {
    setSelectedColor(options[index]);
  };

  return (
    <div className={styles.listColor}>
      {options.map((option, index) => (
        <RadioColor
          key={index}
          color={option}
          isChecked={option === selectedColor}
          onChange={() => handleRadioChange(index)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
