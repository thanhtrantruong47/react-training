import './index.scss';

interface ButtonProps {
  text: string;
  style: 'btn__action' | 'btn__add';
}

const Button = ({ text, style }: ButtonProps) => {
  return <button className={`btn  ${style}`}>{text}</button>;
};

export default Button;
