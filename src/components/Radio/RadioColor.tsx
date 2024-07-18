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
        <div
          className={`${styles.colorCircle}`}
          style={{
            '--color': color,
            backgroundColor: isChecked ? 'white' : color,
            border: isChecked ? 'var(--border-sm) solid var(--color-text-product)' : 'none',
          }}
        />
      </label>
    </>
  );
};

export default RadioColor;
