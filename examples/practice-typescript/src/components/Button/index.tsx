import '../../styles/component.scss';

interface ButtonProps {
  text: string;
  styleClass: 'btn-action' | 'btn-add';
}

const Button = ({ text, styleClass }: ButtonProps) => {
  return <button className={`btn  ${styleClass}`}>{text}</button>;
};

export default Button;
