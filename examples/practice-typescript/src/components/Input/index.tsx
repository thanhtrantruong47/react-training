import './index.scss';

interface InputProps {
  type: string;
  style: 'search';
  placeholder: string;
}

const Input = ({ type, style, placeholder }: InputProps) => {
  return (
    <input type={type} className={style} placeholder={placeholder}></input>
  );
};

export default Input;
