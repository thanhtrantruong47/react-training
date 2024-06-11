import '../../styles/component.scss';

interface InputProps {
  typeInput: string;
  styleClass: string;
  placeholder: string;
  typeClass: string
}

const Input = ({ typeInput, styleClass, placeholder ,typeClass}: InputProps) => {
  return (
    <input
      type={typeInput}
      className={`${styleClass} ${typeClass}`}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
