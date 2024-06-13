import '../../styles/component.scss';

interface InputProps {
  icon: string;
  typeInput: string;
  placeholder: string;
  iconSize: number;
}

const Input = ({ icon, typeInput, placeholder, iconSize }: InputProps) => {
  return (
    <div className="input-group">
      <img src={icon} alt="Icon" height={iconSize} width={iconSize} />
      <input type={typeInput} placeholder={placeholder} />
    </div>
  );
};

export default Input;
