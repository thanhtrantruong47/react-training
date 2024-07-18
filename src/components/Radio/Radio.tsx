import { useState } from 'react';
import styles from './radio.module.css';
import RadioColor from './RadioColor';

interface ListOptionsProps {
  options: string[];
}

const RadioGroup = ({ options }: ListOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(options[0]);

  const handleRadioChange = (index: number) => {
    setSelectedColor(options[index]);
  };

  return (
    <div className={styles.listColor}>
      {options.map((option, index) => (
        <RadioColor
          key={option}
          color={option}
          isChecked={option === selectedColor}
          onChange={() => handleRadioChange(index)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
