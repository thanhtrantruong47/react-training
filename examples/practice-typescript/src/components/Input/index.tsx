import '../../styles/component.scss';

interface InputProps {
  icon: string;
  typeInput: string;
  description: string;
  size: string;
}

const InputField = ({ icon, typeInput, description, size }: InputProps) => {
  return (
    <div className="input-container">
      <svg height={size} width={size}>
        <image href={icon} />
      </svg>
      <input type={typeInput} placeholder={description} />
    </div>
  );
};

export default InputField;
