interface RadioOption {
  variable: string;
  value: number;
}

interface RadioProps {
  options: RadioOption;
  onChange: () => void;
}

const Radio = (_: RadioProps) => {
  return <></>;
};

export default Radio;
