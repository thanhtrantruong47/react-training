import '../../styles/component.scss';

interface InputProps {
  icon: string;
  typeInput: string;
  description: string;
  size: string;
}

const InputField = ({ icon, typeInput, description, size }: InputProps) => {
  return (
    <div className="input-group">
      <img src={icon} alt="Icon" height={size} width={size} />
      <input type={typeInput} placeholder={description} />
    </div>
  );
};

export default InputField;
