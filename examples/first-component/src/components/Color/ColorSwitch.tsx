interface ColorSwitchProps {
  onChange: () => void;
}

const ColorSwitch = ({ onChange }: ColorSwitchProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
    >
      Change color
    </button>
  );
};

export default ColorSwitch;
