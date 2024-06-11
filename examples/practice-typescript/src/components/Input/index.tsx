import '../../styles/component.scss';

interface InputProps {
  typeInput: string;
  styleClass: 'search';
  placeholder: string;
}

const Input = ({ typeInput, styleClass, placeholder }: InputProps) => {
  return (
    <input
      type={typeInput}
      className={styleClass}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
