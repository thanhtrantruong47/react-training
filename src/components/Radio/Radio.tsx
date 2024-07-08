interface RadioOption {
  variable: string;
  value: number;
}

interface RadioProps {
  options: RadioOption;
  onChange: () => void;
}

const Radio = ({ options, onChange }: RadioProps) => {
  return <></>;
};

export default Radio;
